import { ref, onMounted, onUnmounted, watch, computed, readonly } from "vue";
import { useRoute, useRouter } from "vue-router";
import { GAS_DETECTION_INSTRUMENTS } from "@/data/gasDetectionInstruments";
import type { InstrumentData } from "@/data/gasDetectionInstruments";

export function useInstrument() {
  const route = useRoute();
  const router = useRouter();

  // Strongly typed params
  const categoryId = computed(() => String(route.params.category));
  const instrumentId = computed(() => String(route.params.instrumentKey));

  const instrument = ref<InstrumentData | null>(null);
  const loading = ref(true);
  const error = ref<string | null>(null);

  let redirectTimer: ReturnType<typeof setTimeout> | null = null;
  function clearRedirect() {
    if (redirectTimer !== null) {
      clearTimeout(redirectTimer);
      redirectTimer = null;
    }
  }

  async function loadInstrument() {
    clearRedirect();
    loading.value = true;
    error.value = null;
    instrument.value = null;

    const cat = categoryId.value;
    const key = instrumentId.value;

    if (!cat || !key) {
      error.value = "Category and instrument key are required.";
      loading.value = false;
      return;
    }

    // Lookup
    let found = false;
    for (const section of GAS_DETECTION_INSTRUMENTS) {
      const group = section.instruments[cat];
      if (group && group[key]) {
        instrument.value = group[key];
        found = true;
        break;
      }
    }

    if (!found) {
      error.value = `No instrument found for ${cat}/${key}. Redirecting…`;
      // wait 3s then send back
      redirectTimer = setTimeout(() => {
        router.replace({ name: "Gas Detection Instruments" });
      }, 3000);
    }

    loading.value = false;
  }

  onMounted(loadInstrument);
  watch([categoryId, instrumentId], loadInstrument);
  onUnmounted(clearRedirect);

  return {
    instrument: readonly(instrument),
    loading: readonly(loading),
    error: readonly(error),
    reload: loadInstrument,
    hasInstrument: computed(() => instrument.value !== null),
    instrumentTitle: computed(() => instrument.value?.title ?? "Unknown"),
    instrumentFeatures: computed(() => instrument.value?.features ?? []),
    instrumentOverview: computed(() => instrument.value?.overview ?? []),
    cancelRedirect: clearRedirect,
  };
}
