import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MatchingSwipeComponent } from './matching-swipe/matching-swipe.component';
import { MatchingGridComponent } from './matching-grid/matching-grid.component';
import { MessagingComponent } from './messaging/messaging.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { RegisterScreenComponent } from './register-screen/register-screen.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileCreateComponent } from './profile-create/profile-create.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'login', component: LoginScreenComponent},
  {path: 'register', component: RegisterScreenComponent},
  {path: 'matching-a', component: MatchingSwipeComponent},
  {path: 'matching-b', component: MatchingGridComponent},
  {path: 'messages', component: MessagingComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'profile/edit', component: ProfileEditComponent},
  {path: 'profile/create', component: ProfileCreateComponent},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
