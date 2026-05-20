import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
  styleUrls: ['./skills.css'],
})
export class Skills implements AfterViewInit {
  ngAfterViewInit() {
    if (typeof document === 'undefined' || typeof window === 'undefined') {
      return;
    }

    const filterButtons = document.querySelectorAll('.filter-btn');
    const skillsCards = document.querySelectorAll('.skills-card');

    const applyFilter = (filter: string) => {
      filterButtons.forEach((btn) => {
        (btn as HTMLElement).classList.toggle(
          'active',
          (btn as HTMLElement).dataset['filter'] === filter,
        );
      });

      skillsCards.forEach((card) => {
        const shouldShow = filter === 'all' || (card as HTMLElement).dataset['category'] === filter;
        (card as HTMLElement).style.display = shouldShow ? 'flex' : 'none';
        (card as HTMLElement).classList.toggle('highlight', shouldShow && filter !== 'all');
      });
    };

    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        applyFilter((button as HTMLElement).dataset['filter'] || 'all');
      });
    });

    applyFilter('all');
  }
}
