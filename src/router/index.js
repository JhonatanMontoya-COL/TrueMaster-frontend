import {createRouter , createWebHistory} from 'vue-router';
import Ejemplo from '../views/ejemplo.vue';
import Empleados from '../views/Empleados/Empleados.vue';
import LayoutMain from '../components/LayoutMain.vue';
import Login from '../components/Login.vue';
import Navbar from '../components/Navbar.vue';

const routes = [
    {
        path:'/home',
        name: 'home',
        component:LayoutMain
    },
    {
        path:'/login',
        name: 'login',
        component:Login
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;