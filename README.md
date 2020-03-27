# K-Penguin
## Team Members: Anjelo Antioquia, Gabriel Nicolas Minamedez, Julian Sunpayco
- Antioquia, Anjelo
- Minamedez, Gabriel
- Sunpayco, Julian

## Project Directory Guide
1. The app.js file is the main Node.js file of the web application that is used to run the project.
2. The package.json and package-lock.json files are the stored dependencies of the web application.
3. The public folder contains front-end related items. It has three subfolders:
- The css folder contains all the specific stylesesheets connected to the page.
- The fonts folder cointains all the web-installed fonts used in this project.
- The img folder contains all the dummy images found in the web application.
4. The routes folder contains all back-end related items. It has one subfolder and two files:
- The models folder contains one .js file for each schema (User, Item, Transaction) used in this web application.
- The scripts.js files contains all server-related files that is connected to the main app.js. This involves page rendering, redirecting, among others.
5. The views folder contains all of the html files used for the pages. These html files use the ejs templating.

## Instructions
1. Open the project folder in the command line.
2. To install the npm dependencies attributed to this project, enter the command 'npm install' in the command line.
3. The project is now ready to run. Enter the command 'nodemon app.js' to run the project. You should see a direct link printed on the command line that directly redirects you to the web application on your default browser.
4. The project should now be ready in the port http://localhost:3000. The index of the project is a user registration page.
 
## Project Notes
1. The image storing/rendering through MongoDB is still currently in the works. For the meantime, please disregard the upload/update image features when creating/editing users or items.
2. For the meantime, dummy images are used.
3. The search function is still currently in the works. For the meantime, please disregard the search panel in the navbar.

## Dummy Data
1. For http://localhost:3000/ or the registration page:
### User 1. 
**E-mail Address:** gabminamedez@gmail.com. 
**Name:** Gab Minamedez. 
**Profile Picture:** DISREGARD FOR NOW. 
