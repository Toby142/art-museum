import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  const navbar = document.querySelector(".navbar") as HTMLElement;

  // Add a scroll event listener to the window object
  window.addEventListener("scroll", () => {
    // Check if the user has scrolled down at least 1 pixel
    if (window.scrollY > 0) {
      // Add a CSS class to the navbar to change its background color
      navbar.classList.add("scrolled");
    } else {
      // Remove the CSS class if the user has scrolled back to the top
      navbar.classList.remove("scrolled");
    }
  });
}
