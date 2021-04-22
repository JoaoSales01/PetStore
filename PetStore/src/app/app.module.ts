import { NgModule,} from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { CategoriesFeaturedComponent } from './components/categories-featured/categories-featured.component';
import { ProductItemComponent } from './components/product-item/product-item.component'; 
import { MatCardModule } from '@angular/material/card';
import { ProductComponent } from './pages/product/product.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
@NgModule({

 // schemas: [CUSTOM_ELEMENTS_SCHEMA],//
  
  declarations: [
    AppComponent,
    DashboardComponent,
    CategoriesFeaturedComponent,
    ProductItemComponent,
    ProductComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    NgxUsefulSwiperModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
