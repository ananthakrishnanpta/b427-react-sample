// In this file, we are going to setup the routing for the entire React app.


import { createBrowserRouter } from 'react-router-dom';
import App from '../App';

// importing the pages to be linked.
import HomePage from '../pages/Home/HomePage';
import AboutPage from '../pages/About/AboutPage';

// generating the router object providing array of 'path - page' pairs.
// This helps store the mapping of each path to their respective pages to 
// be loaded when we visit that path in website.

const my_router = createBrowserRouter(
    [
        {
            element: <App />,
            children: [
                {
                    path: '/',
                    element: <HomePage />
                },
                {
                    path: '/about',
                    element: <AboutPage />
                }
            ]
        }
    ]
)

export default my_router;


