<template>
  <div class="creatingNewGame section">
    <h1>Welcome to Rummy</h1>
    <div class="creatingNewGameForms">
        <router-link to="/login">
            <button type="button" class="btn btn-outline-light my-2 my-lg-0 button" >
                Sign in
            </button>
        </router-link>

        <router-link to="/register">
            <button type="button" class="btn btn-outline-light my-2 my-lg-0 button">
                Sign up
            </button>
        </router-link>
    </div>
  </div>
</template>

<script>

export default {
    name: "PreMenu",
};

</script>

<style lang="css">
    @import '../css/rummy.css';
</style>
