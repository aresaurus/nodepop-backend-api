# Nodepop

Nodepop is an API for an e-commerce app that allow users to sell and buy second-hand products. This CRUD API has been created using Node.js, Express and mongoDB, and it allows you to create, edit, delete and filter ads. Each add follows a name, price, photo, tags and sale (boolean value that informs if an item is for sale or purchase)) schema. MongoDB is used to store this data in a database.

## 1st step: install mongoDB
mongoDB must be installed in your computer to use this API. To do this:
  - Go to the mongoDB website: https://www.mongodb.com/download-center/community
  - Make sure you follow the installation steps for your SO.
 And that's it, the database will be up and running in `mongodb://127.0.0.1/nodepop` by default. 
 
## 2nd step: go to the nodepop folder to run the following:

### Deploy

    npm install

### Load initial data to database

    npm run init-db

### Launch the application in production

    npm start

### Launch the application for development

    npm run dev


# API methods
This API uses HTTP methods (GET and POST) to access the items stored in the database.
