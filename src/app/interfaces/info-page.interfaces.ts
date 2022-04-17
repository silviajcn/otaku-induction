// import { SafeResourceUrl } from '@angular/platform-browser';

export interface InfoPage {
    title?: string;
    autor?: string;
    autor_page?: string;
    twitter?: string;
    github?: string;
    linkedin?: string;
}

export interface InfoAnimes {
    site?: string;
    name?: string;
    page_name?: string;
    about?: string;
    about_2?: string;
}

export interface AnimesInterface {
    code: string;
    title: string;
    categoria: string;
    categories: string;
    poster: string;
}

export interface AllAnimesInterface {
    anime_name?: string;
    other_name?: string;
    category?: string;
    resume?: string;
    autor?: string;
    genres?: Array<string>;
    main_character?: string;
    main_character_photo?: string;
    fav_1?: string;
    fav_1_photo?: string;
    fav_2?: string;
    fav_2_photo?: string;
    fav_3?: string;
    fav_3_photo?: string;
    banner?: string;
    poster?: string;
    score?: number;
    status?: string;
    videoUrl?: string;
    notes_g?: string;
    notes_b?: string;
}