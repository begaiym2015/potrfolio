import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import Home from '../components/Home/Home';
import FilterCategory from '../components/Category'; 

import AboutUs from '../components/AboutUs/AboutUs';
import Packages from '../components/Packages/Packages';
import Delivery from '../components/Delivery/Delivery';
import Credit from '../components/Credit/Credit';
import Basket from '../components/Basket/Basket';
import AllCategories from "../components/Home/AllCategories";

// Все роуты создаёте в этом массиве
// // 
export const routes = [
    {
        path: "/",
        component: Home,
        exact:true,
    },{
        path: "/category",
        component: AllCategories,
        routes:[
            {
                component: FilterCategory,
                path:'/category/:category'
            },
        ]
    },{
        path:'/about',
        component:AboutUs,
    },{
        path:'/packages/:id',
        component:Packages,
    },{
        path:'/delivery',
        component:Delivery,
    },{
        path:'/credit',
        component:Credit,
    },{
        path:'/basket',
        component:Basket,
    },
];

export const RouteWithSubRoutes = (route)=>{
    return (
        <Route
            path={route.path}
            exact={route.exact}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}
export const Switcher = ({routes})=>(
    <Switch>
        {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
        ))}
    </Switch>
)