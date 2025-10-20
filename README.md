# Davidson Conceição - Personal Portfolio

This repository contains the source code for my personal portfolio website, built to showcase my skills and projects as an Infrastructure Solutions Architect and Full-Stack Developer.

The live version can be accessed at [davidson.dev.br](https://davidson.dev.br).

## About This Project

This portfolio is a modern, responsive, and internationalized (i18n) web application built with a focus on performance, clean code, and a great user experience. It highlights my professional journey, technical skills, and key projects. It was developed with the assistance of an AI coding partner in Firebase Studio.

## Tech Stack

This project is built with the following technologies:

*   **Framework:** [Next.js](https://nextjs.org/) (with App Router)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [ShadCN/UI](https://ui.shadcn.com/)
*   **Backend/Database:** [Firebase](https://firebase.google.com/) (Firestore for contact form)
*   **Generative AI:** [Genkit](https://firebase.google.com/docs/genkit)

## Getting Started

To run the project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/davidson-dev-br/davidson.dev.br.git
    cd davidson.dev.br
    ```

2.  **Install dependencies:**
    This project uses `npm` as the package manager.
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    You will need to create a `.env.local` file in the root of the project and add your Firebase project configuration. You can get these from the Firebase console.

    ```
    NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
    NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
    NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:9002](http://localhost:9002) in your browser to see the result.
