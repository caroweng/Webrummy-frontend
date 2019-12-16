<template>
    <div class="section tableAndBoard">
        <h2>table</h2>
        <div class="table">
                <div class="tiles" v-for="sortedSet in this.desk.sets">
                    <input v-for="tile in sortedSet" type="submit" :value="tile.value.toString()" :class="tile.color.toString()" class="tile"
                        v-on:click="callRummyController('m ' + getId(tile))" :id="getId(tile)"
                    />
                </div>
            </div>
    </div>
</template>

<script>

    export default {
        name: "Table",
        data() {
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
            },
            getId: function (tile) {
                console.log(tile)
                return tile.value.toString() + tile.color.toString().charAt(0).toString() + tile.ident.toString();
            }
        },
        created() {
            this.$options.sockets.onmessage = (message) => {
                if (typeof message.data === "string") {
                    this.desk = JSON.parse(message.data).desk;
                }
            };
            this.$socket.send(JSON.stringify({type: 'json'}))
        }
    };

</script>

<style lang="css">
    @import '../css/rummy.css';
</style>
