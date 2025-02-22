import { Component } from '@angular/core';
import { BannerComponent } from "../../banner/banner.component";
import { GalleryComponent } from "../../gallery/gallery.component";
import { InfoBoardComponent } from "../../info-board/info-board.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, GalleryComponent, InfoBoardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}
