import { FooterPhysics } from "@/components/FooterPhysics";
import { createClient } from "@/prismicio";
import { asImageSrc, Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import { ReactElement } from 'react';

/**
 * Props for `PencilsPlayground`.
 */
export type PencilsPlaygroundProps =
  SliceComponentProps<Content.PencilsPlaygroundSlice>;

/**
 * Component for "PencilsPlayground" Slices.
 */
const PencilsPlayground = async ({ slice }: PencilsPlaygroundProps): Promise<ReactElement> => {
  const client = createClient()
  const settings = await client.getSingle("settings")

  const pencilTextureURLs = settings.data.footer_pencils
  .map((item) => asImageSrc(item.pencil, {h: 600}))
  .filter((url):url is string => Boolean(url))

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className='relative h-[75vh] ~p-10/16'>
      <PrismicNextImage field={slice.primary.image_background} alt='' fill className='object-cover' width={1200} />
      <FooterPhysics pencilTextureURLs={pencilTextureURLs} className='absolute inset-0 overflow-hidden' />
      <Image
        src="/ButtonyLou_logo.jpg"
        alt='logo'
        width={100}
        height={100}
        className='relative h-20 w-20 md:h-28 md:w-28 rounded-full pointer-events-none select-none'
      />
      </div>
    </section>
  );
};

export default PencilsPlayground;
