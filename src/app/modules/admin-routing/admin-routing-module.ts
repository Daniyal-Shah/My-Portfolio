import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLogin } from '../../components/admin-login/admin-login';
import { Dashboard } from '../../components/dashboard/dashboard';

const routes: Routes = [
  { path: '', component: AdminLogin },

  {
    path: 'dashboard',
    component: Dashboard,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
