import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MatSnackBarContainer} from "@angular/material/snack-bar";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatCardModule} from "@angular/material/card";
import {MatNativeDateModule} from "@angular/material/core";
import {MatDialogModule} from "@angular/material/dialog"
import {MatSelectModule} from "@angular/material/select"
import {MatRadioModule} from "@angular/material/radio"
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatIconModule} from "@angular/material/icon";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainViewComponent} from './Components/Views/main-view/main-view.component';
import {MenuBarComponent} from './Components/Views/menu-bar/menu-bar.component';
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {AddTagComponent} from './Components/Views/add-tag/add-tag.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {LoginScreenComponent} from './Components/Views/login-screen/login-screen.component';
import { TagsMapComponent } from './Components/Views/tags-map/tags-map.component';
import { HereMapComponent } from './Components/here-map/here-map.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    MenuBarComponent,
    AddTagComponent,
    LoginScreenComponent,
    TagsMapComponent,
    HereMapComponent,
    HereMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatSnackBarModule,
    MatAutocompleteModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
})
export class AppModule {
}
