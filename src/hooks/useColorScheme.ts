import { useIsomorphicLayoutEffect } from "framer-motion";

export function useColorScheme(name: "red" | "green") {
  useIsomorphicLayoutEffect(() => {
    if (name === "red") {
      document.body.classList.add("color-scheme-red");
      document.body.classList.remove("color-scheme-green");
    } else {
      document.body.classList.add("color-scheme-green");
      document.body.classList.remove("color-scheme-red");
    }
  }, [name]);
}
