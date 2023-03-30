import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @ViewChild('navbar', { static: true })
  navbarRef!: ElementRef<HTMLElement>;

  ngOnInit() {
    // Add a scroll event listener to the window object
    window.addEventListener("scroll", () => {
      // Check if the user has scrolled down at least 1 pixel
      if (window.scrollY > 0) {
        // Add a CSS class to the navbar to change its background color
        this.navbarRef.nativeElement.classList.add("scrolled");
      } else {
        // Remove the CSS class if the user has scrolled back to the top
        this.navbarRef.nativeElement.classList.remove("scrolled");
      }
    });
  }
}
