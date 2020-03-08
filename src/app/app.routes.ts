import { HomeComponent } from './home/home.component';
export const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    // { path: 'maintenance', component: MaintenanceComponent },
    // Not found
    { path: '**', redirectTo: 'home' }
]