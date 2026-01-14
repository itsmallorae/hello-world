import { Component, input } from '@angular/core';
import { Image } from '../image/image';

@Component({
  selector: 'app-general-content',
  imports: [Image],
  templateUrl: './general-content.html',
  styleUrl: './general-content.scss',
  standalone: true
})
export class GeneralContent {
  flexDirection = input<string>('flexrow');
  title = input<string>();
  bodyOne = input<string>();
  bodyTwo = input<string>();
  imgSrc = input<string>(); 
  imgClass = input<string>();
}
