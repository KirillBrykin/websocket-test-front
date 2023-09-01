import {Client} from '@stomp/stompjs';

const stompClient = new Client({
    brokerURL: 'ws://192.168.0.31:8082/events',
    onConnect: (frame) => {
        console.log('Connected: ' + frame)
        stompClient.subscribe('/topic/events', message => {
            console.log('Received message: ' + message)
            console.log('Received message.body: ' + message.body)
            console.log(`Received test: ${message.body}`)
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