import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { ParentComponent } from './component-communication/parent/parent.component';
import { ChildComponent } from './component-communication/child/child.component';
import { PipesComponent } from './pipes/pipes/pipes.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    StructuralDirectiveComponent,
    ParentComponent,
    ChildComponent,
    PipesComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({cookieName: 'XSRF-TOKEN'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
