import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "./context";
import { useEffect } from "react";

export function useSectionInView(sectionName: string, threshold = 0.75) {
  const { setActive, timeOfLastClick } = useActiveSectionContext();
  const { ref, inView } = useInView({ threshold });

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) setActive(sectionName);
  }, [inView, setActive, timeOfLastClick, sectionName]);

  return { ref };
}
