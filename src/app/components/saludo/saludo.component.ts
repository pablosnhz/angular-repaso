import { Component, Input, Output, OnInit, EventEmitter, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit, OnDestroy, OnChanges {

  // padre llama al hijo, veni hijo
  @Input() cositas: string = 'Olakease';

  // hijo llama al padre, ven padre
  @Output() mensajeEmitter: EventEmitter<string> = new EventEmitter<string>();

  myStyle: object = {
    color: 'blue',
    fontSize: '20px',
  }

  ngOnInit(): void {
    console.log('ngOnInit implemented.');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Valor anterior de', changes);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy implemented.');
  }

  mensajeAlPadre(): void {
    // alert(`${ this.nombre } procedimiento exitoso!`)
    this.mensajeEmitter.emit(`${ this.cositas } procedimiento exitoso!`);
  }

}
