import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ], 
  exports:[UserComponent]
})
export class UserModule { }
