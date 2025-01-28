import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, PrismicText, SliceComponentProps } from "@prismicio/react";
import { JSX } from "react";

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import BookProduct from "./BookProduct";

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
      <Heading className="text-center ~mb-4/6" as="h2">
        <PrismicText field={slice.primary.heading} />
      </Heading>
      <div className="text-center ~mb-6/10">
        <PrismicRichText field={slice.primary.body} />
      </div>
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {slice.primary.books.map(({ book }) => (
          isFilled.contentRelationship(book) && (
            <BookProduct key={book.id} id={book.id} />
          )
        ))}
      </div>
    </Bounded>
  );
};

export default BooksGrid;
