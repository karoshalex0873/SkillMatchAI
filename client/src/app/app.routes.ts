import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { JobSeekComponent } from './job-seek/job-seek.component';
import { StatCardComponent } from './JobSeeker/stat-card/stat-card.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'jobs', component: JobSeekComponent },
  // routes to individual components
  { path: 'jobs/starts', component: StatCardComponent }
];
