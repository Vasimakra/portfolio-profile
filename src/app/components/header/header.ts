import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    sections.forEach((sec) => {
      const top = window.scrollY;
      const offset = sec.offsetTop - 150;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (id && top >= offset && top < offset + height) {
        navLinks.forEach((links) => links.classList.remove('active'));
        const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
        activeLink?.classList.add('active');
      }
    });

    const header = document.querySelector('header');
    header?.classList.toggle('sticky', window.scrollY > 100);
    this.isMenuOpen = false;
  }
}
