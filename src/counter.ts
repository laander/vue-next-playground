import { ref, computed, watch } from 'vue';

export default () => {
  const counter = ref(1);
  const hasBeenReset = ref(false);
  const isCounterOdd = computed(() => counter.value % 2 > 0);
  const watchForReset = watch(() => {
    if (counter.value === 0) hasBeenReset.value = true;
  });
  const incrementOrReset = () => {
    if (counter.value < 10) counter.value++;
    else counter.value = 0;
  };
  const reset = () => {
    watchForReset();
    counter.value = 0;
  };
  return {
    counter,
    isCounterOdd,
    incrementOrReset,
    hasBeenReset,
    reset,
  };
};
