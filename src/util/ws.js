import {Client} from '@stomp/stompjs';
import {ref} from "vue";
import {useToast} from "vue-toast-notification";

const $toast = useToast();
export const messageFromBackList = ref([])

const stompClient = new Client({
    brokerURL: 'ws://192.168.0.31:8082/events',
    onConnect: (frame) => {
        console.log('Connected: ' + frame)
        stompClient.subscribe('/topic/messageFromBack', message => {
            console.log(`Received message: ${message}`)
            $toast.success("Received message from backend")
            saveMessage(message.body)
        });
    },
    onWebSocketError: (error) => {
        console.error('Error with websocket', error)
    },
    onStompError: (frame) => {
        console.error('Broker reported error: ' + frame.headers['message'])
        console.error('Additional details: ' + frame.body)
    }
})

export function connect() {
    stompClient.activate()
}

export function sendMessage(message) {
    console.log(`Send message: ` + message)
    stompClient.publish({
        destination: "/app/messageFromFront",
        body: JSON.stringify(message)
    });
}

export function saveMessage(message) {
    messageFromBackList.value.push(message)
}