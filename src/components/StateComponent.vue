<template>
    <div class="game" v-if="user.loggedIn">
        <StartMenu v-if="this.state === 'NEW_GAME'"></StartMenu>
        <NameInsertion v-else-if="this.state === 'INSERTING_NAMES'" :desk="desk"/>
        <Game v-else-if="this.state === 'P_TURN'" :desk="desk"/>
        <PlayerFinished v-else-if="this.state === 'P_FINISHED'"/>
    </div>
    <div class="game" v-else>
        <PreMenu></PreMenu>
    </div>
</template>

<script>
    import StartMenu from "@/components/StartMenu"
    import NameInsertion from "@/components/NameInsertion";
    import Game from "@/components/Game";
    import PlayerFinished from "@/components/PlayerFinished";
    import PreMenu from "@/components/PreMenu";
    import { mapGetters } from "vuex";

    export default {
        name: 'StateComponent',
        components: {
            PreMenu,
            Game,
            NameInsertion,
            StartMenu,
            PlayerFinished
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
            this.$socket.send(JSON.stringify({action: "getGame"}))
        },
        computed: {
            // map `this.user` to `this.$store.getters.user`
            ...mapGetters({
                user: "user"
            })
        }
    }

</script>

<style lang="css">
    @import '../css/rummy.css';
</style>
