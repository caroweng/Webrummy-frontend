<template>
    <div class="container authCard">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Sign up</div>
                    <div class="card-body">
                        <div v-if="error.success === false" class="alert alert-danger">{{error.message}}</div>
                        <div v-else-if="error.success === true" class="alert alert-success">{{error.message}}</div>
                        <form action="#" @submit.prevent="submit">
                            <div class="form-group row">
                                <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>
                                <div class="col-md-6">
                                    <input
                                            id="name"
                                            class="form-control"
                                            name="name"
                                            value
                                            required
                                            autofocus
                                            v-model="form.name"
                                    />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>
                                <div class="col-md-6">
                                    <input
                                            id="email"
                                            class="form-control"
                                            name="email"
                                            value
                                            required
                                            autofocus
                                            v-model="form.email"
                                    />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                                <div class="col-md-6">
                                    <input
                                            id="password"
                                            class="form-control"
                                            name="password"
                                            required
                                            v-model="form.password"
                                    />
                                    <!--type="password"-->
                                </div>
                            </div>
                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-8">
<!--                                    <div class="centeredButton" v-if="error.success">-->
                                        <router-link to="/" v-if="error.success">
                                            <button type="button" class="btn button">
                                                Continue
                                            </button>
                                        </router-link>
<!--                                    </div>-->
                                    <button type="submit" class="btn button" v-else >Sign up</button>

<!--                                    <button type="submit" class="btn btn-primary">Register</button>-->
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import firebase from "firebase";
    import { mapGetters } from "vuex";

    export default {
        data() {
            return {
                form: {
                    name: "",
                    email: "",
                    password: ""
                },
                error: {
                    success: null,
                    message: null
                }
            };
        },
        methods: {
            submit() {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(this.form.email, this.form.password)
                    .then(data => {
                        data.user
                            .updateProfile({
                                displayName: this.form.name
                            })
                            .then(() => {
                            });
                        this.error.success = true;
                        this.error.message = "Account created"
                    })
                    .catch(err => {
                        window.console.log(err);
                        this.error.success = false;
                        this.error.message = err.message;
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