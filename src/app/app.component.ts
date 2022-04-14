import { Component } from '@angular/core';
import { AnimesService } from './services/animes.service';
import { InfoPageService } from './services/info-page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(public infoPageService: InfoPageService,
              public animesService: AnimesService) {
    

  }
}
