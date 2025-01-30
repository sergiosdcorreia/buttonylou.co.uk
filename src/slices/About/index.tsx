import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About = ({ slice }: AboutProps): JSX.Element => {
  return (
    <div className="min-h-dvh pt-32 bg-blue-200">
      <Bounded
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <Heading className="text-center mb-10">
          <PrismicText field={slice.primary.heading} />
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">
          <div className="w-96 h-auto">
            <PrismicNextImage field={slice.primary.author_image} alt="" />
          </div>
          <div>
            <PrismicRichText
              field={slice.primary.author_description}
            />
          </div>
        </div>
      </Bounded>
    </div>
  );
};

export default About;
