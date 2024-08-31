import { Component, input } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterLink, RouterOutlet, RouterStateSnapshot } from '@angular/router';
import { HeaderComponent } from "../menus/header/header.component";
import { SideBarComponent } from "../menus/side-bar/side-bar.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeaderComponent, SideBarComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  userName = input.required<string>();

  //designation = input.required<string>();
  
  

}


export const resolveUserName: ResolveFn<string> = (
  activatedRoute:ActivatedRouteSnapshot, 
  routerState: RouterStateSnapshot
) => {
  
  return 'Suresh';
};
