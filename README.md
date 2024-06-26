# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Title

    In this project, let's build a "Bitcoin Price Tracker".

## Objective

    The main goal or purpose of the Assignment is to monitoring Bitcoin Prices in Various Currencies.

## Tech Stack

    List of primary technologies, languages used for the Assignment are React.JS, CSS, Flexbox.

## Completion Instructions

### Functionality

   #### Must Have

        # Initially,the App start with Home Route Link component and when user click the sidebar Link components the URL in the browser navigates
         to that respective Link Component.
        # By using population Data API we display data in Graph here we use the Line Chart with population and year as labels from the data.
        # And also using cryptocurrency prices API  we display data in cards.
        # We implemented a feature to connect the MetaMask wallet using Web3 JS when the "Connect Wallet" button is clicked.
        # From this we get the response as error or success in order to show in the UI.

   #### Nice to Have
        # We also make the website for both Desktop and mobile devices using "media queries".
        

### Submission Instructions
   ### `npm start`
        Runs the app in the development mode.\
        Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
        The page will reload when you make changes.\


### Resources
    These are React Icons used in our application for displaying the required icons 
    1.CiHome
    2.GoOrganization 
    3.GrCube 
    4.LuArrowUpDown 
    5.RiHistoryFill 
    6.IoWalletOutline ;
    7.IoIosNotificationsOutline
    8.CiCircleQuestion 
    9.CiSettings 


### Design files

    src/App.js
    src/components/Account/index.js
    src/components/Account/index.css
    src/components/ChartData/index.js
    src/components/ChartData/index.css
    src/components/Content/index.js
    src/components/Content/index.css
    src/components/CryptoCurrency/index.js
    src/components/CryptoCurrency/index.css
    src/components/EachCard/index.js
    src/components/EachCard/index.css
    src/components/Footer/index.js
    src/components/Footer/index.css
    src/components/Header/index.js
    src/components/Header/index.css
    src/components/MetaMaskIntegration/index.js
    src/components/MetaMaskIntegration/index.css
    src/components/Navbar/index.js
    src/components/Navbar/index.css
    src/components/Search/index.js
    src/components/Search/index.css
    src/components/Sidebar/index.js
    src/components/Sidebar/index.css

### APIs

    Fetch population data from the provided API and display in graph - https://datausa.io/api/data?drilldowns=Nation&measures=Population.
    Fetch cryptocurrency prices from the provided API and display them in cards - https://api.coindesk.com/v1/bpi/currentprice.json.

### Third-party packages
    "react-icons": "^5.0.1",
    "react-router-dom": "^6.22.3",
    "recharts": "^2.12.3",
    "web3": "^4.7.0".
