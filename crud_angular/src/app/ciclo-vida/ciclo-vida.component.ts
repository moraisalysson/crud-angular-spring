import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo-vida',
  templateUrl: './ciclo-vida.component.html',
  styleUrls: ['./ciclo-vida.component.scss']
})
export class CicloVidaComponent {
  @Input() valorInicial: number = 0;

}
