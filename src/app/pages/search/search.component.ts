import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimesService } from 'src/app/services/animes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              public animesService: AnimesService) { }

  ngOnInit(): void {

    this.route.params
      .subscribe(params => {
        console.log(params['termino']);
        this.animesService.buscarAnime(params['termino']);
      })
  }

}
