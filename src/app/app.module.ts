import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorldComponent } from './world/world.component';
import { CodeComponent } from './code/code.component';
import { MeteorComponent } from './meteor/meteor.component';

@NgModule({
  declarations: [
    AppComponent,
    WorldComponent,
    CodeComponent,
    MeteorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
