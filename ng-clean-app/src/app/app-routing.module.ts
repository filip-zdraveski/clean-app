import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainViewComponent} from "./Components/Views/main-view/main-view.component";
import {AddTagComponent} from "./Components/Views/add-tag/add-tag.component";
import {LoginViewComponent} from "./Components/Views/login-view/login-view.component";

const routes: Routes = [
  {path: '', component: MainViewComponent},
  {path: 'garbage-zones/create', component: AddTagComponent},
  {path: 'login', component: LoginViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
