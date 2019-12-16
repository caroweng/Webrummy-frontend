<template>
    <nav class="navbar fixed-top navbar-dark bg-dark navbar-expand-lg"> 
        <span class="navbar-text">
        RUMMY
        </span>
        <div class="collapse navbar-collapse buttonsNavBar" id="navbarSupportedContent">
            <input class="btn btn-outline-light my-2 my-lg-0" id="undo" type="submit" value="Undo" v-on:click="callRummyController('z')"/>
            <input class="btn btn-outline-light my-2 my-lg-0" id="redo" type="submit" value="Redo" v-on:click="callRummyController('r')"/>
            <input class="btn btn-outline-light my-2 my-lg-0" type="submit" value="Finish" v-on:click="callRummyController('f')"/>
        </div>
        <router-link to="/rules">
            <button type="button" class="btn btn-outline-light my-2 my-lg-0">
                 Rules
            </button>
        </router-link>
     </nav>
</template>

<script>

    export default {
        name: "NavBar",
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
