import {createRouter , createWebHistory} from 'vue-router';
import Ejemplo from '../views/ejemplo.vue';
import Cargos from '../views/cargos.vue';
import LayoutMain from '../views/LayoutMain.vue';
import LogIn from '../views/LogIn.vue';


const routes = [
    {
        path:'/login',
        name: 'login',
        component:LogIn
    },
    {
        path:'/home',
        name: 'home',
        component:LayoutMain
    },
    {
        path:'/Empleados',
        name: 'Empleados',
        component:Ejemplo
    },
    {
        path:'/Cargos',
        name: 'Cargos',
        component:Cargos
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;