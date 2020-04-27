# K-Penguin

## Description
K-Penguin is a machine project for the subject CCAPDEV. This is an online shop for K-Pop products.

## Team Members
- Antioquia, Anjelo
- Minamedez, Gabriel
- Sunpayco, Julian

## Project Directory Guide
1. The **app.js** file is the main Node.js file of the web application that is used to run the project.
2. The **package.json** and **package-lock.json** files contain the stored dependencies of the web application.
3. The **public** folder contains front-end related items. It has three subfolders:
- The **css** folder contains all the specific stylesesheets connected to the page.
- The **fonts** folder cointains all the web-installed fonts used in this project.
- The **img** folder contains all the dummy images found in the web application.
4. The **routes** folder contains all back-end related items. It has one subfolder and two files:
- The **models** folder contains one .js file for each schema (User, Item, Transaction) used in this web application.
- The **scripts.js** files contains all server-related files that is connected to the main app.js. This involves page rendering, redirecting, among others.
5. The **views** folder contains all of the html files used for the pages. These html files use the ejs templating.

## Instructions for local machine web application use:
1. Open the project folder in the command line.
2. To install the npm dependencies attributed to this project, enter the command ```npm install``` in the command line.
3. The project is now ready to run. Enter the command ```nodemon app.js``` to run the project. You should see a direct link printed on the command line that directly redirects you to the web application on your default browser.
4. The project should now be ready in the port http://localhost:3000.

## Instructions for deployed web application use:
1. Open a web browser.
2. In the address bar, enter <ins>kpenguin.herokuapp.com</ins> to access the web application.

## Web Application Pages Guide
1. **/artist/:artist** is the page for an artist along with a list of items attributed for a specified artist.
2. **/item_type/:itemType** is the page for an item type along with a list of items attributed for a specified item type.
3. **/artists** is the page that displays all artists that have items attributed under them.
4. **/items** is the page that displays all item types that have items attributed under them.
5. **/item/:id** is the page that displays the details of an item, including a transaction form at the bottom for buyers to fill up.
6. **/item_add** is the page only accessible by a logged in user from their user profile in which they can add items to sell.
7. **/item_edit/:id** is the page only accessible by a logged in user from an item profile in which they posted. This is to edit an existing item.
8. **/item_delete/:id** is the page only accessible by a logged in user from editing an item they posted. This is to delete an existing item.
9. **/** is the landing page of the site, or the first page one encounters when opening the web application. This is where a user can register for an account. There is a link in this page where the user can be redirected to the login page.
10. **/login** is the page where a user can log in to an existing account. There is a link in this page where the user can be redirected to the registration page.
11. **/results/:query** is the page launched after the user searches for an item from the search bar in the navbar.
12. **/transactions** is the page where the logged in user can see the items they've ordered, and the items ordered from them.
13. **/user/:id** is the page that displays the details of a user.
14. **/user_edit** is the page accessible from a logged user's own account to edit their account details.
15. **/about** is the page that displays the details about K-Penguin, including NPM dependencies and third-party services used.
 
## Project Notes
1. The image storing/rendering through MongoDB is still currently in the works. For the meantime, please disregard the upload/update image features when creating/editing users or items.
2. For the meantime, dummy images are used.
3. You may choose to create a new account from start up. For an already pre-made account, you may go to the login page with the following sample credentials: **Username = gabminamedez Password = dragon** or **Username = anjelo36 Password = jollibee** or **Username = soonpayko Password = mamamo**
