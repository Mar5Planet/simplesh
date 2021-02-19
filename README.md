Simplesh Front-End
===========================
![alt text](https://i.ibb.co/HXXxFNT/Screen-Shot-2021-02-18-at-9-56-51-PM.png)

Prior to setting up this project, please visit the simplesh-api [here](https://github.com/Mar5Planet/simplesh-api). The following instructions are created to set up the React front end for the simplesh application. 

The simplesh application is designed to simplify conversations, their corresponding messages, and thoughts attributed to those messages. You may add conversations, visit existing conversations and add messages or thoughts.

## Requirements

* [React](https://www.ruby-lang.org/en/documentation/installation/) (17.0.1)
* [npm](https://www.npmjs.com/get-npm), a dependency manager
* Ensure rails API is running on port 3000


## Getting Started

1. Clone the repo

   ```
   $ git clone https://github.com/Mar5Planet/simplesh-frontend.git
   $ cd simplesh-frontend
   ```

2. Install dependencies

   ```
   $ npm install
   ```

3. Run component tests
* Once running the command below, select the 'a' key to run all tests.

   ```
   $ npm run test  
   ```
   
4. Run React application on server
* Ensure the back end API is started on port 3000.
* Once running the command below, if prompted to run React app on different port press y key.

   ```
   $ npm start
   ```
   
Simplesh is now up and running!

## Key areas of repo

* [APP component](src/App.js) 
* [Messages Component](src/components/Message.js)
* [Conversations Container](src/containers/Conversations.js)
* [tests](src/App.test.js)
