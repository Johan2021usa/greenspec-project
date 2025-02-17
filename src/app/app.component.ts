import { APP_INITIALIZER, Component, computed, effect, ElementRef, Injectable, OnInit, signal, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    ],
    providers:[],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  private rootStyles! : CSSStyleDeclaration;

  ngOnInit():void{
    // console.log(localStorage.getItem("darkMode"));
    // this.rootStyles = document.documentElement.style;
    // getComputedStyle(document.documentElement).getPropertyValue("--white").trim();
    // this.rootStyles.setProperty("--white", "black");
  }




}
