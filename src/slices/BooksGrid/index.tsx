import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import BookProduct from "./BookProduct";
import { SlideIn } from "@/components/SlideIn";

/**
 * Props for `BooksGrid`.
 */
export type BooksGridProps = SliceComponentProps<Content.BooksGridSlice>;

/**
 * Component for "BooksGrid" Slices.
 */
const BooksGrid = ({ slice }: BooksGridProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-zinc-50"
    >
      <SlideIn>
        <Heading className="text-center ~mb-4/6" as="h2">
          <PrismicText field={slice.primary.heading} />
        </Heading>
      </SlideIn>
      <SlideIn>
        <div className="text-center ~mb-6/10">
          <PrismicRichText field={slice.primary.body} />
        </div>
      </SlideIn>
      <SlideIn>
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {slice.primary.books.map(({ book }) => (
            isFilled.contentRelationship(book) && (
              <BookProduct key={book.id} id={book.id} />
            )
          ))}
        </div>
      </SlideIn>
    </Bounded>
  );
};

export default BooksGrid;
