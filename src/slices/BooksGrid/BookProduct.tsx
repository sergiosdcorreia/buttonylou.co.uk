import { createClient } from '@/prismicio'
import { Content, isFilled } from '@prismicio/client'
import React from 'react'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';

type Props = {
  id: string
}

export default async function BookProduct({ id }: Props) {
  const client = createClient()
  const product = await client.getByID<Content.BookDocument>(id)

  const price = isFilled.number(product.data.price) ? `£${(product.data.price / 100).toFixed(2)}` : "Price Not Available"

  return (
    <div className='bg-white rounded-2xl ~p-4/6'>
      <div className='flex items-center justify-center ~text-lg/2xl font-medium'>
        <span>{price}</span>
      </div>
      <div className='flex items-center justify-center py-4'>
        <PrismicNextImage alt='' field={product.data.image} width={150} />
      </div>
      <div className='flex flex-col justify-between items-center min-h-24 md:min-h-28 lg:min-h-36'>
        <h3 className='my-2 text-center leading-tight ~text-lg/xl '>
          {product.data.name}
        </h3>
        <div className='button-primary'>
          <PrismicNextLink field={product.data.amazon_link} />
        </div>
      </div>
    </div>
  )
}