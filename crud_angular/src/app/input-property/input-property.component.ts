import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curso-input-property',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.scss']
})
export class InputPropertyComponent {
  @Input('nome') nomeCurso: string = ''; //internamente será nomeCurso, mas externamente será curso
}
