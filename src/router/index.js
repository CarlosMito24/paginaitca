import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InstitucionView from '../views/InstitucionView.vue'
import CarrerasView from '../views/CarrerasView.vue'
import NuevoIngresoView from '../views/NuevoIngresoView.vue'
import CursosyDiplomadosView from '../views/CursosyDiplomadosView.vue'
import InvestigacionyProyeccionSocialView from '../views/InvestigacionyProyeccionSocialView.vue'
import RecursosEstudiantilesView from '../views/RecursosEstudiantilesView.vue'
import NoticiasView from '../views/NoticiasView.vue'
import ContactenosView from '../views/ContactenosView.vue'
import MesondeGoyaView from '../views/MesondeGoyaView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/institucion',
    name: 'institucion',
    component: InstitucionView
  },
   {
    path: '/carreras',
    name: 'carreras',
    component: CarrerasView
  },
  {
    path: '/nuevoingreso',
    name: 'nuevoingreso',
    component: NuevoIngresoView
  },
  {
    path: '/cursosydiplomados',
    name: 'cursosydiplomados',
    component: CursosyDiplomadosView
  },
  {
    path: '/investigacionyproyeccionsocial',
    name: 'investigacionyproyeccionsocial',
    component: InvestigacionyProyeccionSocialView
  },
  {
    path: '/recursosestudiantiles',
    name: 'recursosestudiantiles',
    component: RecursosEstudiantilesView
  },
  {
    path: '/noticias',
    name: 'noticias',
    component: NoticiasView
  },
  {
    path: '/contactenos',
    name: 'contactenos',
    component: ContactenosView
  },
  {
    path: '/mesondegoya',
    name: 'mesondegoya',
    component: MesondeGoyaView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
