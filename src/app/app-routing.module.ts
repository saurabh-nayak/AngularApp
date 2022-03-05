import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './component-communication/parent/parent.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelloComponent } from './hello/hello.component';
import { LoginComponent } from './login/login.component';
import { PipesComponent } from './pipes/pipes/pipes.component';
import { AuthGuard } from './services/auth.guard';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';
import { UserdetailComponent } from './userdetail/userdetail.component';

/* Can pass path and component for routing */
const routes: Routes = [
  { path: 'parent', component: ParentComponent },
  { path: 'hello', component: HelloComponent },
  { path: 'directive', component: StructuralDirectiveComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent,
    canActivate:[AuthGuard] },
  { path: 'userdetail', component: UserdetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
