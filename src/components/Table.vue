<template>
    <div class="section tableAndBoard">
        <h2>table</h2>
        <div class="table">
            <div class="tiles" v-for="sortedSet in this.desk.sets">
                <div v-for="tile in sortedSet.struct">
                    <input type="submit" :value="tile.value.toString()"  :class="tile.color.toString()"
                           class="tile"
                        v-on:click="callRummyController('m ' + getId(tile))" :id="getId(tile)"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Table",
        props: {
            desk: {
                sets: [],
                players: []
            }
        },
        methods: {
            callRummyController: function (param) {
                this.$socket.send(JSON.stringify({action: "callRummyController", param: param}));
            },
            getId: function (tile) {
                let id = tile.value.toString() + tile.color.toString().charAt(0).toString() + tile.ident.toString();
                return id;
            }
        },
    };

</script>

<style lang="css">
    @import '../css/rummy.css';
</style>
