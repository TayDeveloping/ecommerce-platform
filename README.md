# E-Commerce Platform

## Overview
This project is an e-commerce platform built using React for the frontend, Vite as the build tool, and Redux for state management. The application allows users to browse products, add items to a shopping cart, view details about products, and checkout.

## Features
- **Redux for Global State Management**: The platform uses Redux to manage the global state for products, categories, user sessions, and shopping cart data.
- **Product Categories and Details**: Users can select categories, view detailed product information, and manage items in their shopping cart.
- **Checkout Process**: A smooth and intuitive checkout process to allow users to complete their purchases.

## Installation

### Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js** (v14 or later)
- **npm** (comes with Node.js)

### Steps to Install

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/ecommerce-platform.git
2. Navigate into the project directory:
    cd ecommerce-platform

3. Install dependencies:
    npm install

4. Start the development server:
    npm run dev

5. Build for production:
    npm run build

6. Preview the production build:
    npm run preview
The development server should now be running on http://localhost:3000.

## Technologies Used

- **Frontend**: React (with hooks)
- **State Management**: Redux, Redux Toolkit
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Styling**: CSS / Styled Components
- **API**: Mock API for product details and categories
- **Environment Variables**: Managed with dotenv

## Scripts

- `npm run dev`: Starts the Vite development server
- `npm run build`: Bundles the app for production
- `npm run preview`: Serves the production build locally for previewing
- `npm run lint`: Runs linting checks

## Usage

1. **Signup/Login**: Users can create an account or log in to browse products.
2. **Browse Products**: Users can filter products by category and view product details.
3. **Shopping Cart**: Add or remove items from the shopping cart and adjust quantities.
4. **Checkout**: Users can proceed to checkout and complete purchases from the cart.

## Deployment

This application is deployed on [Render](https://render.com) for production. You can view the live application [here](https://your-app-url.com).

## Contributing

If you'd like to contribute to this project, follow these steps:

1. **Fork** the repository.
2. **Create a new branch**: 
   ```bash
   git checkout -b feature/YourFeature
3. Make changes and commit them:
    git commit -m 'Add feature XYZ'
4. Push to the branch:
    git push origin feature/YourFeature
5. Submit a pull request and wait for review.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
