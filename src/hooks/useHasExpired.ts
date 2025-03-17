import { useMemo } from "react";

export default function useHasExpired(dateString: string) {
  const hasExpired = useMemo(
    () =>
      typeof window !== "undefined" ? false : new Date() > new Date(dateString),
    [dateString]
  );
  return hasExpired;
}
