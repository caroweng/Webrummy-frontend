<template>
    <div class="container authCard">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Sign in</div>
                    <div class="card-body">
                        <div v-if="error.success === false" class="alert alert-danger">{{error.message}}</div>
                        <div v-else-if="error.success === true" class="alert alert-success">{{error.message}}</div>
                        <form action="#" @submit.prevent="submit">
                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                                <div class="col-md-6">
                                    <input
                                            id="email"
                                            type="email"
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
                                            type="password"
                                            class="form-control"
                                            name="password"
                                            required
                                            v-model="form.password"
                                    />
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-5">
                                    <button type="submit" class="btn button m-2" v-on:click="resetPassword()">Forgot Password</button>
                                    <button type="submit" class="btn button ">Sign in</button>
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
    export default {
        data() {
            return {
                form: {
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
                    .signInWithEmailAndPassword(this.form.email, this.form.password)
                    .then(data => {
                        this.$router.replace({name: "Dashboard"});
                        window.console.log(data);
                        this.error.success = true;
                    })
                    .catch(err => {
                        window.console.log(err);
                        this.error.success = false;
                        this.error.message = err.message;
                    });
            },
            resetPassword() {
                const mythis = this;
                firebase.auth().onAuthStateChanged(function(user) {
                    if (user) {
                        //s
                    } else {
                        firebase.auth().sendPasswordResetEmail(mythis.form.email).then(function () {
                            mythis.error.message = "Email to reset your password was sent.";
                            mythis.error.success = true;
                        }).catch(function (error) {
                            mythis.error.message = error.message;
                            mythis.error.success = false;
                        })
                    }
                });
            }
        }
    };
</script>