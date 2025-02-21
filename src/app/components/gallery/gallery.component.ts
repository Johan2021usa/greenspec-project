import { Component, ElementRef, ViewChild } from '@angular/core';
import { CardComponent } from "./card/card.component";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css', './desktop-css/gallery.desk.component.css']
})
export class GalleryComponent{

  @ViewChild('wrapperGallery') wrapperGallery!: ElementRef;

  options:ScrollToOptions = {
    top: 0,
    left: 0,
    behavior: "smooth"
  }

  cardsInfo = [
    {
      "title": "Greenspec's Gateway to Innovation #1",
      "category" : "Technology",
      "description" : "Lorem ipsum dolor sit amet consectetur. Porttitor est mauris curabitur pellentesque."
    },
    {
      "title": "Greenspec's Gateway to Innovation #2",
      "category" : "Technology",
      "description" : "Lorem ipsum dolor sit amet consectetur. Porttitor est mauris curabitur pellentesque."
    },
    {
      "title": "Greenspec's Gateway to Innovation #3",
      "category" : "Technology",
      "description" : "Lorem ipsum dolor sit amet consectetur. Porttitor est mauris curabitur pellentesque."
    },
    {
      "title": "Greenspec's Gateway to Innovation #4",
      "category" : "Technology",
      "description" : "Lorem ipsum dolor sit amet consectetur. Porttitor est mauris curabitur pellentesque."
    },
    {
      "title": "Greenspec's Gateway to Innovation #5",
      "category" : "Technology",
      "description" : "Lorem ipsum dolor sit amet consectetur. Porttitor est mauris curabitur pellentesque."
    },
    {
      "title": "Greenspec's Gateway to Innovation #6",
      "category" : "Technology",
      "description" : "Lorem ipsum dolor sit amet consectetur. Porttitor est mauris curabitur pellentesque."
    },
    {
      "title": "Greenspec's Gateway to Innovation #7",
      "category" : "Technology",
      "description" : "Lorem ipsum dolor sit amet consectetur. Porttitor est mauris curabitur pellentesque."
    },
    {
      "title": "Greenspec's Gateway to Innovation #8",
      "category" : "Technology",
      "description" : "Lorem ipsum dolor sit amet consectetur. Porttitor est mauris curabitur pellentesque."
    }
  ];

  scrollImage(direction:boolean){
    const wrapperGallery:HTMLElement = this.wrapperGallery.nativeElement;
    const vpSize = document.documentElement.clientWidth; // Getting the width of the viewport / desktop / mobile
    if(vpSize>1320){
      this.options.left! = (direction) ? (287) : (-287);
    }else{
      this.options.left! = (direction) ? (260) : (-260);
    }
    wrapperGallery.scrollLeft += this.options.left;
    // wrapperGallery.scroll(this.options);
  }
}
