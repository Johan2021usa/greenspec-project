import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CardComponent } from "./card/card.component";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent implements AfterViewInit{

  @ViewChild('wrapperGallery') wrapperGallery!: ElementRef;

  options:ScrollToOptions = {
    top: 0,
    left: 290,
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
    }
  ];

  ngAfterViewInit(): void {

  }

  scrollImage(direction:boolean){
    const wrapperGallery:HTMLElement = this.wrapperGallery.nativeElement;
    this.options.left = (direction) ? (290) : (-290);
    wrapperGallery.scroll(this.options);
  }
}
