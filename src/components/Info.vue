<template>
    <div class="">
        <div class="alert alert-primary playerAlert" role="alert">
            {{currentPlayer.name}}, it's your turn!
        </div>
    </div>
</template>

<script>

    export default {
        name: "Info",
        props: {
            desk: {
                sets: [],
                players: []
            }
        },
        data() {
          return {
              currentPlayer: {},
          }
        },
        methods: {
            callRummyController: function (param) {
                this.$socket.send(JSON.stringify({action: "callRummyController", param: param}));
            },
        },
        created() {
            this.currentPlayer = this.desk.players.find(player => player.state.toString() === "TURN");
        },
    };

</script>

<style lang="css">
    @import '../css/rummy.css';
</style>
