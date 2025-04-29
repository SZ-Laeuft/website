# Website

## Overview

This project is a website built using Next.js, TypeScript, and Tailwind CSS. It leverages modern web development practices to create a responsive and maintainable user experience.

## Key Features

-   **Next.js:** Utilizes the Next.js framework for server-side rendering, routing, and optimized performance.
-   **TypeScript:** Employs TypeScript for enhanced code quality, maintainability, and type safety.
-   **Tailwind CSS:** Leverages Tailwind CSS for rapid UI development and consistent styling.
-   **Modular Structure:** Organizes the codebase into reusable components and separate pages for different sections of the website.

## Project Structure

The project structure is organized as follows:

-   `app/`: Contains the main application components and page routes.
    -   `layout.tsx`: The main layout for the entire application.
    -   `page.tsx`: Represents the home page.
    -   `galerie/page.tsx`: Page for the galerie section.
    -   `privacy-policy/page.tsx`: Page for the privacy policy section.
    -   `startzeit/page.tsx`: Page for the startzeit section.
    -   `statistik/page.tsx`: Page for the statistik section.
    -   `team/page.tsx`: Page for the team section.
    -   `voranmeldung/page.tsx`: Page for the voranmeldung section.
-   `css/`: Contains global CSS files.
    -   `globals.css`: Global styles for the application.
-   `pictures/`: Contains images and logos used in the application.
-   `tsx/`: Contains reusable components.
    -   `footer.tsx`: Footer component.
    -   `navbar.tsx`: Navigation bar component.
    -   `scroller.tsx`: Scroller component.
-   `next.config.js` or `next.config.ts`: Next.js configuration file.
-   `package.json`: Lists project dependencies and scripts.
-   `tailwind.config.ts`: Tailwind CSS configuration file.
-   `tsconfig.json`: TypeScript configuration file.
-   `eslint.config.mjs`: ESLint configuration file.
-   `postcss.config.mjs`: PostCSS configuration file.

## Getting Started

### Prerequisites

-   Node.js (version >= 18)
-   npm or yarn

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2.  Navigate to the project directory:

    ```bash
    cd website
    ```

3.  Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Development

To start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

### Building and Running in Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm run start
# or
yarn start
```

## Scripts

-   `dev`: Runs the Next.js development server.
-   `build`: Builds the application for production.
-   `start`: Starts the Next.js production server.
-   `lint`: Runs ESLint for code linting.

## Dependencies

The project uses the following main dependencies:

-   @emotion/react
-   @mantine/core
-   @mantine/hooks
-   framer-motion
-   next
-   react
-   react-dom
-   react-icons
-   react-slick
-   swiper
-   tailwindcss
-   typescript
-   postcss
-   eslint

## Contributing
This project was developed by students at **IT-HTL Ybbs** and is intended for educational use only. Contributions are limited to students of the institution.

## Contact
For questions or support, contact: [sz-laeuft@sz-ybbs.ac.at](mailto:sz-laeuft@sz-ybbs.ac.at)
