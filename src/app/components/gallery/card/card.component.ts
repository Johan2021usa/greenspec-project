import { Component, Input } from '@angular/core';

interface Info{
  "title" : string,
  "category" : string,
  "description" : string
}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {
  @Input('info') info!: Info;
}
