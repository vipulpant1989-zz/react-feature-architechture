# react-feature-architechture

Feature base approach to manage code properly, it is composed of the
following directory structure:

 * src
    * mocks : To add mocks for test cases.
    * test : To add test cases for components and containers.
    * components : To add any components use this folder.
    * containers : These are used for adding any specific feature into your application, can be anything from login to creating a user.
    * network : For any network related calls to server create your api's over here. **Note that API_URI is set by default in webpack configuration file.**
    * template : This is the template used for <a href="https://webpack.js.org/plugins/html-webpack-plugin/" target="_blank">HtmlWebpackPlugin</a>.
    * Utils : Utility work related code needs to go here.
    * app.js : Entry javascript used for rendering the application.

 * package.json: All npm packages goes over here.
 
 * webpack.config.js: Development configuration for the application.
 * webpack.production.js: Used for production build bundling.
 
 
Technologies used are React, Redux for front end development, Jest and Enzyme for testing, Webpack, babel for bundling , npm for package management and sinon for mocking. 
 
     
To run the application please user **npm start**</br>

To build application in production mode use **npm build**
    
To run test cases use **npm test**
    
    
     
   
