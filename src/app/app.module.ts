import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { FirstmoduleComponent } from './firstmodule/firstmodule.component';
import { MenuService } from './menu.service';
import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    TopmenuComponent,
    FirstmoduleComponent
  ],
  imports: [
    BrowserModule,
    ChartModule
  ],
  providers: [MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }