import { Component, Input, Output, OnInit, EventEmitter, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit, OnDestroy, OnChanges {

  ngOnInit(): void {
    console.log('ngOnInit implemented.');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges implemented.');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy implemented.');
  }

  // padre llama al hijo, veni hijo
  @Input() nombre: string = 'Nolose';

  // hijo llama al padre, ven padre
  @Output() mensajeEmitter: EventEmitter<string> = new EventEmitter<string>();

  mensajeAlPadre(): void {
    // alert(`${ this.nombre } procedimiento exitoso!`)
    this.mensajeEmitter.emit(`${ this.nombre } procedimiento exitoso!`);
  }

}
