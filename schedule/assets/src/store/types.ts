import { IGame, IGameDescription } from '@/types';

export interface IScheduleState {
    year: number;
    games: IGame[];
    gameDescription: IGameDescription | null;
}

export interface IRootState {
    schedule: IScheduleState;
}
