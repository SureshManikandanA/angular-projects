import { Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { UsersComponent } from './views/users/users.component';



export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard', // <your-domain>/home/dashboard
    component: DashboardComponent,
    //runGuardsAndResolvers: 'paramsOrQueryParamsChange',
    runGuardsAndResolvers: 'always',
    // resolve: {
    //     userTasks: resolveUserTasks
    // }
  },
  {
    path: 'users',
    component: UsersComponent,
  },
];