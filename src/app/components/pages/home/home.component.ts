import { Component } from '@angular/core';
import { BannerComponent } from "../../banner/banner.component";
import { GalleryComponent } from "../../gallery/gallery.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, GalleryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}
