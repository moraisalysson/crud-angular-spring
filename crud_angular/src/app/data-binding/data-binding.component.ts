import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {
  nomeDoCurso: string = "Curso de Angular da Loiane";

  onMudouValor(evento: any) {
    console.log(evento);
  }
}
