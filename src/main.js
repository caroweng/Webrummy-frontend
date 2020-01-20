import Vue from 'vue'
import "bootstrap"
import "./css/rummy.css"
import VueRouter from 'vue-router';
import VueNativeSock from 'vue-native-websocket'
import "bootstrap/dist/css/bootstrap.min.css"
import App from './App.vue'
import Rules from "@/components/Rules";
import StateComponent from "@/components/StateComponent";
import './registerServiceWorker'
import * as firebase from "firebase";
import Login from "@/components/authentification/Login";
import Register from "@/components/authentification/Register";
import Dashboard from "@/components/authentification/InfoModal";
import store from "./store";


Vue.config.productionTip = false;
Vue.config.devtools = true;

Vue.use(VueRouter);
Vue.use(VueNativeSock, 'ws://webrummy-server.herokuapp.com/socket', {
  reconnection: true, // (Boolean) whether to reconnect automatically (false)
  reconnectionAttempts: 20, // (Number) number of reconnection attempts before giving up (Infinity),
  reconnectionDelay: 1000, // (Number) how long to initially wait before attempting a new (1000)
});

const routes = [
  // {path: '/', component: Game },
  {path: '/', component: StateComponent },
  {path: '/rules', component: Rules },
  {path: '/login', name: 'Login', component: Login},
  {path: '/register', name: 'Register', component: Register},
  {path: '/dashboard', name: 'Dashboard', component: Dashboard}
];

const router = new VueRouter({
  routes: routes
});


new Vue({
  render: h => h(App),
  router: router,
  store
}).$mount('#app');

var firebaseConfig = {
  apiKey: "AIzaSyDGbhXb-zbHhsjz2h-6hxhkYJrPjaJr7Vg",
  authDomain: "webtech-rummy.firebaseapp.com",
  databaseURL: "https://webtech-rummy.firebaseio.com",
  projectId: "webtech-rummy",
  storageBucket: "webtech-rummy.appspot.com",
  messagingSenderId: "652916636997",
  appId: "1:652916636997:web:71b240381086c0963cd22c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(user => {
  store.dispatch("fetchUser", user);
});
