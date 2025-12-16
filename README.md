# My Narrative

**My Narrative** is a Next.js application that weaves a user's digital footprint into a personalized story. It uses Firebase for secure authentication and hosting.

## Features

-   **Authentication**: Secure Google Sign-In using Firebase Auth (`signInWithPopup`).
-   **Narrative Engine**: Generates personalized stories based on user profile data.
-   **Tech Stack**:
    -   **Next.js 15.5.7** (App Router)
    -   **TypeScript**
    -   **Firebase** (Auth, App Hosting)
    -   **Vanilla CSS** (Premium Dark Mode)

## Getting Started

### Prerequisites

-   Node.js 18+
-   npm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/SanjayPethePNLLC/MyNarrative.git
    cd MyNarrative
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Configure Environment:
    Create a `.env.local` file with your Firebase credentials:
    ```env
    NEXT_PUBLIC_FIREBASE_API_KEY=your_key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
    NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
    ```

4.  Run the development server:
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project is designed to be deployed via **Firebase App Hosting**.

1.  Connect this GitHub repository to your Firebase project in the [Firebase Console](https://console.firebase.google.com/).
2.  Set up the Environment Variables in the App Hosting settings.
3.  Deploy!
