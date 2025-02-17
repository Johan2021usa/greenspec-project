import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { SolutionsComponent } from './components/pages/solutions/solutions.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'solutions', component: SolutionsComponent},
  {path: 'about-us', component: AboutUsComponent},
];
