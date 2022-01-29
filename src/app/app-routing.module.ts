import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './component-communication/parent/parent.component';
import { HelloComponent } from './hello/hello.component';
import { PipesComponent } from './pipes/pipes/pipes.component';
import { StructuralDirectiveComponent } from './structural-directive/structural-directive.component';

/* Can pass path and component for routing */
const routes: Routes = [
  { path: 'parent', component: ParentComponent },
  { path: 'hello', component: HelloComponent },
  { path: 'directive', component: StructuralDirectiveComponent },
  { path: 'pipes', component: PipesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
