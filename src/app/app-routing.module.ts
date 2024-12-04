import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AddSessionComponent } from './admin/add-session/add-session.component';
import { EditSessionComponent } from './admin/edit-session/edit-session.component';
import { EnseignantDashComponent } from './enseignant/enseignant-dash/enseignant-dash.component';
import { ListteacherComponent } from './admin/listteacher/listteacher.component';
import { AddTeacherComponent } from './admin/add-teacher/add-teacher.component';
import { EditTeacherComponent } from './admin/edit-teacher/edit-teacher.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'add-session', component: AddSessionComponent },
  { path: 'edit-session/:id', component: EditSessionComponent },
  { path: 'enseignant-dash', component: EnseignantDashComponent }, 
  { path: 'listteacher', component:ListteacherComponent },
  { path: 'add-teacher', component: AddTeacherComponent },
  { path: 'editteacher/:id', component: EditTeacherComponent },

  { path: '', redirectTo: '/login', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
