import { IGame, IGameDescription } from '@/types';

export interface IScheduleState {
    games: IGame[];
    gameDescription: IGameDescription | null;
}

export interface IRootState {
    schedule: IScheduleState;
}
