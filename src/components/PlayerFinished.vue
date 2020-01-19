<template>
    <div class="tableAndBoard section sectionUserBoard">
        <h3>Turn finished</h3>
        <br/>
        <input class="btn btn-light button" type="submit" id="nextPlayerButton" value="Next player" v-on:click="callRummyController('n')"/>
        <input class="btn btn-light button" type="submit" value="Store Game" v-on:click="storeGame()"/>
    </div>
</template>

<script>

    export default {
        name: "PlayerFinished",
        methods: {
            callRummyController: function (param) {
                this.$socket.send(JSON.stringify({action: "callRummyController", param: param}));
            },
            storeGame: function () {
                this.callRummyController('s');
                alert("Game stored!")
            }
        }
    };

</script>

<style lang="css">
    @import '../css/rummy.css';
</style>
