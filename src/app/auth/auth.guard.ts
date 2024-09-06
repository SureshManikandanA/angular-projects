import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { Observable, map } from "rxjs";
import { AuthService } from "./auth.service";


//@Injectable({providedIn: 'root'})
export class AuthGurad implements CanActivate{
autheService = inject(AuthService);

    canActivate(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
    ): boolean | Observable<boolean> {
        
       // return this.autheService.user.pipe(map( user => {
            //return !!user;
       // }))

       return true;
       
    }

}