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
            getCurrentPlayer: function() {
                // console.log(this.desk)
                // let currentPlayer = this.desk.players.find(player => player.state.toString() === "TURN");
                // return currentPlayer.name;
            }
        },
        created() {
            // this.$options.sockets.onmessage = (message) => {
            //     if (typeof message.data === "string") {
            //         this.desk = JSON.parse(message.data).desk;
            console.log(this.desk)
                    this.currentPlayer = this.desk.players.find(player => player.state.toString() === "TURN");
                // }
                // console.log(this.$socket.readyState)
            // };
            // this.$socket.send(JSON.stringify({action: 'getGame'}))
        },
    };

</script>

<style lang="css">
    @import '../css/rummy.css';
</style>
