<template>
    <div>
        <NavBar/>
        <Info :desk="desk"/>
        <UserBoard :desk="desk"/>
        <Table :desk="desk"/>
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
            desk: {
                sets: [],
                players: []
            }
        },
    };

</script>

<style lang="css">
    @import '../css/rummy.css';
</style>
