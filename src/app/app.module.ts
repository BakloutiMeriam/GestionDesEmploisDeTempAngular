import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from "ngx-spinner";
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AddSessionComponent } from './admin/add-session/add-session.component';
import { EditSessionComponent } from './admin/edit-session/edit-session.component';
import { EnseignantDashComponent } from './enseignant/enseignant-dash/enseignant-dash.component';
import { ListteacherComponent } from './admin/listteacher/listteacher.component';
import { AddTeacherComponent } from './admin/add-teacher/add-teacher.component';
import { EditTeacherComponent } from './admin/edit-teacher/edit-teacher.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    AddSessionComponent,
    EditSessionComponent,
    EnseignantDashComponent,
    ListteacherComponent,
    AddTeacherComponent,
    EditTeacherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
