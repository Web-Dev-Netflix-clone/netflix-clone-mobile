import { AnimationState, defineAnimation } from "react-native-redash";

interface BouncingAnimationState extends AnimationState {
  lastTimestamp: number;
  direction: -1 | 1;
}

export const withBouncing = (
  velocity: number,
  lowerBound: number,
  upperBound: number
): number => {
  "worklet";
  return defineAnimation<BouncingAnimationState>(() => {
    "worklet";
    const onFrame = (state: BouncingAnimationState, now: number) => {
      const dt = now - state.lastTimestamp;
      const translation = (dt / 1000) * velocity;
      state.current += state.direction * translation;
      if (state.current > upperBound || state.current < lowerBound) {
        state.direction *= -1;
      }
      state.lastTimestamp = now;
      return false;
    };
    const onStart = (
      state: BouncingAnimationState,
      value: number,
      now: number
    ) => {
      state.current = lowerBound + Math.random() * upperBound;
      state.lastTimestamp = now;
      state.direction = 1;
    };
    return {
      onFrame,
      onStart,
    };
  });
};
