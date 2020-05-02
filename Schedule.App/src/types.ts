export interface IGame {
    id: number;
    name: string;
    day?: number;
    month: number;
    year: number;
}

export interface IGameDescription {
    platforms: string;
    url: string;
    game_id: number;
}
