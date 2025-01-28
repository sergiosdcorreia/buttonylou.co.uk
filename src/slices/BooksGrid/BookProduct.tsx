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
      <div className='flex items-center justify-center ~text-sm/2xl'>
        <span>{price}</span>
      </div>
      <div className='flex items-center justify-center py-4'>
        <PrismicNextImage alt='' field={product.data.image} width={150} />
      </div>
      <h3 className='my-2 text-center leading-tight ~text-lg/xl'>
        {product.data.name}
      </h3>
      <div className='flex justify-center'>
        <PrismicNextLink field={product.data.amazon_link} />
      </div>
    </div>
  )
}