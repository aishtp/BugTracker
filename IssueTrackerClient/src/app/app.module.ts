import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxWebstorageModule } from 'ngx-webstorage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './Guards/authGuard';
import { LoginComponent } from './login/login.component';
import { AuthenticatorService } from './Services/authenticator.service';
import { HttpCommonService } from './Services/http-common.service';
import { TrackIssuesComponent } from './track-issues/track-issues.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TrackIssuesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxWebstorageModule.forRoot(),
    HttpClientModule
  ],
  providers: [HttpCommonService, AuthGuard, AuthenticatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
