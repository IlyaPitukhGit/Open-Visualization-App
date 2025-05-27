# Open Visualization App

> **A professional-grade web application for automated visualization and processing of ultrasonic flaw detector data.**  
> Master's Thesis Project · National Technical University of Ukraine "Igor Sikorsky Kyiv Polytechnic Institute"

---

## 📌 Project Overview

**Open Visualization App** is a cross-platform web-based solution designed to streamline the processing, standardization, and graphical visualization of ultrasonic non-destructive testing (NDT) data. Unlike traditional desktop-bound inspection tools, this application leverages the flexibility of modern web technologies to support real-time analysis of A-scan and B-scan formats directly in the browser.

Developed as part of a master’s thesis in the field of Computer-Integrated Technologies and Robotics, the application aims to address major limitations of existing proprietary software — lack of interoperability, limited file format support, and insufficient accessibility.

---

## 🧠 Key Features

- 📁 **Multi-format file support**: CSV, JSON, XML parsing with structural validation and standardization
- 📈 **Graph generation**: Interactive real-time A-scan and B-scan visualization
- 🔍 **Data processing algorithms**: Conversion, normalization, error checking and interpolation
- ☁️ **Cloud-native**: Persistent cloud storage and automatic backup of datasets
- 🧩 **Scalable architecture**: Modular design with clear separation of concerns (frontend/backend/data layer)
- 📱 **Responsive UI**: Adaptive interface optimized for desktop and mobile devices
- 🔐 **Multi-user collaboration**: Session-based access with secure data management
- 📊 **Database integration**: PostgreSQL for structured storage of scan metadata and historical tracking

---

## 🏗 System Architecture

The system adheres to a **three-layer architectural pattern**, ensuring separation of logic and scalability:

Presentation Layer (ReactJS)
│
├── File Upload & Validation Module
├── Dynamic Visualization Engine (A-scan, B-scan)
├── UX Guided Interface & Assistants
│
Application Layer (Node.js + Express)
│
├── File Parser Services (CSVParser, JSONNormalizer, XMLDeserializer)
├── Scan Processing Engine (DataConverter, IntegrityChecker)
├── Cloud Upload Handlers & Auth Middleware
│
Data Layer (PostgreSQL / Cloud Storage)
├── File Registry, Scan Metadata Tables
├── Auto-backup & Versioning System


All modules communicate via a custom RESTful API designed for high throughput, enabling real-time data flow and incremental rendering.

---

## 💻 Technology Stack

| Area             | Technology             |
|------------------|-------------------------|
| **Frontend**     | ReactJS, TypeScript, Chart.js, CSS Modules |
| **Backend**      | Node.js, Express.js, Multer, REST API       |
| **Database**     | PostgreSQL / MySQL, Sequelize ORM           |
| **Storage**      | Cloudinary / S3 (pluggable), Local fallback |
| **DevOps Ready** | Dockerized architecture, environment configs via `.env` |

---

## 🚀 Setup & Deployment

Clone the project and install dependencies:

```bash
git clone https://github.com/IlyaPitukhGit/Open-Visualization-App.git
cd Open-Visualization-App

# Install frontend and backend dependencies
npm install
cd server && npm install

# Run both frontend and backend in development
npm run dev

🧪 Supported File Formats
CSV Example:

For A Scan:

Time (µs),CH1_Voltage (mV),CH2_Voltage (mV)
0.0,-0.019722294124861584,-0.01591043359097907
0.02,0.3566827679762247,0.28099344737298065

For B Scan:

Position (mm),Time (µs),CH1_Voltage (mV),CH2_Voltage (mV)
0,0.0,0.011965604299161586,0.012367464269675615
0,0.02,0.30217360583247516,0.31152794960633745

📊 Visualization Modes
A-scan (Amplitude over Time): Suitable for defect depth estimation

B-scan (Depth over Position): 2D representation with brightness-based defect mapping

Automatic Generation: From series of A-scans into combined B-scan matrix

Use Cases
🏭 Industrial ultrasonic testing (welds, pipelines, structural components)

🛰 Aerospace defectography (composites, fuselage panels)

🏗 Construction safety analysis (bridges, metal frameworks)

🎓 Academic training and simulation for NDT methods

📚 Scientific & Practical Value
This project presents the first universal web-based system for ultrasonic NDT data visualization with real-time feedback and hardware-agnostic compatibility. It aligns with modern trends of platform-independent industrial analytics.

📘 Developed and defended as part of the Master's Dissertation:
“Web application for visualization of ultrasonic flaw detector data”
Kyiv Polytechnic Institute · Department of Non-Destructive Testing Automation

👤 Author
Ілля Пітух
GitHub: @IlyaPitukhGit