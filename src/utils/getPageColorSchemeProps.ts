export function getPageColorSchemeProps(scheme: "red" | "green") {
  async function getServerSideProps() {
    return {
      props: {
        bodyClass: scheme === "red" ? "color-scheme-red" : "color-scheme-green",
      },
    };
  }
  return getServerSideProps;
}
