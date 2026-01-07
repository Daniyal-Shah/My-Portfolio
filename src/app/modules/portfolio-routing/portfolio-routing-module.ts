import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { About } from '../../components/about/about';
import { ContactUs } from '../../components/contact-us/contact-us';
import { Content } from '../../components/content/content';
import { Projects } from '../../components/projects/projects';
import { Resume } from '../../components/resume/resume';

const routes: Routes = [
  {
    path: '',
    component: Content,
    children: [
      { path: '', redirectTo: 'about', pathMatch: 'full' },
      { path: 'about', component: About },
      { path: 'projects', component: Projects },
      { path: 'resume', component: Resume },
      { path: 'contact', component: ContactUs },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioRoutingModule {}
