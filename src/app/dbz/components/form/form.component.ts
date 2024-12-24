import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'form-component',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {


  public addCharacters: Character = {
    name: '',
    power: 0
  };


  @Output() public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  emitCharacter():void {
    console.log(this.addCharacters);

    if(this.addCharacters.name.length === 0) return;

    this.onNewCharacter.emit(this.addCharacters);

    //Limpiar
    this.addCharacters = {name:'', power: 0}
  }
}
