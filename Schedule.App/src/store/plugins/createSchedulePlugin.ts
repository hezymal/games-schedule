import { Socket } from "phoenix";
import { Plugin } from "vuex";
import { IGame, IGameDescription } from "@/types";
import { IRootState } from "../types";
import {
    FETCH_GAME_DESCRIPTION,
    SET_GAMES,
    SET_GAME_DESCRIPTION
} from "../modules/schedule";

interface IGamesChannelResponse {
    games: IGame[];
}

function createSchedulePlugin(socket: Socket): Plugin<IRootState> {
    const channel = socket.channel("schedule:user");

    return store => {
        store.subscribeAction(action => {
            if (action.type === FETCH_GAME_DESCRIPTION) {
                channel.push("game", { id: action.payload });
            }
        });

        channel
            .join()
            .receive("ok", response => {
                window.console.log("Joined successfully", response);
                channel.push("games", {});
            })
            .receive("error", response =>
                window.console.error("Unable to join", response)
            );

        channel.on("games", (response: IGamesChannelResponse) =>
            store.commit(SET_GAMES, response.games)
        );

        channel.on("game", (gameDescription: IGameDescription) =>
            store.commit(SET_GAME_DESCRIPTION, gameDescription)
        );
    };
}

export default createSchedulePlugin;
