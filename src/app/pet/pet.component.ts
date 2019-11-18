import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  petName = 'linhmiu';
  petImage = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/womanyellingcat-1573233850.jpg?resize=480:*';
  constructor() { }
  updateName(name) {
    this.petName = name;
  }
  updateImage(image) {
    this.petImage = image;
  }
  ngOnInit() {
  }

}
