import { Component, enableProdMode } from '@angular/core';
import { Log } from './services/logging.service';
import { environment as prodEnv } from '../environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public readonly title = 'app';

  constructor() {
    if (prodEnv.production) {
      // enableProdMode();
      // disable any console.log debugging statements in production mode
      // tslint:disable-next-line:no-object-mutation , no-empty
      window.console.log = () => {};
    }
    Log.info('App.component');
  }
}
