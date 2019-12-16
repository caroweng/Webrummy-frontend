<template>
  <div class="creatingNewGame">
    <h1>Welcome to Rummy!</h1>
    <div class="creatingNewGameForms">
        <input type="submit" id="newGame" value="New Game" class="btn btn-light button" v-on:click="callRummyController('c')"/>
        <input type="submit" value="Load Game" class="btn btn-light button"/>
    </div>
  </div>
</template>

<script>

export default {
    name: "StartMenu",
    methods: {
        callRummyController: function (param) {
            this.$socket.send(JSON.stringify({action: "callRummyController", param: param}));
        }
  }
};

</script>

<style lang="css">
    @import '../css/rummy.css';
</style>
