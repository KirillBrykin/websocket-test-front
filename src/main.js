import { createApp } from 'vue'
import App from './App.vue'
import {connect} from "@/util/ws";

//WebSocket
connect()

createApp(App).mount('#app')
