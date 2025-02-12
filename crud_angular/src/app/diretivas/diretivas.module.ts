import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiretivaNgIfComponent } from './diretiva-ng-if/diretiva-ng-if.component';
import { DiretivasService } from './diretivas.service';
import { DiretivaNgSwitchComponent } from './diretiva-ng-switch/diretiva-ng-switch.component';



@NgModule({
  declarations: [DiretivaNgIfComponent, DiretivaNgSwitchComponent],
  imports: [
    CommonModule
  ],
  exports: [DiretivaNgIfComponent, DiretivaNgSwitchComponent],
  providers: [DiretivasService]
})
export class DiretivasModule { }
