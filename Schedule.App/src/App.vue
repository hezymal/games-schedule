<template>
    <div class="App">
        <div class="App-LeftBar">
            <a class="App-Logo" href="/">
                <Logo />
            </a>
            <div class="App-Nav">
                <router-link class="App-NavLink" to="/">
                    <font-awesome-icon icon="calendar-alt" title="Schedule" />
                </router-link>
                <router-link class="App-NavLink" to="/about">
                    <font-awesome-icon icon="user-alt" title="About" />
                </router-link>
            </div>
        </div>
        <div class="App-Content">
            <router-view />
        </div>
    </div>
</template>

<script lang="ts">
import "@/icons";
import Logo from "@/components/Logo.vue";

export default {
    name: "App",
    components: {
        Logo
    }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,500,700&display=swap");

* {
    box-sizing: border-box;
}

body {
    margin: 0;
    min-width: 1200px;
    background-color: #525b78;
}

.App {
    font-family: "Roboto Mono", monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    color: white;
    width: 1160px;
    margin: 20px auto;
    box-shadow: 0 0 25px rgba(#131834, 0.4);
    background-image: linear-gradient(135deg, #38416e, #131834);

    &-LeftBar {
        width: 88px;
        padding: 20px 19px 0 20px;
        border-right: 1px solid #262e4d;
    }

    &-Logo {
        display: block;
    }

    &-Nav {
        display: flex;
        margin: 35px 10px 0;
        justify-content: center;
        flex-wrap: wrap;
    }

    &-NavLink {
        display: block;
        color: white;
        text-decoration: none;
        font-size: 1.5em;
        margin: 0 0 20px;

        &.router-link-exact-active {
            color: #fb5a9e;
        }

        &:hover {
            color: #ff9ec6;
        }
    }

    &-Content {
        width: calc(100% - 88px);
        padding: 20px;
    }
}
</style>
