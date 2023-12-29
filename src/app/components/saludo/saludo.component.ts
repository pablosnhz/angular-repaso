import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit, OnDestroy, OnChanges {

  // padre llama al hijo, veni hijo, para traer input
  @Input() aloha: string = 'Don diego'

  // hijo llama al padre, ven padre, para llevar output
  @Output() paraEliminar: EventEmitter<string> = new EventEmitter<string>();

  aMostrar(){
    this.paraEliminar.emit(`este usuario se va a eliminar ${ this.aloha } `)
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


