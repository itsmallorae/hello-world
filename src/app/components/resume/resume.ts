import { Component } from '@angular/core'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { FormInterview } from '../form-interview/form-interview';

@Component({
  selector: 'app-resume',
  imports: [FontAwesomeModule, FormInterview],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
})
export class Resume {
  linkedinIcon = faLinkedin; 
  fileIcon = faAddressCard;
}
