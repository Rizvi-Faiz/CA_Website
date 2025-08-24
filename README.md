# CA Website

This project is a website for a Chartered Accountant (CA) firm, featuring various calculators, tax information, and a news/bulletin section. The news and bulletin content is managed via a Firebase Firestore database and served through a Vercel Serverless Function.

## Table of Contents

1.  [Project Overview](#project-overview)
2.  [Features](#features)
3.  [Local Development Setup](#local-development-setup)
    *   [Prerequisites](#prerequisites)
    *   [Installation](#installation)
    *   [Running Locally](#running-locally)
4.  [Firebase Firestore Setup](#firebase-firestore-setup)
5.  [Deployment to Vercel](#deployment-to-vercel)
    *   [Frontend Deployment](#frontend-deployment)
    *   [Backend (Serverless Function) Deployment](#backend-serverless-function-deployment)
    *   [Environment Variables on Vercel](#environment-variables-on-vercel)
6.  [API Endpoints](#api-endpoints)

## Project Overview

This project provides a comprehensive online presence for a CA firm. It includes:
*   A frontend built with React.js.
*   A backend for managing news/bulletins, implemented as a Vercel Serverless Function.
*   Firebase Firestore as the online database for storing news/bulletin data.

## Features

*   **Calculators**: GST, Tax, TDS, EMI.
*   **Knowledge Bank**: Information on Acts, Rules, Forms, and Utilities.
*   **News & Bulletins**: Dynamic news updates fetched from an online database.
*   **Admin Panel**: Interface for managing news content (add, edit, delete).
*   **Tax Deadline Alerts**: Displays important tax deadlines.

## Local Development Setup

### Prerequisites

Before you begin, ensure you have the following installed:
*   Node.js (v18 or higher recommended)
*   npm (Node Package Manager)
*   Git
*   A Firebase Project with Firestore Database enabled.
*   A Firebase Service Account Key JSON file for your project.
*   Vercel CLI (for local testing of serverless functions): `npm install -g vercel`

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Rizvi-Faiz/CA_Website.git
    cd CA_Website
    ```

2.  **Install frontend and backend dependencies:**
    ```bash
    npm install
    ```

3.  **Create a local environment file for the backend:**
    Create a file named `.env` in the **root directory** of your project (`CA_Website/.env`).
    Add your Firebase Service Account Key to this file. **Replace the placeholder with the actual content of your JSON key file.**
    ```
    FIREBASE_SERVICE_ACCOUNT_KEY='{"type": "service_account", "project_id": "your-project-id", "private_key_id": "...", "private_key": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n", "client_email": "...", "client_id": "...", "auth_uri": "...", "token_uri": "...", "auth_provider_x509_cert_url": "...", "client_x509_cert_url": "...", "universe_domain": "..."}'
    ```
    **Important**: Ensure the entire JSON content is on a single line and enclosed in single quotes.

### Running Locally

To run the application locally, you need to start both the frontend and the Vercel Serverless Function emulator.

1.  **Start the Frontend Application:**
    Open a terminal in the root directory of your project (`CA_Website`).
    ```bash
    npm start
    ```
    This will typically open your application in your browser at `http://localhost:3000`.

2.  **Start the Vercel Serverless Function Locally:**
    Open a **separate new terminal** in the root directory of your project (`CA_Website`).
    ```bash
    vercel dev
    ```
    This command will start a local development server that emulates the Vercel environment, including your serverless functions. It will usually run on `http://localhost:3000` or another available port. If it runs on a different port than your frontend, you might need to adjust the frontend's `axios.get('/api/news')` calls to use the full URL (e.g., `http://localhost:3001/api/news`). However, if both run on `localhost:3000`, the relative path `/api/news` will work seamlessly.

    **Note**: The `dotenv` package is used in `api/news.js` to load `FIREBASE_SERVICE_ACCOUNT_KEY` from your local `.env` file when running `vercel dev`.

## Firebase Firestore Setup

1.  **Create a Firebase Project**: Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2.  **Enable Firestore Database**: In your Firebase project, navigate to "Build" -> "Firestore Database" and click "Create database". Choose "Start in production mode" (or test mode) and select a region.
3.  **Generate Service Account Key**:
    *   Go to "Project settings" (gear icon) -> "Service accounts" tab.
    *   Click "Generate new private key" and then "Generate key".
    *   This will download a JSON file. The content of this file is your `FIREBASE_SERVICE_ACCOUNT_KEY`.

## Deployment to Vercel

### Frontend Deployment

Your frontend is already deployed on Vercel. Ensure your Vercel project is linked to your Git repository.

### Backend (Serverless Function) Deployment

The `api/news.js` file in your project's root `api` directory will automatically be detected and deployed as a Serverless Function by Vercel when you push your changes.

### Environment Variables on Vercel

For your Vercel Serverless Function to connect to Firebase Firestore, you need to configure the `FIREBASE_SERVICE_ACCOUNT_KEY` as an environment variable in your Vercel project settings.

1.  Go to your [Vercel Project Dashboard](https://vercel.com/dashboard).
2.  Select your project.
3.  Go to "Settings" -> "Environment Variables".
4.  Add a new environment variable:
    *   **Name**: `FIREBASE_SERVICE_ACCOUNT_KEY`
    *   **Value**: Paste the **entire content of your Firebase service account key JSON file** here. Ensure it's a single-line string.
    *   Select "Production", "Preview", and "Development" environments as needed.
5.  Click "Save".

After configuring the environment variable, trigger a new deployment on Vercel.

## API Endpoints

The Vercel Serverless Function exposes the following API endpoints:

*   `GET /api/news`: Fetches all news articles.
*   `POST /api/news`: Adds a new news article.
*   `PUT /api/news/:id`: Updates an existing news article by ID.
*   `DELETE /api/news/:id`: Deletes a news article by ID.

All these endpoints interact directly with your Firebase Firestore "news" collection.
