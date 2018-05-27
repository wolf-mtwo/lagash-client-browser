import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import $ from 'jquery';

// import './app/main.css';

// window.$ = window.jQuery = $;
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
