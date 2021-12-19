import Home from '../pages/Home.js';
import Authentication from '../pages/Authentication.js';
import Users from '../pages/Users.js';

export default [
    {
        path: "/",
        exact: true,
        component: () => <Home />,
    },
    {
        path: "/authentication",
        exact: true,
        component: () => <Authentication />,
    },
    {
        path: "/users",
        exact: true,
        component: () => <Users />,
    },
];