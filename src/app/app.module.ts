import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CircleImgComponent } from './circle-img/circle-img.component';
import { SpanCircleComponent } from './span-circle/span-circle.component';
import { PowerComponent } from './power/power.component';
import { DebugComponent } from './debug/debug.component';

@NgModule({
  declarations: [
    AppComponent,
    CircleImgComponent,
    SpanCircleComponent,
    PowerComponent,
    DebugComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
