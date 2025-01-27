import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'contador-output-property',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent {
  @Input() valor: number = 0;
  @Output() mudouValor = new EventEmitter();
  @ViewChild('campoInput') campoValorInput: ElementRef | null = null;


  incrementa() {
    if (this.campoValorInput) {
      const currentValue = Number(this.campoValorInput.nativeElement.value) || 0; // Garante que seja um número
      this.campoValorInput.nativeElement.value = currentValue + 1;

      this.mudouValor.emit({ novoValor: this.campoValorInput.nativeElement.value });
   }
  }

  decrementa() {
    if (this.campoValorInput) {
      const currentValue = Number(this.campoValorInput.nativeElement.value) || 0; // Garante que seja um número
      this.campoValorInput.nativeElement.value = currentValue - 1;

      this.mudouValor.emit({ novoValor: this.campoValorInput.nativeElement.value });
    }
  }

}
