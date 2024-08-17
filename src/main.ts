import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideRouter } from "@angular/router";
import { provideState, provideStore } from "@ngrx/store";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { isDevMode } from "@angular/core";
import { authFeatureKey, authReducer } from "./app/auth/store/reducer";
import { appRoutes } from "./app/app.routes";

bootstrapApplication(AppComponent, {providers:[provideRouter(appRoutes),provideStore() ,
  provideState(authFeatureKey,authReducer),
  provideStoreDevtools({
  maxAge: 25,
  logOnly: !isDevMode(),
  autoPause: true,
  trace: false,
  traceLimit: 75,
  connectInZone: true
})]})
