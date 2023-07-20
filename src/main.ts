import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

/* imports app module from Angular */
/* is the app.module.ts file in the app folder */
import { AppModule } from './app/app.module'; 

/* bootstraps app module from line 5 */
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
