import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayCanauxComponent } from './pages/display-canaux/display-canaux.component';

const routes: Routes = [
  { path: '', component: DisplayCanauxComponent },
  { path: 'canaux', component: DisplayCanauxComponent },
  { path: 'canaux/:id', component: DisplayCanauxComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CanauxRoutingModule {}
