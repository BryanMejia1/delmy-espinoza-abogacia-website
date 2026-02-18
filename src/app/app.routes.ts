import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { Contact } from './pages/contact/contact';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [

    //Redirección inicial
    { path: '', pathMatch: 'full', redirectTo: 'inicio'},

    //Páginas reales
    { path: 'inicio', component: Home, title: 'Roy Ramírez | Inicio'},
    { path: 'sobre', component: About, title: 'Roy Ramírez | Sobre mí'},
    { path: 'servicios', component: Services, title: 'Roy Ramírez | servicios'},
    { path: 'contacto', component: Contact, title: 'Roy Ramírez | Contacto'},

    //Pagina 404
    { path: '404', component: NotFound, title:'Pagina no encontrada'},

    //Ruta comodin (si no existe la ruta)
    { path: '**', redirectTo: '404'}

];
