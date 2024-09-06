import {  CanMatch, CanMatchFn, RedirectCommand, Router, Routes } from "@angular/router";

//import { routes as userRoutes } from "./users/users.routes";
//import { NoTaskComponent } from "./tasks/no-task/no-task.component";
//import { UserTasksComponent, resolveTitle, resolveUserName } from "./users/user-tasks/user-tasks.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { inject } from "@angular/core";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { AppComponent } from "./app.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { MainComponent, resolveUserName } from "./main/main/main.component";

import { routes as mainRoutes} from "./main/main.routes";
//import { AuthGurad } from "./auth/auth.guard";

const dummyCanMatch: CanMatchFn = (route, segments) => {
    const router = inject(Router);
    const shouldGetAccess = Math.random();
    if(shouldGetAccess < 1){
        return true;
    }
    return new RedirectCommand(router.parseUrl('/unauthorized'));
}
export const routes: Routes = [
    {
        path: '',  
        component: LoginComponent,
        title: 'Login Page'
    },
    {
        path: 'signin',  
        component: LoginComponent,
        title: 'Signin Page'
    },
    {
        path: 'signup',  
        component: SignupComponent,
        title: 'Signup Page'
    },
    {
        path: 'home', //<your-domain>/main/
        component: MainComponent,
       // canActivate: [AuthGurad],
        title: 'Home Page',
        children: mainRoutes,
       // canMatch: [dummyCanMatch],
        //data: {
            //message: 'Hello !'
       // },
        resolve: {
           userName: resolveUserName,
        },
       // title: resolveTitle
    },
    {
        path: '**',
        component: NotFoundComponent,
    }
]



