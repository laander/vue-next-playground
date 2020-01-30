<template>
  <div class="app">
    <h3>{{ welcomeMessage }}</h3>
    <p>
      My counter: <strong>{{ counter }}</strong>
    </p>
    <p>
      Is value odd? <strong>{{ isCounterOdd ? 'Yes' : 'No' }}</strong>
    </p>
    <p>
      Has been reset? <strong>{{ hasBeenReset ? 'Yes' : 'No' }}</strong>
    </p>
    <p>
      <button @click="incrementOrReset">Increment</button>
      <button @click="reset">Reset</button>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import useCounter from './counter';

export default defineComponent({
  name: 'App',
  setup() {
    const welcomeMessage = ref('Hello there!');
    onMounted(() => {
      console.log('Yay, lifecycle hook work too!');
    });
    return {
      ...useCounter(),
      welcomeMessage,
    };
  },
});
</script>

<style lang="scss">
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>
