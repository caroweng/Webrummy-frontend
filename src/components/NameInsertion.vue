<template>
    <div class="insertingNames"> 
         <h1>Insert Names</h1>
         <br/>
         <div class="insertingNamesInputs">
             <input type="text" id="nameInput" class="form-control" placeholder="Name"/>
             <input type="submit" value="confirm" id="submitName" class="btn btn-light" v-on:click="setNames"/>
         </div>
         <br/>
         <br/>
         <div class="buttonBar">
             <input type="submit" value="Start game" id="startGame" class="btn btn-light button" v-on:click="startGame"/>
             <input type="submit" value="Undo" class="btn btn-light button"/>
             <input type="submit" value="Redo" class="btn btn-light button"/>
         </div>
         <br/><br/>
         <alert class="alert alert-warning" id="notEnoughPlayerAlert" role="alert" text="Not enough players" v-if="!enoughPlayers">Not enough players!</alert>
        <br/>
        <div v-for="player in desk.players">
           <p class="alreadyAddedPlayers" v-text="player.name"></p>
        </div>
     </div>
</template>

<script>

    export default {
        name: "NameInsertion",
        data () {
            return {
                desk: {
                    sets: [],
                    players: []
                },
                enoughPlayers: Boolean
            }
        },
        methods: {
            setNames: function (param) {
                this.enoughPlayers = true;
                let name = document.getElementById("nameInput").value;
                console.log("inserted name javascript " + name);
                this.$socket.send(JSON.stringify({action: "addNameOfPlayer", name: name}));
            },
            startGame: function () {
                if(this.desk.players.length < 2) {
                    this.enoughPlayers = false
                } else {
                    this.enoughPlayers = true;
                    this.callRummyController("f")
                }
            },
            callRummyController: function (param) {
                this.$socket.send(JSON.stringify({action: "callRummyController", param: param}));
            }

        },
        created() {
            this.enoughPlayers = true;
            this.$options.sockets.onmessage = (message) => {
                if (typeof message.data === "string") {
                    this.desk = JSON.parse(message.data).desk;
                }
            };
            this.$socket.send(JSON.stringify({type: 'json'}))
        },
    };

</script>

<style lang="css">
    @import '../css/rummy.css';
    #notEnoughPlayerAlert {
        display: inline !important;

    }
</style>
