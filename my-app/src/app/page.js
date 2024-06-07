import React from "react";
import Footer from "./Components/Footer";
import Link from "next/link";


const page = () => {
  return (
    <>
     <div className="justify-center text-center flex font-bold text-3xl py-6">HeadLess Blog</div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mx-[200px] sm:grid-cols-1  ">
        <div className="h-auto rounded-xl bg-gray-200 lg:col-span-5  sm:grid-cols-1  ">
     

<Link href="/">

<article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm sm:grid-cols-1">
  <img
    alt=""
    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    className="h- w-full object-cover"
    width={100} height={100}
  />

  <div className="p-4 sm:p-6">
    <Link href="#">
      <h3 className="text-lg font-medium text-gray-900">
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
      Find out more

      <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        
      </span>
    </Link>
  </div>
</article>
</Link>
        </div>
        <div className="h-auto rounded-xl bg-gray-200 sm:grid-cols-1">
        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm sm:grid-cols-1">
  <img
    alt=""
    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    className="h- w-full object-cover"
    width={100} height={100}
  />

  <div className="p-4 sm:p-6">
    <Link href="#">
      <h3 className="text-lg font-medium text-gray-900">
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
      Find out more

      <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        &rarr;
      </span>
    </Link>
  </div>
</article>
        </div>
        <div className="h-auto rounded-xl bg-gray-200 sm:grid-cols-1 ">
        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
  <img
    alt=""
    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    className="h- w-full object-cover"
    width={100} height={100}
  />

  <div className="p-4 sm:p-6">
    <Link href="#">
      <h3 className="text-lg font-medium text-gray-900">
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
      Find out more

      <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        &rarr;
      </span>
    </Link>
  </div>
</article>
        </div>
        <div className="h-auto rounded-xl bg-gray-200 lg:col-span-2">
        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm sm:grid-cols-1">
  <img
    alt=""
    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    className="h- w-full object-cover"
    width={100} height={100}
  />

  <div className="p-4 sm:p-6">
    <Link href="#">
      <h3 className="text-lg font-medium text-gray-900">
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
      Find out more

      <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        &rarr;
      </span>
    </Link>
  </div>
</article>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default page;
