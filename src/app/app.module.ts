import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersDetailComponent } from './users/users-detail/users-detail.component';
import { ReposComponent } from './repos/repos.component';
import { SearchUsersComponent } from './users/search-users/search-users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './layouts/loader/loader.component';

const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    redirectTo: '/userlist'
}, {
  path: 'userlist',
  component: UsersListComponent
},  {
  path: 'user/:login',
  component: UsersDetailComponent
}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersListComponent,
    UsersDetailComponent,
    ReposComponent,
    SearchUsersComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
