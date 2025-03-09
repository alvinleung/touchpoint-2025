import { useEffect, useState } from "react";

const useDocumentHeight = () => {
  const [documentHeight, setDocumentHeight] = useState<number>(0);

  useEffect(() => {
    const updateDocumentHeight = () => {
      const height = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight,
      );
      setDocumentHeight(height);
    };

    // Initial measurement
    updateDocumentHeight();

    // Listen to resize events to update the height if needed
    window.addEventListener("resize", updateDocumentHeight);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateDocumentHeight);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return documentHeight;
};

export default useDocumentHeight;
