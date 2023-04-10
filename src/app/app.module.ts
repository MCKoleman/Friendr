import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroScreenComponent } from './intro-screen/intro-screen.component';
import { MatchingGridComponent } from './matching-grid/matching-grid.component';
import { MatchingSwipeComponent } from './matching-swipe/matching-swipe.component';
import { MatchingMatchesComponent } from './matching-matches/matching-matches.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { RegisterScreenComponent } from './register-screen/register-screen.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { MessagingComponent } from './messaging/messaging.component';
import { MessagingConversationComponent } from './messaging-conversation/messaging-conversation.component';
import { MessagingMessageComponent } from './messaging-message/messaging-message.component';
import { MatchingCardComponent } from './matching-card/matching-card.component';
import { MatchingProfileComponent } from './matching-profile/matching-profile.component';
import { ContentService } from './shared/services/content.service';
import { HomePageComponent } from './home-page/home-page.component';
import { ButtonComponent } from './button/button.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileCreateComponent } from './profile-create/profile-create.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { MatchingMatchComponent } from './matching-match/matching-match.component';
import { FormsModule } from '@angular/forms';
import { MatchingComponent } from './matching/matching.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroScreenComponent,
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
    MessagingConversationComponent,
    MessagingMessageComponent,
    MatchingCardComponent,
    MatchingProfileComponent,
    HomePageComponent,
    ButtonComponent,
    ProfileEditComponent,
    ProfileCreateComponent,
    InputFieldComponent,
    MatchingMatchComponent
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
