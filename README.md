# Paw-Fect Match

## Introduction
Paw-Fect Match is a platform designed to connect pet lovers with pets in need of a home. It simplifies the adoption process with a user-friendly interface, enhanced security, and robust functionality.

## Features
- **Pet Submission:** Users can submit pets for adoption by filling out a form.
- **Admin Review:** Admins review submissions and approve or reject them.
- **Pet Listings:** Approved pets are listed for potential adopters to view.
- **Adoption Application:** Users interested in adopting a pet can submit an application.
- **Adoption Evaluation:** Admins evaluate applications to select the most suitable adopter.
- **Adoption History:** Admins maintain records of adopted pets and their new owners.
- **Pet Browsing & Search:** Users can browse and search for available pets.
- **Filtering:** Pets can be filtered based on type (dog, cat, fish, etc.).
- **Detailed Profiles:** Each pet has a profile with photos and descriptions.

## Technology Stack
Paw-Fect Match is built using the **MERN** stack:
- **MongoDB** (Database)
- **Express.js** (Backend)
- **React.js** (Frontend)
- **Node.js** (Server)
- **JWT Authentication** and **OTP Verification** for enhanced security.

## Compatibility Notice
**This project is optimized for laptop screens** and is not responsive for mobile or tablet devices.

## Installation Guide
Follow these steps to set up the project locally:

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/yousuf-fahim/Paw-Fect-Match-v2.0-JWT-OTP-Admin-Dashboard.git
   ```
2. **Install Dependencies:**
   ```sh
   npm install
   ```
3. **Configure Environment Variables:**
   Create a `.env` file in the `server` directory and add the following variables:
   ```env
   mongooseURL=mongodb+srv://username:password@cluster-url.mongodb.net/?retryWrites=true&w=majority&appName=Paw-Fect-Match-pet-adoption-system
   SECRET=your_jwt_secret_key  # Any random string
   EMAIL_USER=your_email@example.com
   EMAIL_APP_PASS=your_email_app_password
   ```
4. **Run the Server:**
   ```sh
   nodemon server  # Automatically restarts on file changes
   ```
5. **Start the Frontend:**
   ```sh
   npm start
   ```

## Setting Up an Email App Password
To enable your app to send emails via Gmail, follow these steps:

1. **Enable 2-Step Verification:**
   - Visit your Google Account Security page and ensure **2-Step Verification** is enabled.
2. **Generate an App Password:**
   - Navigate to **Signing in to Google** > **App Passwords**.
   - Select the app (e.g., "Mail") and device (e.g., "Other").
   - Copy the generated password.
3. **Update the `.env` File:**
   ```env
   EMAIL_APP_PASS=your_generated_app_password
   ```

## Prerequisites
- Ensure **Node.js** and **npm** are installed on your system.

## Contributing
We welcome contributions to improve Paw-Fect Match! To contribute:

1. **Fork the repository.**
2. **Create a new branch:**
   ```sh
   git checkout -b feature-new-feature
   ```
3. **Make changes and commit:**
   ```sh
   git commit -m "Add new feature"
   ```
4. **Push to your branch:**
   ```sh
   git push origin feature-new-feature
   ```
5. **Submit a pull request** with a description of your changes.

---
Thank you for supporting Paw-Fect Match! 🐾

