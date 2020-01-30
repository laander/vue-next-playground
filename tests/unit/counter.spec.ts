import useCounter from '@/counter.ts';

describe('Counter', () => {
  it('initializes the counter', () => {
    const { counter } = useCounter();
    expect(counter.value).toBe(1);
  });
  it('can increment the counter', () => {
    const { counter, incrementOrReset } = useCounter();
    incrementOrReset();
    expect(counter.value).toBe(2);
  });
  it('knows when counter is odd number', () => {
    const { isCounterOdd, incrementOrReset } = useCounter();
    incrementOrReset();
    expect(isCounterOdd.value).toBe(false);
    incrementOrReset();
    expect(isCounterOdd.value).toBe(true);
  });
});
