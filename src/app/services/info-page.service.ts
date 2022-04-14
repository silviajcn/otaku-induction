import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoAnimes, InfoPage } from '../interfaces/info-page.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPage = {};
  cargada = false;

  animes: any[] = [];

  constructor( private http: HttpClient) {
    //console.log('Servicio de infoPagina');

    this.cargarInfo();
    this.cargarAnimes();

  }

  private cargarInfo(){
    this.http.get('assets/data/data-animes.json')
      .subscribe((resp: InfoPage) => {
        this.cargada = true;
        this.info = resp;
        //console.log(resp);
    })
  }

  private cargarAnimes() {
    this.http.get('https://otaku-induction-default-rtdb.firebaseio.com/about.json')
      .subscribe((resp: any) => {
        this.animes = resp;
        //console.log(resp);
    })
  }
}
