import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @ViewChild('dropProducts') dropProducts!: ElementRef;
  @ViewChild('dropKnowledge') dropKnowledge!: ElementRef;
  @ViewChild('dropAboutUs') dropAboutUs!: ElementRef;
  @ViewChild('dropSolutions') dropSolutions!: ElementRef;
  @ViewChild('dropContact') dropContact!: ElementRef;


  @ViewChild('arrowProducts') arrowProducts!: ElementRef;
  @ViewChild('arrowKnowledge') arrowKnowledge!: ElementRef;
  @ViewChild('arrowAboutUs') arrowAboutUs!: ElementRef;
  @ViewChild('arrowSolutions') arrowSolutions!: ElementRef;
  @ViewChild('arrowContact') arrowContact!: ElementRef;

  toggleAboutUs(event: Event){
    const dropAboutUs:HTMLElement = this.dropAboutUs.nativeElement;
    const arrowAboutUs:HTMLElement = this.arrowAboutUs.nativeElement;
    dropAboutUs.classList.toggle("--visibility-drop");
    dropAboutUs.classList.toggle("--h-about-us");
    arrowAboutUs.classList.toggle("--up");
  }

  toggleSolutions(event: Event){
    const dropSolutions:HTMLElement = this.dropSolutions.nativeElement;
    const arrowSolutions:HTMLElement = this.arrowSolutions.nativeElement;
    dropSolutions.classList.toggle("--visibility-drop");
    dropSolutions.classList.toggle("--h-solutions");
    arrowSolutions.classList.toggle("--up");
  }

  toggleProductsMenu(event: Event){
    const dropProducts:HTMLElement = this.dropProducts.nativeElement;
    const arrowProducts:HTMLElement = this.arrowProducts.nativeElement;
    dropProducts.classList.toggle("--visibility-drop");
    dropProducts.classList.toggle("--h-our-prod");
    arrowProducts.classList.toggle("--up");
  }

  toggleKnowledgeMenu(event: Event){
    const dropKnowledge:HTMLElement = this.dropKnowledge.nativeElement;
    const arrowKnowledge:HTMLElement = this.arrowKnowledge.nativeElement;
    dropKnowledge.classList.toggle("--visibility-drop");
    dropKnowledge.classList.toggle("--h-knowledge");
    arrowKnowledge.classList.toggle("--up");
  }

  toggleContact(event: Event){
    const dropContact:HTMLElement = this.dropContact.nativeElement;
    const arrowContact:HTMLElement = this.arrowContact.nativeElement;
    dropContact.classList.toggle("--visibility-drop");
    dropContact.classList.toggle("--h-contact");
    arrowContact.classList.toggle("--up");
  }
}
