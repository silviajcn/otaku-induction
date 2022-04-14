import { Component, OnInit } from '@angular/core';
import { AnimesService } from 'src/app/services/animes.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor( public animesService: AnimesService) { }

  ngOnInit(): void {
  }

}
