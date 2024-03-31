import React from 'react'

const PreviewCard = () => {
    return (
        <>
            {/*<!-- Component: Basic blog card --> */}
            <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200 ">
                {/*  <!-- Image --> */}
                <figure>
                    <div className="group flex justify-center items-center relative bg-red-200 cursor-pointer text-4xl">
                        <img
                            src="https://picsum.photos/id/101/800/600"
                            alt="card image"
                            className="aspect-video w-full"

                        />
                        {/* shine box */}
                        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
                    </div>

                </figure>
                {/*  <!-- Body--> */}
                <div className="p-6">
                    <header className="mb-4">
                        <h3 className="text-xl font-medium text-slate-700">
                            The easy way to go
                        </h3>
                        <p className="text-sm text-slate-400"> By George, jun 3 2023</p>
                    </header>
                    <p>
                        Experience the simple pleasures of a world with no cars, and only
                        gentle walks through palm tree forests, and fallen coconuts.
                    </p>
                </div>
            </div >
            {/*<!-- End Basic blog card --> */}
        </>
    )
}

export default PreviewCard