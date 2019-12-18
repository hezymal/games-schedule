<template>
    <div class="Calendar">
        <div class="Calendar-Header">{{ computedYear }}</div>
        <div class="Calendar-Months">
            <div
                v-for="month in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]"
                :key="month"
                :class="'Calendar-Month'"
            >
                <div class="Calendar-MonthTitle">{{ formatMonth(month) }}</div>
                <ul class="Calendar-Games">
                    <li v-for="game in computedGames(month)" :key="game.id">
                        <router-link :to="`/game/${game.id}`">
                            {{ game.name }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import moment from "moment";
import { IGame } from "@/types";

@Component
export default class Calendar extends Vue {
    get computedYear(): number {
        return this.$store.state.schedule.year;
    }

    computedGames(month: number): IGame[] {
        const year = this.$store.state.schedule.year;
        return this.$store.state.schedule.games.filter((g: IGame) => g.month === month && g.year === year);
    }

    formatMonth(month: number): string {
		return moment
            .utc(new Date(0, month, 1))
            .format("MMMM");
    }
}
</script>

<style scoped lang="scss">
.Calendar {
    &-Header {
        padding: 3px 0 23px;
        font-size: 1.8em;
        font-weight: bolder;
        text-transform: uppercase;
    }

    &-Months {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: -12px;
    }

    &-Month {
        box-sizing: border-box;
        width: calc(33% - 9px);
        text-align: left;
        font-size: 0.9em;
        margin: 0 0 12px;
        padding: 0 15px;
        border-radius: 16px;
        background-color: rgba(0, 0, 0, 0.1);
    }

    &-MonthTitle {
        padding: 7px 0;
        font-weight: 600;
        font-size: 0.9em;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: #6c7594;
    }

    &-Games {
        margin: 0;
        padding: 0 0 10px;
        list-style: none;

        > li {
            margin: 0;
            padding: 0;
        }
    }
}
</style>
