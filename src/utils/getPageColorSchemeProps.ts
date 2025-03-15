export function getPageColorSchemeProps(scheme: "red" | "green" | "real-blue") {
  async function getServerSideProps() {
    return {
      props: {
        scheme:
          scheme === "real-blue"
            ? "color-scheme-real-blue"
            : scheme === "red"
            ? "color-scheme-red"
            : "color-scheme-green",
      },
    };
  }
  return getServerSideProps;
}
