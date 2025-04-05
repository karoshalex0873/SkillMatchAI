import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { IconsModule } from '../../helpers/icons.module';
import { StatCardComponent } from '../stat-card/stat-card.component';

@Component({
  selector: 'app-job-seek',
  imports: [CommonModule, RouterModule, RouterLink, IconsModule, RouterLink, RouterLinkActive, StatCardComponent],
  templateUrl: './job-seek.component.html',
  styleUrl: './job-seek.component.css'
})
export class JobSeekComponent {
  isMobileMenuOpen = false;
  links = [
    {
      path: 'starts',
      label: 'Dashboard',
      icon: 'ionHomeOutline'
    },
    {
      path: 'aut',
      label: 'Job Matches',
      icon: 'ionBriefcaseOutline'
    },
    {
      path: 'applications',
      label: 'Applications',
      icon: 'ionDocumentTextOutline'
    },
    {
      path: '/profile',
      label: 'Skill Profile',
      icon: 'ionPersonCircleOutline'
    },
    {
      path: '/portfolio',
      label: 'Portfolio',
      icon: 'ionFileTrayFullOutline'
    },
    {
      path: '/career-path',
      label: 'Career Paths',
      icon: 'ionRocketOutline'
    }
  ]

}
