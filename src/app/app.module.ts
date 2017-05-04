import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }         from './app.component';
import { SiteNavComponent }  from './nav/site-nav.component';
import { SiteMenuComponent }  from './nav/site-menu.component';
import { SiteDropdownComponent }  from './nav/site-dropdown.component';
import { PageComponent }   from './pages/page.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageComponent,
    SiteNavComponent,
    SiteMenuComponent,
    SiteDropdownComponent

  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
