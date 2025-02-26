import { createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import About from './pages/About';
import Api from './pages/Api';
import Fag from './pages/Fag';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Search from './pages/Search';
import Flag from './pages/Flag';
import Alfa1 from './pages/Alfa1';
import Detail from './pages/Detail';
import Ingi from './pages/Ingi';



export const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "api",
                element: < Api/>
            },
            {
                path: "about",
                element: < About/>
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "fag",
                element: <Fag />
            },
            {
                path: "search/:text",
                element: <Search/>
            },
            {
                path: "flag/:value",
                element: <Flag/>
            },
            {
                path: "alfa1/:value",  
                element: <Alfa1 />
            },
            {
                path: "meal/:id",  
                element: <Detail />
            },
            {
                path: "ingredient/:ingredient",  
                element: <Ingi />
            },
           
            
        ]
    },
]);