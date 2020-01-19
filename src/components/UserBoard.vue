<template>
    <div class="section sectionUserBoard tableAndBoard">
         <h2>user board</h2>
         <div class="userBoard">
             <input v-for="tile in viewOfBoard" :id="getId(tile)" type="submit" v-bind:value="tile.value.toString()"
                    :class="tile.color.toString()" class="tile" v-on:click="callRummyController('l ' + getId(tile))"/>
         </div>
     </div>
</template>

<script>

    export default {
        name: "UserBoard",
        props: {
            desk: {
                sets: [],
                players: []
            }
        },
        data () {
            return {
                viewOfBoard: []
            }
        },
        created() {
            let currentPlayer= this.desk.players.find(player => player.state.toString() === "TURN");
            this.viewOfBoard = currentPlayer.board.sort(this.compareTiles)
        },
        methods: {
            callRummyController: function (param) {
                this.$socket.send(JSON.stringify({action: "callRummyController", param: param}));
            },
            compareTiles: function(a, b) {
                if(a.value > b.value) return 1;
                if(a.value < b.value) return -1;
                return 0;
            },
            getId: function (tile) {
                console.log(tile)
                let id = tile.value.toString() + tile.color.toString().charAt(0).toString() + tile.ident.toString();
                return id;
            }
        }
    };

</script>

<style lang="css">
    @import '../css/rummy.css';
</style>
