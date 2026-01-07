import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLogin } from '../../components/admin-login/admin-login';
import { Dashboard } from '../../components/dashboard/dashboard';
import { authGuard } from '../../core/auth-guard';

const routes: Routes = [
  { path: '', component: AdminLogin },

  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
