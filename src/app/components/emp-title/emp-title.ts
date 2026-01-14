import { Component } from '@angular/core';
import { SectionTitle } from '../section-title/section-title';

@Component({
  selector: 'app-emp-title',
  imports: [SectionTitle],
  templateUrl: './emp-title.html',
  styleUrl: './emp-title.scss',
  standalone: true
})
export class EmpTitle {

}
