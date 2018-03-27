import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';

import { CompanyhistoryComponent } from './company/companyhistory/companyhistory.component';
import { CompanygoalsComponent } from './companygoals/companygoals.component';
import { CompanypartnersComponent } from './companypartners/companypartners.component';

import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';

import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotfoundComponent } from './notfound/notfound.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PaartersComponent } from './paarters/paarters.component';

import { SliderComponent } from './slider/slider.component';
import { GooglemapComponent } from './googlemap/googlemap.component';

import { AgmCoreModule } from '@agm/core';
import { SignupComponent } from './signup/signup.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';

import { HttpModule }from '@angular/http';
import { HttpClient,HttpClientModule  } from '@angular/common/http';

//Services 
import { UserdataService } from './services/userdata.service';
import { ProductdataService } from './services/productdata.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompanyComponent,
    ContactusComponent,
    AboutusComponent,
    LoginComponent,
    NotfoundComponent,
    HeaderComponent,
    FooterComponent,
    PaartersComponent,

    SliderComponent,
    GooglemapComponent,
    CompanyhistoryComponent,
    CompanygoalsComponent,
    CompanypartnersComponent,
    SignupComponent,
    UsersComponent,
    ProductsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey:''
    }
    ),
    RouterModule.forRoot([
      {
        path:'',
        component:HomeComponent,
      },
      {
        path:'company',
        component:CompanyComponent
      },
      {
        path:'companyhistory',
        component:CompanyhistoryComponent
      },
      {
        path:'companygoals',
        component:CompanygoalsComponent
      },
      {
        path:'companypartners',
        component:CompanypartnersComponent
      },
      {
        path:'contactus',
        component:ContactusComponent
      },
      {
        path:'aboutus',
        component:AboutusComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'signup',
        component:SignupComponent
      },
      {
        path:'users',
        component:UsersComponent
      },
      {
        path:'products',
        component:ProductsComponent
      },
      {
        path:'**',
        component:NotfoundComponent
      }

    ])
  ],
  providers: [
    UserdataService,
    ProductdataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
