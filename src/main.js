import Vue from 'vue'
import "bootstrap"
import "./css/rummy.css"
import VueRouter from 'vue-router';
import VueNativeSock from 'vue-native-websocket'
import "bootstrap/dist/css/bootstrap.min.css"
import App from './App.vue'
import StartMenu from "@/components/StartMenu";

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(VueRouter);
Vue.use(VueNativeSock, 'ws://localhost:9000/socket', {
  reconnection: true, // (Boolean) whether to reconnect automatically (false)
  reconnectionAttempts: 20, // (Number) number of reconnection attempts before giving up (Infinity),
  reconnectionDelay: 1000, // (Number) how long to initially wait before attempting a new (1000)
});

const routes = [
  // {path: '/', component: Game },
  {path: '/rummy', component: StartMenu },
  // {path: '/rules', component: Rules }
];

const router = new VueRouter({
  routes: routes
});


new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
