import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchingGridComponent } from './matching-grid/matching-grid.component';
import { MatchingSwipeComponent } from './matching-swipe/matching-swipe.component';
import { MatchingMatchesComponent } from './matching-matches/matching-matches.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { RegisterScreenComponent } from './register-screen/register-screen.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { MessagingComponent } from './messaging/messaging.component';
import { MatchingSwipeProfileComponent } from './matching-swipe-profile/matching-swipe-profile.component';
import { MatchingGridProfileComponent } from './matching-grid-profile/matching-grid-profile.component';
import { ContentService } from './shared/services/content.service';
import { HomePageComponent } from './home-page/home-page.component';
import { ButtonComponent } from './button/button.component';
import { MatchingMatchProfileComponent } from './matching-match-profile/matching-match-profile.component';
import { FormsModule } from '@angular/forms';
import { MatchingComponent } from './matching/matching.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchingComponent,
    MatchingGridComponent,
    MatchingSwipeComponent,
    MatchingMatchesComponent,
    LoginScreenComponent,
    RegisterScreenComponent,
    NavbarComponent,
    FooterComponent,
    ProfileComponent,
    MessagingComponent,
    MatchingSwipeProfileComponent,
    MatchingGridProfileComponent,
    HomePageComponent,
    ButtonComponent,
    MatchingMatchProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
