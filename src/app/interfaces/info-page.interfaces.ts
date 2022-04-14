export interface InfoPage {
    title?: string;
    autor?: string;
    autor_page?: string;
    twitter?: string;
    github?: string;
    linkedin?: string;
}

export interface InfoAnimes {
    about?: string;
    alter_name?: string;
    autor?: string;
    genres?: string;
    main_character?: string;
    name?: string;
    poster?: string;
}

export interface AnimesInterface {
    code?: string;
    title?: string;
    categoria?: string;
    poster?: string;
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
    video?: string;
    notes_g?: string;
    notes_b?: string;
}