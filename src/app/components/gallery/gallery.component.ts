import { Component } from '@angular/core';
import { CardComponent } from "./card/card.component";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

  cardsInfo = [
    {
      "title": "Greenspec's Gateway to Innovation",
      "category" : "Technology",
      "description" : "Lorem ipsum dolor sit amet consectetur. Porttitor est mauris curabitur pellentesque."
    },
    {
      "title": "Greenspec's Gateway to Innovation",
      "category" : "Technology",
      "description" : "Lorem ipsum dolor sit amet consectetur. Porttitor est mauris curabitur pellentesque."
    },
    {
      "title": "Greenspec's Gateway to Innovation",
      "category" : "Technology",
      "description" : "Lorem ipsum dolor sit amet consectetur. Porttitor est mauris curabitur pellentesque."
    },
    {
      "title": "Greenspec's Gateway to Innovation",
      "category" : "Technology",
      "description" : "Lorem ipsum dolor sit amet consectetur. Porttitor est mauris curabitur pellentesque."
    },
  ]
}
