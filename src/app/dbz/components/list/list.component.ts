import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'list-component',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public charactersList: Character[] = [{
    name: 'Ismael',
    power: 100
  }]

  @Output() public onDelete: EventEmitter<number> = new EventEmitter();

  onDeleteCharacter( index: number ): void {
    //TODO: Emitir el ID del personaje
    console.log({index})
    this.onDelete.emit(index);
  }

}
