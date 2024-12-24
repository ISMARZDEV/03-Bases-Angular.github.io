import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})

export class ListComponent {

  @Input() public characterList: Character[] = [{
    name: 'Gohan',
    power: 100
  }]

  // @Input() public characterList: Character[] = [{
  //   name: 'Trunks',
  //   power: 10
  // }]

  @Output() public onNewCharacter: EventEmitter<number> = new EventEmitter();


  onDeleteCharacter(index: number):void{
    // TODO: Emitir el ID del Personaje
    console.log({ index });
  }

 }
