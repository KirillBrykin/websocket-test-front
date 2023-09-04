import { createApp } from 'vue'
import App from './App.vue'
import {connect} from "@/util/ws";

import ToastPlugin from "vue-toast-notification";
import 'vue-toast-notification/dist/theme-bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

//WebSocket
connect()

createApp(App)
    .use(ToastPlugin)
    .mount('#app')