import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { GAS_DETECTION_INSTRUMENTS } from "@/data/gasDetectionInstruments";
import type { InstrumentData } from "@/data/gasDetectionInstruments";

export function useInstrument() {
  const route = useRoute();
  const { category, instrumentKey } = route.params;
  const instrument = ref<InstrumentData | null>(null);

  onMounted(() => {
    for (const section of GAS_DETECTION_INSTRUMENTS) {
      const cat = category as string;
      const key = instrumentKey as string;
      if (section.instruments[cat]?.[key]) {
        instrument.value = section.instruments[cat][key];
        break;
      }
    }
  });

  return { instrument };
}
