import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AllAnimesInterface } from 'src/app/interfaces/info-page.interfaces';
import { AnimesService } from '../../services/animes.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  anime: AllAnimesInterface = {};
  id: string | undefined;
  dangerousVideoUrl: string | undefined;
  videoUrl!: string;
  

  constructor(private route: ActivatedRoute,
              public animesService: AnimesService,
              private sanitizer: DomSanitizer) {  }

  ngOnInit(): void {

    this.route.params.subscribe(parametros => {
      //console.log(parametros['id']);

      this.animesService.getAnime(parametros['id'])
        .subscribe((anime: AllAnimesInterface) => {
          //console.log(anime);
          this.id = parametros['id'];
          this.anime = anime;
        })
    });

  }

  updateVideoUrl(video: string) {
    this.dangerousVideoUrl = video;
    //this.videoUrl =
      //this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
  }

}
