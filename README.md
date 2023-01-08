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
You can find the full list of ads here: http://localhost:3000/api/ads

### POST method
Use [Postman](https://web.postman.co/) to update this list or add a new ad. Make sure to select <strong>POST</strong>, <strong>raw</strong> and <strong>JSON</strong>. The schema must be as following:

    { 
      "name": "name of the item",
      "price": number,
      "photo": "photo.png",
      "tags": [ "example1", "example2"],
      "sale": true/false
     }
     
### GET queries
- You can filter by name: http://localhost:3000/api/ads/?name=office%20chair
- You can check which items are for sale: http://localhost:3000/api/ads/?sale=true
- You can filter items by price: http://localhost:3000/api/ads/?price=20-50 (to see items with values between 20 and 50
- You can search items by tag: http://localhost:3000/api/ads/?tags=mobile

* For now, the only tags available are lifestyle, work, mobile and motor.
