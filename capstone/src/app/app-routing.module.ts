import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashAccountComponent } from './components/cash-account/cash-account.component';
import { IraComponent } from './components/ira/ira.component';

const routes: Routes = [
  { path: "", component: CashAccountComponent},
  { path: "ira", component: IraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
