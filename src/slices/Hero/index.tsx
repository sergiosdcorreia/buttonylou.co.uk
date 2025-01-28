import { Content } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="h-dvh overflow-hidden bg-hero"
    >
      <div className="absolute backdrop-blur-lg
               [ p-8 md:p-10 lg:p-10 ]
               [ bg-gradient-to-b from-white/60 to-white/30 ]
               [ border-[1px] border-solid border-white border-opacity-30 ]
               [ shadow-black/70 shadow-2xl ]
                rounded-3xl max-w-4xl top-2/3">
        <Heading size="md" className="mb-4">
          <PrismicText field={slice.primary.heading} />
        </Heading>
        <div className="text-xl">
          <PrismicRichText field={slice.primary.sub_heading} />
        </div>
      </div>

    </Bounded>
  );
};

export default Hero;
