import { LandingGraphic } from "@/components/LandingGraphic";
import { getPageColorSchemeProps } from "@/utils/getPageColorSchemeProps";

export const getServerSideProps = getPageColorSchemeProps("green");

export default function Home() {
  return (
    <div className="">
      <div className="sticky -z-10 top-0 flex justify-center items-center w-full h-screen">
        <LandingGraphic />
      </div>
      <div className="px-body py-20 relative inset-0 z-10 mix-blend-difference bg-white text-black text-big-sans-static font-bold text-justify">
        Legacy speaks to the long-lasting impact of an individual as well as the
        many. It is to celebrate and honour by taking the responsibility to
        carry forward what many have given us. This is a celebration and
        honouring of the memory of Russell Taylor, founder of Touchpoint, and
        much more.
      </div>
      <div className="mix-blend-difference bg-[#02F9FD]">
        <div className="mix-blend-exclusion text-wallet-green">
          <div className="px-body py-20 z-10  text-big-sans-static font-bold text-justify">
            Legacy speaks to the long-lasting impact of an individual as well as
            the many. It is to celebrate and honour by taking the responsibility
            to carry forward what many have given us. This is a celebration and
            honouring of the memory of Russell Taylor, founder of Touchpoint,
            and much more.
          </div>
        </div>
      </div>
    </div>
  );
}
