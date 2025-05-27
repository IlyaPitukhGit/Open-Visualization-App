const express = require("express");
const fs = require("fs");
const multer = require("multer");
const path = require("path");

const Papa = require("papaparse"); // Переконайтесь, що ця бібліотека доступна

const app = express();

const upload = multer({ dest: "uploads/" });

app.post("/api/upload", upload.single("scanFile"), (req, res) => {
    const filePath = req.file.path;
    const scanType = req.body.scanType;

    fs.readFile(filePath, "utf8", (err, fileData) => {
        if (err) {
            console.error("Error reading file:", err);
            res.status(500).json({ error: "Error reading file" });
            return;
        }

        Papa.parse(fileData, {
            header: true,
            dynamicTyping: true,
            complete: (results) => {
                const parsedData = results.data;

                if (scanType === "A-scan") {
                    const aScanData = parsedData.map((row) => ({
                        time: row["Time (µs)"],
                        ch1: row["CH1_Voltage (mV)"],
                        ch2: row["CH2_Voltage (mV)"],
                    }));
                    res.json(aScanData);
                } else if (scanType === "B-scan") {
                    const bScanData = parsedData.reduce((acc, row) => {
                        const position = row["Position (mm)"];
                        const intensity = row["CH1_Voltage (mV)"];
                        if (!acc[position]) acc[position] = [];
                        acc[position].push(intensity);
                        return acc;
                    }, {});
                    res.json(bScanData);
                    const first10Entries = Object.entries(bScanData).slice(
                        0,
                        2
                    );
                    console.log(
                        "Перші 10 записів об’єкта:",
                        Object.fromEntries(first10Entries)
                    );
                }
            },
            error: (parseErr) => {
                console.error("Error parsing CSV:", parseErr);
                res.status(500).json({ error: "Error parsing CSV" });
            },
        });
    });
});

// Підтримка статичних файлів з папки "build" для продакшн
app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(5001, () => {
    console.log("Server is running on port 5001");
});
