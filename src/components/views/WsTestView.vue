<script setup>
import {sendMessage} from "@/util/ws"
import {messageFromBackList} from "@/util/ws"
import {ref} from "vue";

const wsMessage = ref('')

function sendMsg(msg) {
  sendMessage(msg)
  this.wsMessage = ''
}
</script>

<template>
  <div class="d-flex mt-4">
    <div class="input-group w-auto">
      <input
          type="text"
          class="form-control"
          placeholder="Send message to backend"
          aria-label="Send message to backend"
          aria-describedby="button-addon1"
          v-model="wsMessage"
          id="wsMessage"
      />
      <button class="btn btn-primary" type="submit" data-mdb-ripple-color="dark"
              v-on:click="sendMsg(wsMessage)">
        Button
      </button>
    </div>
  </div>

  <div class="form-group mt-5">
    <label>Received messages from backend</label>
    <select multiple class="form-control">
      <option v-for="message in messageFromBackList">{{ message }}</option>
    </select>
  </div>
</template>

<style scoped></style>