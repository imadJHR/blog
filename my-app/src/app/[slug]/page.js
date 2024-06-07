import Link from 'next/link'
import React from 'react'

const BlogDetails = () => {
  return (
    <article className="overflow-hidden rounded-lg border  border-gray-100 bg-white shadow-sm sm:grid-cols-1">
  <div className=' flex items-center text-center justify-center'>
    <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" width={700} height={900} className='rounded-2xl'/>
  </div>

  <div className="p-4 sm:p-6">
    <Link href="#">
      <h3 className="text-lg text-center font-medium text-gray-900">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h3>
    </Link>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
      pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
      mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
      dignissimos. Molestias explicabo corporis voluptatem?
    </p>

    <Link href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
      

      <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        
      </span>
    </Link>
  </div>
</article>
  )
}

export default BlogDetails