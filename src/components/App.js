import "./App.css";

import React, { useState } from "react";
import FileUploadComponent from "./FileUploadComponent/FileUploadComponent";
import SettingsComponent from "./SettingsComponent/SettingsComponent";
import VisualizationAComponent from "./VisualizationComponent/VisualizationAComponent";
import VisualizationBComponent from "./VisualizationComponent/VisualizationBComponents";
import Aside from "./Aside/Aside";
import Menu from "./Menu/Menu";

function App() {
    const [fileData, setFileData] = useState(null);
    const [scanType, setScanType] = useState("A-scan");
    const [isAsideOpen, setIsAsideOpen] = useState(false);

    const toggleAside = () => setIsAsideOpen(prev => !prev);

    return (
        <div className="app-container">
            <Aside isOpen={isAsideOpen} closeMenu={() => setIsAsideOpen(false)} />
            <main className="main">
                <header className="header">
                    <div className="header__container">
                        <h1 className="header__title">
                            Ultrasonic NDT Scanning
                        </h1>
                        <Menu active={isAsideOpen} toggleMenu={toggleAside} />
                    </div>
                </header>
                <div className="main__container">
                    <h2 className="main__title">
                        {scanType === "A-scan"
                            ? "A-scan Visualization"
                            : "B-scan Visualization"}
                    </h2>
                    {/* Settings Component to choose scan type */}
                    <SettingsComponent
                        scanType={scanType}
                        setScanType={setScanType}
                    />

                    {/* File Upload Component */}
                    <FileUploadComponent
                        onFileData={setFileData}
                        scanType={scanType}
                    />

                    {/* Visualization Component */}
                    <div className="visualization-container">
                        {scanType === "A-scan" && (
                            <VisualizationAComponent data={fileData} />
                        )}
                        {scanType === "B-scan" && (
                            <VisualizationBComponent data={fileData} />
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
