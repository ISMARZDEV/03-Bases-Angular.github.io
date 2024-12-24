import { Component } from "@angular/core";
import { Character } from "../interfaces/character.interface";



@Component
({
  selector:'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {

  public characters: Character[] = [{
    name: 'Krillin',
    power: 100
  },
  {
    name: 'Goku',
    power: 300
  }
  ]

  //   public characters: Character[] = [{
  //     name: 'Krillin',
  //     power: 1000
  //   },
  //   {
  //     name: 'Goku',
  //     power: 9500
  //   },
  //   {
  //     name: 'Vegueta',
  //     power: 100
  //   }
  // ];

  onNewCharacter( character: Character ):void {
    console.log('main page')
    console.log(character)

    this.characters.push(character)
  }
}
