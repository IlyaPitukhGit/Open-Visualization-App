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

The system follows a **three-layer architecture**, ensuring modularity, maintainability, and scalability.

### 1. Presentation Layer (Frontend - ReactJS)

Responsible for user interaction, data visualization, and input validation.

- **File Upload & Validation Module**  
  Ensures data structure correctness before processing.
  
- **Dynamic Visualization Engine**  
  Renders real-time A-scan and B-scan charts using Canvas/Chart.js.
  
- **UX-Oriented Interface**  
  Responsive UI with onboarding hints and adaptive layout for desktop/mobile.

---

### 2. Application Layer (Backend - Node.js + Express)

Handles business logic, file parsing, data transformation, and communication with storage.

- **File Parser Services**
  - `CSVParser` – handles custom column mappings and format validation
  - `JSONNormalizer` – flattens nested structures and validates required keys
  - `XMLDeserializer` – parses XML and maps tags to standard object format

- **Scan Processing Engine**
  - `DataConverter` – transforms raw arrays into standardized formats
  - `IntegrityChecker` – detects anomalies, duplicates, and missing values

- **Middleware**
  - Authentication / session handling
  - Cloud upload controller (S3-compatible)

---

### 3. Data Layer (PostgreSQL + Cloud Storage)

Provides persistent storage and structured access to data and file metadata.

- **Relational Database (PostgreSQL)**
  - Tables for user sessions, scan metadata, file references
  - Indexing and historical version tracking

- **Cloud File Storage**
  - Supports Amazon S3, Cloudinary, or local fallback
  - Automatic backup and restore capabilities

---

### 🔐 Key Architectural Highlights

- Fully **modular system** with loose coupling between layers
- **RESTful API** for seamless communication
- Stream-based file processing for large datasets
- Adaptable to new formats and future scan types (C-scan support planned)
- Cloud-agnostic deployment (Docker-ready)

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


git clone https://github.com/IlyaPitukhGit/Open-Visualization-App.git
cd Open-Visualization-App

# Install frontend and backend dependencies
npm install
cd server && npm install

# Run both frontend and backend in development
npm run dev

---

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