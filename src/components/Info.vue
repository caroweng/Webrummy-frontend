<template>
</template>

<script>

    export default {
        name: "Info",
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
