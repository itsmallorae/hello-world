import { Component, input } from '@angular/core';

export interface CardItem {
  title: string;
  content: string;
}

@Component({
  selector: 'app-card-grid',
  imports: [],
  templateUrl: './card-grid.html',
  styleUrl: './card-grid.scss',
})
export class CardGrid {
  cards = input.required<CardItem[]>();
  poop = input<string>();
}
