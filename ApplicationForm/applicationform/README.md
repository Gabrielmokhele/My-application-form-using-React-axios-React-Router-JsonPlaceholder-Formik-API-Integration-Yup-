# My Multi-Step Application Form

#### Project Overview
This project is a dynamic web application designed for job applications, built using React, Material UI, Axios, React Router, Formik, and Yup. The application features a multi-step form with comprehensive validation and seamless API integration, demonstrating a robust and user-friendly interface for job applicants.

## Installation

To get started with the application, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/my-application-form.git

2. Navigate to the project directory:
   ```bash
   cd my-application-form
3. Install the required packages:
   Ensure you have Node.js and npm (or Yarn) installed. Then run:

#### Dependencies
This project uses the following npm packages:

- react: A JavaScript library for building user interfaces.
- react-dom: The package for working with the DOM in React.
- react-router-dom: Declarative routing for React.js.
- axios: Promise-based HTTP client for making requests.
- formik: Library for building forms in React with ease.
- yup: Schema builder for runtime value parsing and validation.
- jsonplaceholder: Fake online REST API for testing and prototyping.
- @mui/material: Material UI components for building a modern and responsive UI.
- @emotion/react and @emotion/styled: Styling libraries used by Material UI.

#### Ensure you have Node.js and npm (or Yarn) installed. Then install the necessary packages:
```bash
npm install react react-dom react-router-dom axios formik yup
```

#### Ensure you install Material UI for custom styling for grids, forms, containers, textfields etc.
```bash
npm install @mui/material @emotion/react @emotion/styled
```

#### Usage
Run the development server:
```bash
npm start
```

This will start the development server and you can view the application at http://localhost:3000.

Navigate through the application:

- Use React Router to navigate between different views.
- The form is handled by Formik with Yup for validation.
- Axios is used to interact with the JsonPlaceholder API.

Code Overview
- src/App.js: Main application component that sets up routes.
- src/components/Form.js: Contains the form implementation using Formik and Yup.
- src/api.js: Axios instance configured to interact with JsonPlaceholder.
  
## Future Enhancements
In the next steps, we will integrate PostgreSQL using Sequelize for database management. This will involve:

- Setting up a PostgreSQL database.
- Configuring Sequelize ORM for database interactions.
- Updating the application to handle data persistence.
- Applying CRUD to my API


## Acknowledgments
This project is a personal initiative by Gabriel Mokhele. Stay tuned for updates and enhancements!
