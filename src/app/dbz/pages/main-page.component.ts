
import { Component } from "@angular/core";
import { Character } from "../interfaces/character.interface";

@Component({
  selector: 'main-page-component',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  public characters: Character[] = [{
    name: 'Ismael',
    power: 100,
    },
    {
    name: 'Manuel',
    power: 200,
    },
  ]

  onNewCharacter( character: Character ):void {
    console.log('El Main Page lo esta recibiendo')
    console.log(character);

    this.characters.push(character);
  }

  onDeleteCharacter( index: number ) {
    this.characters.splice(index,1);

  }



}

