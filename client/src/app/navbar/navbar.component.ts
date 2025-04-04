import { Component } from '@angular/core';
import { IconsModule } from '../helpers/icons.module';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [IconsModule],
  templateUrl:'./navbar.component.html',
  
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
