import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnimesInterface } from '../interfaces/info-page.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AnimesService {

  cargando = true;
  animes: any[] = [];
  animesFilter: any[] = [];

  constructor(private http: HttpClient) {

    this.cargarAnimes();

   }

  private cargarAnimes() {


    return new Promise<void>((resolve, reject) => {
      this.http.get('https://otaku-induction-default-rtdb.firebaseio.com/animes.json')
      .subscribe((resp: any) => {
        //console.log(resp);
        this.animes = resp;
        this.cargando = false;
        resolve();
      });
    });

    
  }

  getAnime(id: string) {
    return this.http.get(`https://otaku-induction-default-rtdb.firebaseio.com/all-animes/${id}.json`);
  }

  buscarAnime(termino : string)
  {
    if (this.animes.length === 0) {
      //cargar animes
      this.cargarAnimes().then(() => {
        //ejecutar despues de tener los animes
        //aplicar filtro
        this.filtrarAnimes(termino);
      });
    } else {
      //aplicar filtro
      this.filtrarAnimes(termino);
    }
    // this.animesFilter = this.animes.filter(anime => {
    //   return true;
    // });

    // console.log(this.animesFilter);

  }

  private filtrarAnimes(termino: string) {
    console.log(this.animes);
    this.animesFilter = [];

    termino = termino.toLocaleLowerCase();

    this.animes.forEach(ani => {

      const titleLower = ani.title.toLocaleLowerCase();

      if (ani.title.indexOf(termino) >= 0 || titleLower.indexOf(termino) >= 0) {
        this.animesFilter.push(ani);
      }

    });
  }
}
