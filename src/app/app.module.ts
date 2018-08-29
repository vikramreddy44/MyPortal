import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { BootstrapModalModule } from './custom_modules/dialogModule';
import { SharedModule } from './shared/shared.module';
import { ConfirmModalComponent } from './shared/confirm-modal/confirm-modal.component';
import { NgProgressModule, NgProgressInterceptor } from 'ngx-progressbar';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutsModule,
    AppRoutingModule,
    NgProgressModule,
    BootstrapModalModule.forRoot({ container: document.body })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor, multi: true }
  ],
  entryComponents: [
    ConfirmModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
