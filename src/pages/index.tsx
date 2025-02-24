import { getPageColorSchemeProps } from "@/utils/getPageColorSchemeProps";

export const getServerSideProps = getPageColorSchemeProps("green");

export default function Home() {
  return (
    <div className="px-body pt-nav-height min-h-screen mt-nav-height">
      <div className="md:ml-[36%] text-big-serif flex flex-col gap-[1em] indent-[3ch]">
        <p>
          Legacy speaks to the long-lasting impact of an individual as well as
          the many.
        </p>
        <p>
          It is to celebrate and honour by taking the responsibility to carry
          forward what many have given us.
        </p>
        <p>
          This is a celebration and honouring of the memory of Russell Taylor,
          founder of Touchpoint, and much more.
        </p>
        <p>
          It is the care and responsibility to continue to thrive and support
          others as in the past.
        </p>
        <p>
          It is a chance to reflect on the legacy we are creating as designers —
          what kind of designers we want to be and to be known for. What can we
          offer to others in how we practice design?
        </p>
        <p>
          It is a chance to reflect on the legacy we are creating as designers —
          what kind of designers we want to be and to be known for. What can we
          offer to others in how we practice design?
        </p>
        <p>
          It is a chance to reflect on where design is going. Design’s ongoing
          and continuing legacy has brought wonder and also harm.
        </p>
        <p>
          The conference is an opportunity to celebrate and to reflect on the
          long-lasting impact of those at Touchpoint, new to Touchpoint, and
          design at large.
        </p>
      </div>
    </div>
  );
}
