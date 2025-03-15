export function getPageColorSchemeProps(scheme: "red" | "green") {
  async function getServerSideProps() {
    return {
      props: {
        scheme: scheme === "red" ? "color-scheme-red" : "color-scheme-green",
      },
    };
  }
  return getServerSideProps;
}
