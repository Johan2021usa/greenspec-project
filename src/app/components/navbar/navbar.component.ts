import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import {Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', './navbar-css/menu-style.css']
})
export class NavbarComponent implements OnInit, AfterViewInit{

  @ViewChild('buttonActive') buttonActive!: ElementRef;
  @ViewChild('menuList') menuList!: ElementRef;
  @ViewChild('dropProducts') dropProducts!: ElementRef;
  @ViewChild('dropKnowledge') dropKnowledge!: ElementRef;
  @ViewChild('arrowProducts') arrowProducts!: ElementRef;
  @ViewChild('arrowKnowledge') arrowKnowledge!: ElementRef;
  @ViewChild('menuBUtton') menuButton!: ElementRef;
  @ViewChild('iconContainer') iconContainer!: ElementRef;
  private rootStyles! : CSSStyleDeclaration; // Used to saved CSS styles
  helperReturnState: boolean = false;

  constructor(
    private router: Router,
  ){}

  ngOnInit(): void {
    if(!localStorage.getItem("darkMode")){
      localStorage.setItem("darkMode", "false");
    }
  }

  ngAfterViewInit(): void {
    const activeBut:HTMLElement = this.buttonActive.nativeElement;
    if(localStorage.getItem("darkMode")==="true"){ // automatically run once the component is called, then..
      // CSS styles and vectors colors
      activeBut.children[0].setAttribute("src", "assets/vectors/navbar__button-moon--light-mini.png");
      activeBut.classList.add("--movement");
      this.setDarkTheme(); // Setting themes - dark
    }else{
      activeBut.children[0].setAttribute("src", "assets/vectors/navbar__button-sun--light.png");
      activeBut.classList.remove("--movement");
      this.setLightTheme(); // Setting themes - light
    }
  }

  toggleDarkMode(event: Event):void{
    const activeBut:HTMLElement = this.buttonActive.nativeElement;
    this.rootStyles = document.documentElement.style; // Getting the :root variables
    if(activeBut.children[0].getAttribute("src")==="assets/vectors/navbar__button-sun--light.png"){
      activeBut.children[0].setAttribute("src", "assets/vectors/navbar__button-moon--light-mini.png");
      localStorage.setItem("darkMode", "true");
      this.setDarkTheme();
    }else{
      activeBut.children[0].setAttribute("src", "assets/vectors/navbar__button-sun--light.png");
      localStorage.setItem("darkMode", "false");
      this.setLightTheme();
    }
    activeBut.classList.toggle("--movement");

    // getComputedStyle(document.documentElement).getPropertyValue("--back-ground").trim();
  }

  hideMenu():void{
    const menuList:HTMLElement = this.menuList.nativeElement;
    menuList.classList.toggle("--visibility");
  }

  toggleMenu(event: Event):void{
    const menuButton:HTMLElement = this.menuButton.nativeElement;
    const dimension = menuButton.getAttribute("d");
    this.hideMenu();
    /** COMPARING SVGs
     * We can compare an SVG by getting its d (dimension) property and comparing it with another one. The benefits of working with SVGs are:
     * - Editable dimensions
     * - not loss of resolution
     * - Inline modifications like color and so on */
    (dimension==="M0 0H18V2H0V0ZM0 7H18V9H0V7ZM0 14H18V16H0V14Z")
      ? (menuButton.setAttribute("d", "M0 0H18V2H0V0ZM7 7H18V9H7V7ZM0 14H18V16H0V14Z"))
      : (menuButton.setAttribute("d", "M0 0H18V2H0V0ZM0 7H18V9H0V7ZM0 14H18V16H0V14Z"));

    /** Comparing png src values to swap images example */
    // if(menuBut.getAttribute("src")==="assets/vectors/navbar__button-menu.png"){
    //   menuBut.setAttribute("src", "assets/vectors/navbar__button-menu--active.png");
    // }else{
    //   menuBut.setAttribute("src", "assets/vectors/navbar__button-menu.png")
    // }
  }

  toggleProductsMenu(event: Event){
    const dropProducts:HTMLElement = this.dropProducts.nativeElement;
    const arrowProducts:HTMLElement = this.arrowProducts.nativeElement;
    dropProducts.classList.toggle("--visibility-drop");
    arrowProducts.classList.toggle("--up");
  }

  toggleKnowledgeMenu(event: Event){
    const dropKnowledge:HTMLElement = this.dropKnowledge.nativeElement;
    const arrowKnowledge:HTMLElement = this.arrowKnowledge.nativeElement;
    dropKnowledge.classList.toggle("--visibility-drop-hub");
    arrowKnowledge.classList.toggle("--up");
  }

  returnHelper(state:boolean):void{
    if(state){
      this.helperReturnState = state;
      this.hideMenu();
    }else{
      this.helperReturnState = state;
      this.router.navigateByUrl("/home");
    }
  }

  setDarkTheme():void{
    this.rootStyles = document.documentElement.style; // Getting the :root variables
    // Re-assigning :root variables
    this.rootStyles.setProperty("--back-ground", "var(--black)");
    this.rootStyles.setProperty("--lang-fonts-clr", "var(--Dgray-700)");
    this.rootStyles.setProperty("--sign-in-clr", "var(--Dgreen-900)");
    this.rootStyles.setProperty("--contact-font-clr", "var(--Dblack-alter)");
    this.rootStyles.setProperty("--menu-title-clr", "var(--Dgray-900)");
    this.rootStyles.setProperty("--drop-item-clr", "var(--Dgray-700)");
    this.rootStyles.setProperty("--return-arrow-clr","var(--Dgreen-900)");

    this.rootStyles.setProperty("--active-menu-clr", "var(--Dgray-50)");
    this.rootStyles.setProperty("--border-clr", "var(--Dgray-200)");
    this.rootStyles.setProperty("--arrow-clr", "var(--Dgray-900)");
    this.rootStyles.setProperty("--menu-bt-clr","var(--Dgreen-900)");
  }

  setLightTheme():void{
    this.rootStyles = document.documentElement.style; // Getting the :root variables
    // Re-assigning :root variables
    this.rootStyles.setProperty("--back-ground", "var(--white)");
    this.rootStyles.setProperty("--lang-fonts-clr", "var(--gray-700)");
    this.rootStyles.setProperty("--sign-in-clr", "var(--green-900)");
    this.rootStyles.setProperty("--contact-font-clr", "var(--black-alter)");
    this.rootStyles.setProperty("--menu-title-clr", "var(--gray-900)");
    this.rootStyles.setProperty("--drop-item-clr", "var(--gray-700)");
    this.rootStyles.setProperty("--return-arrow-clr","var(--green-900)");

    this.rootStyles.setProperty("--active-menu-clr", "var(--gray-50)");
    this.rootStyles.setProperty("--border-clr", "var(--gray-200)");
    this.rootStyles.setProperty("--arrow-clr", "var(--gray-900)");
    this.rootStyles.setProperty("--menu-bt-clr","var(--green-900)");
  }

}
