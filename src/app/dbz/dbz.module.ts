import { NgModule } from "@angular/core";
import { MainPageComponent } from "./pages/main-page.component";
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
@NgModule ({
  exports: [
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    MainPageComponent,
    ListComponent,
    FormComponent,
  ]
})

export class DbzModule {}
