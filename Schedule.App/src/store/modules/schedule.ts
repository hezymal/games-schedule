import { Module } from "vuex";
import { IGame, IGameDescription } from "@/types";
import { IRootState, IScheduleState } from "../types";

const moduleName = "schedule";
export const FETCH_GAME_DESCRIPTION = `${moduleName}/FETCH_GAME_DESCRIPTION`;
export const SET_GAMES = `${moduleName}/SET_GAMES`;
export const SET_GAME_DESCRIPTION = `${moduleName}/SET_GAME_DESCRIPTION`;

const module: Module<IScheduleState, IRootState> = {
    state: {
        games: [],
        gameDescription: null,
    },
    mutations: {
        [SET_GAMES](state, games: IGame[]) {
            state.games = games;
        },
        [SET_GAME_DESCRIPTION](state, gameDescription: IGameDescription) {
            state.gameDescription = gameDescription;
        },
    },
    actions: {
        [FETCH_GAME_DESCRIPTION]() {},
    },
};

export default module;
