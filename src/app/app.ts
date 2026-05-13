import { AfterViewInit, Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Experience } from './components/experience/experience';
import { Services } from './components/services/services';
import { Skills } from './components/skills/skills';
import { Education } from './components/education/education';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

declare const ScrollReveal: any;
declare const Typed: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header,
    Home,
    About,
    Experience,
    Services,
    Skills,
    Education,
    Projects,
    Contact,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App implements AfterViewInit {
  protected readonly title = signal('portfolio-app');

  ngAfterViewInit() {
    if (typeof ScrollReveal !== 'undefined') {
      ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200,
      });

      ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
      ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {
        origin: 'bottom',
      });
      ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
      ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
    }

    if (typeof Typed !== 'undefined') {
      new Typed('.multiple-text', {
        strings: ['Frontend Developer', 'Backend Developer', 'Web Designer'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
      });
    }
  }
}
