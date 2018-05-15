import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatGridListModule, MatToolbarModule } from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
