## NodeJs-API-Demo

### What's inside
Project created to study Node.js, concepts, implementations and libs.

Simple schema using the 'Costumer' example, with classes to create, list, update and delete Costumers, using MVC pattern and Express.

  ### Express
  https://expressjs.com

  Used in this project to create the API with methods and middlewares.


  #### 1. Express Router
  Feature of Express lib to create endpoints (URIs) and respond to requests.
  Used to receive Costumer's requests and call the methods, Router was implemented to integrate Models and Controllers with the Endpoints.

  #### 2. BodyParser
  https://www.npmjs.com/package/body-parser

  #### 3. Controller and Model
  Following the MVC pattern, the Costumer.Model.js and controller.js classes were created to implement Costumer abstraction and did the database connection.


### How to run

The App was developed using NPM ([NPM Docs Here](https://npmjs.com/))
Follow the steps to Clone and Run the project:

#### 1. Clone and Install

```bash
# Clone the repo
git clone https://github.com/MartiniGabriel/NodeJs-API-Demo.git
# Navigate to clonned folder and Install dependencies
cd NodeJs-API-Demo && npm install
```

#### 2. Run
Run this command to run the project:
```
node server.js
```
or 
```npm start``` 

That's it! Cool, right?


### Contributing

If you find any problems, please [open an issue](https://github.com/MartiniGabriel/NodeJs-API-Demo/issues/new) or submit a fix as a pull request.


### License
This App have public license
