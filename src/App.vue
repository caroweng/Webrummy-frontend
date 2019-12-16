<template>
    <div class="game">
        <StartMenu v-if="this.state === 'NEW_GAME'"></StartMenu>
        <NameInsertion v-else-if="this.state === 'INSERTING_NAMES'"/>
        <Game v-else-if="this.state === 'P_TURN'"/>
        <p v-else> hallo</p>
    </div>
</template>

<script>
    import StartMenu from "./components/StartMenu"
    import Vue from "vue"
    import NameInsertion from "@/components/NameInsertion";
    import Game from "@/components/Game";
    export default {
        name: 'App',
        components: {
            Game,
            NameInsertion,
            StartMenu
        },
        methods: {

        },
        data () {
            return {
                desk: {
                    sets: [],
                    players: []
                },
                state: {}
            }
        },
        created() {
            this.$options.sockets.onmessage = (message) => {
                if (typeof message.data === "string") {
                    this.desk = JSON.parse(message.data).desk;
                    this.state = JSON.parse(message.data).state;
                }
                console.log(this.$socket.readyState)
            };
            this.$socket.send(JSON.stringify({type: 'json'}))
        },

    }



</script>

<style scoped  lang="css"  >
    @import './css/rummy.css';
</style>