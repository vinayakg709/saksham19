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
import { from } from 'rxjs';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    TeamComponent,
    RegisterComponent,
    FooterComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    BrowserAnimationsModule,
    AngularTiltModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    HttpClientModule
  ],
  
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
