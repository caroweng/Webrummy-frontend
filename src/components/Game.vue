<template>
    <div>
        <NavBar/>
        <Info/>
        <UserBoard/>
        <Table/>
    </div>
</template>

<script>

    import NavBar from "@/components/NavBar";
    import Info from "@/components/Info";
    import Table from "@/components/Table";
    import UserBoard from "@/components/UserBoard";
    export default {
        name: "Game",
        components: {
            NavBar,
            Info,
            UserBoard,
            Table
        },
        props: {
        },
        data () {
            return {
                desk: {
                    sets: [],
                    players: []
                }
            }
        },
        methods: {
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
</style>
