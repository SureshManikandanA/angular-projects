import { AfterViewInit, Component, Input, Signal, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements AfterViewInit {

  private router = inject(Router);

  @Input() userName!: Signal<string>;


  ngAfterViewInit(): void {
    const toggleSidebarBtn = document.querySelector('.toggle-sidebar-btn');
    if (toggleSidebarBtn) {
      toggleSidebarBtn.addEventListener('click', () => {
        document.body.classList.toggle('toggle-sidebar');
      });
    }
  }

  onSingnOut(event: Event) {
    event.preventDefault(); // Prevents the default anchor behavior
    console.log('Singout clicked');
   
    this.router.navigate(['../signin'],{
      onSameUrlNavigation: 'reload',
       queryParamsHandling: 'preserve'
    }).then(() => {
      this.preventBackNavigation();
    });
  }

  preventBackNavigation() {
    history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', () => {
      history.pushState(null, '', window.location.href);
    });
  }
}