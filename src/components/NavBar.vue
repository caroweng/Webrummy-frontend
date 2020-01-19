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
        <ul class="navbar-nav ml-auto">
        <router-link to="/rules">
            <button type="button" class="btn btn-outline-light my-2 my-lg-0">
                 Rules
            </button>
        </router-link>
            <template v-if="user.loggedIn">
                <div class="nav-item userName">
<!--                    <glyph class="glyphicon glyphicon-user"></glyph>-->
                    {{user.data.displayName}}
                </div>
                <button type="submit" class="btn btn-outline-light my-2 my-lg-0" v-on:click="signOut">Sign out</button>
            </template>
            <template v-else>

                <router-link to="/login">
                    <button type="button" class="btn btn-outline-light my-2 my-lg-0">
                        Sign in
                    </button>
                </router-link>

                <router-link to="/register">
                    <button type="button" class="btn btn-outline-light my-2 my-lg-0">
                        Sign up
                    </button>
                </router-link>

            </template>
        </ul>
     </nav>
</template>

<script>
    import { mapGetters } from "vuex";
    import firebase from "firebase";


    export default {
        name: "NavBar",
        methods: {
            callRummyController: function (param) {
                this.$socket.send(JSON.stringify({action: "callRummyController", param: param}));
            },
            signOut() {
                firebase
                    .auth()
                    .signOut()
                    .then(() => {
                        this.$router.replace({
                            name: "Login"
                        });
                    });
            }

        },
        computed: {
            ...mapGetters({
// map `this.user` to `this.$store.getters.user`
                user: "user"
            })
        },
    };

</script>

<style lang="css">
    @import '../css/rummy.css';
</style>
