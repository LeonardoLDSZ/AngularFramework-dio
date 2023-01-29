import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
  constructor(){}

  ngOnInit(): void {
    console.log("Nascimento do Title Component")

  }

}
