import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/reducer';
import { Log } from './services/logging.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StoreModule.forRoot({ state: reducer })],
  providers: [Log],
  bootstrap: [AppComponent],
})
export class AppModule {}
