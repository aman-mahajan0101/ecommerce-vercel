# E-Commerce website

## Technologies Used

1. ### Database : MongoDB
2. ### Backend : NodeJS/Express
3. ### Frontend : HTML5/ CSS3/ JS/ BOOTSTRAP

## Project Structure

### Frontend (Client Side Code)

```shell
E-Commerce
│
├── public
│ ├── css                          # CSS Files for frontend
│ │ ├── app.css
│ │ ├── home.css
│ │ └── star.css
│ └── js                           # JS Files for DOM funcitonalities
│   ├── cart.js
│   ├── filter.js
│   └── like.js
├── views                          # HTML Templates for frontend
  │
  ├── auth                         # Login Page/ Registration Page
  │   ├── login.ejs
  │   └── signup.ejs
  ├── cart                         # Cart items displayed
  │   └── cart.ejs
  ├── error.ejs                    # Any error occured will be shown using this
  ├── home.ejs                     # HomePage
  ├── layout                       # Basic template for each page
  │   └── boilerplate.ejs
  ├── partials
  │   ├── flash.ejs
  │   ├── navbar.ejs
  │   └── search.ejs
  └── products                     # Different rendering pages
      ├── edit.ejs
      ├── index.ejs
      ├── new.ejs
      └── show.ejs

```

### Backend (Client Side Code)

```shell
E-Commerce
│
├── controllers                     # Functions to connect routes to db operations
│ └── product.js
├── models                          # Database definations
│ ├── product.js
│ ├── review.js
│ └── user.js
├── routes                          # Express Middlewares
│ ├── apis
│ │ ├── CartAPI.js
│ │ ├── filterFunctionality.js
│ │ └── likeFunctionality.js
│ ├── authRoutes.js
│ ├── cartRoutes.js
│ ├── payment.js
│ └── productRoutes.js
├── middleware.js                   # Validation through JOI
├── schemas.js
├── seed.js                         # Duymmy Dataset
├── app.js                          # Main Server File
```

## Business Logic

## Users

1. Create a new user with the use of Passwort Middleware

## Product

1. Add new product
2. Add rating and reviews to it
3. Wishlist a product you like
4. Edit the products details
5. Delete that particular product that you have created

## Cart

1. Shows all the items in the cart with there total amount
2. Provides a checkout page using PayuMoney
