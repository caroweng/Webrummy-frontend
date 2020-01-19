<template>
    <div class="insertingNames section">
         <h1>Insert Names</h1>
         <br/>
         <div class="insertingNamesInputs">
             <input type="text" id="nameInput" class="form-control" placeholder="Name"/>
             <input type="submit" value="confirm" id="submitName" class="btn btn-light" v-on:click="setNames"/>
         </div>
         <br/>
         <br/>
         <div class="buttonBar">
             <input type="submit" value="Undo" class="btn btn-light button" v-on:click="callRummyController('z')"/>
             <input type="submit" value="Redo" class="btn btn-light button" v-on:click="callRummyController('r')"/>
             <input type="submit" value="Start game" id="startGame" class="btn btn-light button" v-on:click="startGame"/>
         </div>
        <br v-if="!enoughPlayers"/>
        <div v-if="!enoughPlayers" class="alert alert-danger alert-dismissible fade show" role="alert">
            Not enough players!
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <br/>
        <p v-if="desk.players.length >= 1">Added Players:</p>
        <div v-for="player in desk.players">
           <p class="alreadyAddedPlayers" v-text="player.name"></p>
        </div>
     </div>
</template>

<script>

    export default {
        name: "NameInsertion",
        props: {
          desk:  {
              sets: [],
              players: []
          },
        },
        data () {
            return {
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
        }
    };

</script>

<style lang="css">
    @import '../css/rummy.css';
    #notEnoughPlayerAlert {
        display: inline !important;

    }
</style>
