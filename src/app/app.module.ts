import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule} from '@angular/forms' 
import { HttpClientModule } from '@angular/common/http';
import 'web-animations-js';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { InfoComponent } from './info/info.component';
import { KatComponent } from './kat/kat.component';
import { ProductsComponent } from './products/products.component';
import { EmployersComponent } from './employers/employers.component';
import { PipePipe } from './services/pipe/pipe.pipe';





@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AboutMeComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    MenuComponent,
    InfoComponent,
    KatComponent,
    ProductsComponent,
    EmployersComponent,
    PipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, 
    HttpClientModule

  ],
  providers: [{provide:APP_BASE_HREF, useValue:"/"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
