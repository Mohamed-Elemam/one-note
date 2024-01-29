# One-note

![One-note Logo](https://drive.google.com/file/d/1K3HlkgoDbgYfNexz47zUxLEeQFtyA4vq/view?usp=drive_link)

https://drive.google.com/file/d/1K3HlkgoDbgYfNexz47zUxLEeQFtyA4vq/view?usp=drive_link

## Description

One-note is a full-stack website built with React.js, TypeScript, and Node.js. It allows users to create, delete, and update their notes. The project utilizes modern web development tools and technologies for a seamless user experience.

## Features

- Create, delete, and update notes
- User-friendly interface with a modern design
- Integration with popular libraries and tools such as React, TypeScript, Vite, Axios, Formik, and more
- Authentication and authorization features
- Secure backend with bcrypt for password hashing and JWT for token-based authentication
- Responsive design for seamless user experience on different devices
- Utilizes Flowbite and Flowbite-React for UI components
- Toast notifications with React-hot-toast
- Integration with Tailwind CSS for styling

## Installation

### Frontend

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/react-note.git
   ```

2. Navigate to the project folder:

   ```bash
   cd react-note
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

### Backend (Note: Make sure MongoDB is installed and running)

1. Clone the backend repository:

   ```bash
   git clone https://github.com/your-username/note_api.git
   ```

2. Navigate to the backend project folder:

   ```bash
   cd note_api
   ```

3. Install backend dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

## Usage

### Frontend

#### Development Server

Start the development server:

```bash
npm run dev
```

or

```bash
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

#### Build

Build the production-ready bundle:

```bash
npm run build
```

or

```bash
yarn build
```

The build artifacts will be located in the `dist/` directory.

### Backend

#### Start the Server

```bash
npm start
```

or

```bash
yarn start
```

## Dependencies

### Frontend

- **React**: ^18.2.0
- **React DOM**: ^18.2.0
- **React Icons**: ^4.12.0
- **React Router DOM**: ^6.21.0
- **Axios**: ^1.6.2
- **Formik**: ^2.4.5
- **Yup**: ^1.3.3
- **Flowbite**: ^2.2.1
- **Flowbite-React**: ^0.7.2
- **js-cookie**: ^3.0.5
- **react-helmet**: ^6.1.0
- **react-hot-toast**: ^2.4.1

### Backend

- **bcrypt**: ^5.1.0
- **cors**: ^2.8.5
- **dotenv**: ^16.3.1
- **express**: ^4.18.2
- **joi**: ^17.9.2
- **jsonwebtoken**: ^9.0.1
- **mongoose**: ^7.3.2
- **nodemailer**: ^6.9.3
