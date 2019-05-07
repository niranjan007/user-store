import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/user.effects'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    EffectsModule.forFeature([UserEffects])
  ], 
  exports:[UserComponent]
})
export class UserModule { }
