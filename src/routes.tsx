import LoginContainer from './modules/Login/container';
import RegisterContainer from './modules/Register/container';
import HomePage from './modules/HomePage/container';

export const home = '/home';
export const register = '/register';
export const login = '/login';

const routes = [
    {
        path: '/',
        component: LoginContainer
    },
    {
        path: login,
        component: LoginContainer
    },
    {
        path: register,
        component: RegisterContainer
    },
    {
        path: home,
        component: HomePage
    },
    {
        path: '/home/:projectname/:id',
        component: HomePage
    },
];

export default routes;
