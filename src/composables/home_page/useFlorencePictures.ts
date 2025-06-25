import { ref, onMounted, onUnmounted } from "vue";

type ImageItem = { src: string; alt: string };

export function useCarousel(
  images: ImageItem[],
  showTime = 5000,
  fadeTime = 2000
) {
  const currentIndex = ref(0);
  const nextIndex = ref<number | null>(null);
  const fading = ref(false);
  const isPaused = ref(false);
  const loadErrors = ref<Record<number, boolean>>({});
  const loaded = ref<Record<number, boolean>>({});
  let timer: number | undefined;

  function clearTimers() {
    if (timer !== undefined) {
      clearTimeout(timer);
      timer = undefined;
    }
  }

  function scheduleNext() {
    clearTimers();
    if (!isPaused.value) {
      timer = window.setTimeout(transition, showTime);
    }
  }

  function transition() {
    const idx = (currentIndex.value + 1) % images.length;
    fadeTo(idx);
  }

  function fadeTo(index: number) {
    if (index === currentIndex.value || fading.value) return;
    nextIndex.value = index;
    fading.value = true;
    clearTimers();
    timer = window.setTimeout(() => {
      currentIndex.value = index;
      nextIndex.value = null;
      fading.value = false;
      scheduleNext();
    }, fadeTime);
  }

  function goTo(index: number) {
    fadeTo(index);
  }

  function toggle() {
    isPaused.value = !isPaused.value;
    if (isPaused.value) clearTimers();
    else scheduleNext();
  }

  function onLoad(idx: number) {
    loaded.value[idx] = true;
    loadErrors.value[idx] = false;
  }

  function onError(idx: number) {
    loadErrors.value[idx] = true;
    loaded.value[idx] = false;
    console.error(`Failed to load image at index ${idx}`);
  }

  function shouldShow(idx: number) {
    return !loadErrors.value[idx];
  }

  onMounted(() => scheduleNext());
  onUnmounted(() => clearTimers());

  return {
    currentIndex,
    nextIndex,
    fading,
    isPaused,
    loadErrors,
    loaded,
    goTo,
    toggle,
    onLoad,
    onError,
    shouldShow,
  };
}
