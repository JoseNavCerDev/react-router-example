import { LazyExoticComponent, lazy } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent< () => JSX.Element > | ( () => JSX.Element ); 
    name: string;
}

const Lazy1 = lazy( () => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout') );

export const routes: Route[] = [
    {
        to: '/lazyload/*',
        path: 'lazy1',
        Component: Lazy1,
        name: 'Lazy Load 1'
    },
    {
        to: '/nolazy',
        path: 'nolazy',
        Component: NoLazy,
        name: 'No Lazy'
    }
];