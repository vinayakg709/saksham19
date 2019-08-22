import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularTiltModule} from 'angular-tilt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { TeamComponent } from './team/team.component';
import { RegisterComponent } from './register/register.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FooterComponent } from './footer/footer.component';
import { ServerService } from './services/server.service';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
// import {Swal} from 'sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    TeamComponent,
    RegisterComponent,
    FooterComponent,
    TableComponent,
    AdminLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    BrowserAnimationsModule,
    AngularTiltModule,
    FormsModule,
    NgMultiSelectDropDownModule,
    HttpClientModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    // Swal
    
  ],
  
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
