<template>
    <div class="Game" v-if="computedGame">
        <div class="Game-Header">{{ computedGame.name }}</div>
        <div
            class="Game-Logo"
            style="background-image: url(https://steamcdn-a.akamaihd.net/steam/apps/214950/header.jpg?t=1575461195)"
        />
        <div class="Game-Info">
            <div class="Game-ComingDate">Coming {{ computedComingDate }}</div>
            <div class="Game-Platforms" v-if="computedGameDescription">
                Platforms: {{ computedGameDescription.platforms }}
            </div>
        </div>
        <div class="Game-Actions">
            <a v-if="computedGameDescription" class="Game-SeeLink" :href="computedGameDescription.url" target="_blank">
                Visit Game Page
            </a>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import moment from "moment";
import { FETCH_GAME_DESCRIPTION } from "@/store/modules/schedule";
import { IGame, IGameDescription } from "@/types";

@Component
export default class Game extends Vue {
    get computedGame(): IGame | undefined {
        const gameId = +this.$route.params.id;
        return this.$store.state.schedule.games.find((g: IGame) => g.id === gameId);
    }

    get computedGameDescription(): IGameDescription | undefined {
        return this.$store.state.schedule.gameDescription;
    }

    get computedComingDate(): string {
        const game = this.computedGame;
        if (!game) {
            return '';
        }

        return moment.utc(new Date(game.year, game.month, game.day)).format("MMMM Do, YYYY");
    }

    mounted() {
        const gameId = +this.$route.params.id;
        this.$store.dispatch(FETCH_GAME_DESCRIPTION, gameId);
    }
}
</script>

<style scoped lang="scss">
.Game {
    display: flex;
    flex-wrap: wrap;

    &-Header {
        width: 100%;
        padding: 3px 0 23px;
        font-size: 1.8em;
        font-weight: bolder;
        text-transform: uppercase;
    }

    &-Logo {
        width: 200px;
        background-size: contain;
        background-repeat: no-repeat;
        margin-right: 20px;
    }

    &-Info {
        width: calc(100% - 220px);
    }

    &-Actions {
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }

    &-SeeLink {
        text-decoration: none;
        background-color: #f35ba1;
        border-radius: 20px;
        padding: 5px 10px;
        color: white;

        &:hover {
            background-image: linear-gradient(90deg, #448bf9, #0abafc);
        }
    }
}
</style>
