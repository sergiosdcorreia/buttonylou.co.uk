import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";

import { Bounded } from "@/components/Bounded";

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
    >
      <div className="text-6xl">
        <PrismicRichText field={slice.primary.heading} />
      </div>
      <div className="text-3xl">
        <PrismicRichText field={slice.primary.sub_heading} />
      </div>

      <div>
        <PrismicNextImage field={slice.primary.hero_image} />
      </div>
    </Bounded>
  );
};

export default Hero;
