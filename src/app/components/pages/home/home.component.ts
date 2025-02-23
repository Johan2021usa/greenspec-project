import { Component } from '@angular/core';
import { BannerComponent } from "../../banner/banner.component";
import { GalleryComponent } from "../../gallery/gallery.component";
import { InfoBoardComponent } from "../../info-board/info-board.component";
import { InsightsComponent } from "../../insights/insights.component";
import { PartnersComponent } from "../../partners/partners.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, GalleryComponent, InfoBoardComponent, InsightsComponent, PartnersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}
