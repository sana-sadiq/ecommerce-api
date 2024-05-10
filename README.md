# Ecommerce API

This project is a simple API for managing products in an ecommerce application. It provides basic CRUD operations for products stored in a MongoDB database.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository to your local machine:**
   ```bash
   git clone https://github.com/sana-sadiq/ecommerce-api.git

2. **Install Dependencies**
   - cd ecommerce-api
   - npm install

3. **Set up MongoDB:**
   - Make sure you have MongoDB installed and running on your machine.
   - Create a new database named ecommerce or use an existing one.
     
4. **Start the server**
   ```bash
   npm start
   The server will start running at http://localhost:3000.
   
5. **API Endpoints**
   - **POST /products/create:** Add a new product.
   - **GET /products:** List all products.
   - **DELETE /products/:id:** Delete a product by ID.
   - **POST /products/:id/update_quantity?number=:** Update the quantity of a product. Pass the quantity to be added or subtracted as a query parameter.
     
6. **Folder Structure**
   - **controllers:** Contains controller functions for handling requests.
   - **models:** Defines the Mongoose schema for products.
   - **routes:** Defines API routes.
   - **index.js:** Entry point of the application.
     
7. **Technologies Used**
   - Node.js
   - Express.js
   - MongoDB
   - Mongoose

