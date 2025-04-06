import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { JobSeekComponent } from './JobSeeker/job-seek/job-seek.component';
import { StatCardComponent } from './JobSeeker/stat-card/stat-card.component';
import { JobCardComponent } from './JobSeeker/job-card/job-card.component';
import { ApplicationItemComponent } from './JobSeeker/application-item/application-item.component';
import { SkillProfileComponent } from './JobSeeker/skill-profile/skill-profile.component';
import { PortfolioUploadComponent } from './JobSeeker/portfolio-upload/portfolio-upload.component';
import { CareerPathComponent } from './JobSeeker/career-path/career-path.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'jobs', component: JobSeekComponent, children: [
      { path: 'starts', component: StatCardComponent },
      { path: 'aut', component: JobCardComponent },
      { path: 'applications', component: ApplicationItemComponent },
      { path: 'profile', component: SkillProfileComponent },
      { path: 'Notifications', component:PortfolioUploadComponent },
      { path: 'careerPath', component:CareerPathComponent  },
    ]
  },
];
