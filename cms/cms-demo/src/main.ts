import { ApplicationRef, enableProdMode } from '@angular/core';
import { enableDebugTools } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
    platformBrowserDynamic().bootstrapModule(AppModule).then(moduleRef => {
        // https://medium.com/@dmitrymogilko/profiling-angular-change-detection-c00605862b9f
        const applicationRef = moduleRef.injector.get(ApplicationRef);
        const componentRef = applicationRef.components[0];
        // allows to run `ng.profiler.timeChangeDetection();`
        enableDebugTools(componentRef);
    })
        .catch(err => console.error(err));
});
