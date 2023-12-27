import { Component, Input, Output, OnInit, EventEmitter, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit, OnDestroy, OnChanges {

  // padre llama al hijo, veni hijo, para traer input
  @Input() newText: string = 'MyNameIs';


  // hijo llama al padre, ven padre, para llevar output
  @Output() mensajeEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Output() aEliminar: EventEmitter<string> = new EventEmitter<string>();

  estoSeElimina(): void {
    this.aEliminar.emit(`${ this.newText } esto se elimina`)
  }

  mensajeAlPadre(): void {
    // alert(`${ this.nombre } procedimiento exitoso!`)
    this.mensajeEmitter.emit(`${ this.newText } procedimiento exitoso!`);
  }

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

}


