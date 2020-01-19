<template>
    <div class="container authCard">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Info</div>
                    <div class="card-body">
                        <div v-if="user" class="alert alert-success" role="alert">Login successful!</div>
                    </div>
                    <div class="centeredButton" v-if="user">
                        <router-link to="/">
                            <button type="button" class="btn btn-light button">
                                Continue
                            </button>
                        </router-link>
                    </div>
                    <br/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import { mapGetters } from "vuex";
    export default {
        computed: {
            // map `this.user` to `this.$store.getters.user`
            ...mapGetters({
                user: "user"
            })
        }
    };
</script>