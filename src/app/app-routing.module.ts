import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MessagingComponent } from './messaging/messaging.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { RegisterScreenComponent } from './register-screen/register-screen.component';
import { MatchingComponent } from './matching/matching.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'login', component: LoginScreenComponent},
  {path: 'register', component: RegisterScreenComponent},
  {path: 'matching', component: MatchingComponent},
  {path: 'messages', component: MessagingComponent},
  {path: 'messages/:profileID', component: MessagingComponent},
  {path: 'profile', component: ProfileComponent},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
