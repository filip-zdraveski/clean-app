import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainViewComponent} from "./Components/Views/main-view/main-view.component";
import {AddTagComponent} from "./Components/Views/add-tag/add-tag.component";
import {LoginScreenComponent} from "./Components/Views/login-screen/login-screen.component";
import {TagsMapComponent} from "./Components/Views/tags-map/tags-map.component";
import {TagViewComponent} from "./Components/Views/tag-view/tag-view.component";


const routes: Routes = [
  {path: 'login', component: LoginScreenComponent},
  {path: 'garbage-zones',
    children: [
      { path: '', component: TagsMapComponent },
      { path: 'create', component: AddTagComponent },
      { path: ':id', component: TagViewComponent },
    ]},
  {path: '', component: MainViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
