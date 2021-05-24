import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StarComponent } from './star.component';



@NgModule({
  declarations: [
    //we want to share the StarComponent
    StarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CommonModule,
    FormsModule,
    StarComponent
  ]
})
export class SharedModule { }
