import { useState } from "react";
import { useNavigate } from "react-router-dom";



const TestDBPage = () => {

    const [title, setTitle] = useState('');
    const [type, setType] = useState('Full-Time');
    const [description, setDescription] = useState('');

    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();

        // const newJob = {
        //     title, type, description
        // };

        const formElem = document.querySelector("form");
        const formData = new FormData(formElem);
        console.log(formData);


        fetch("https://script.google.com/macros/s/AKfycbzDviI21PmCX4pp7Pl55zb0LKi10zIK2W3UNaQgwOB4s-nfKAFfinUHg-8-_3TeX9MIwQ/exec",
            {
                mode: 'no-cors', //later then solve this issue
                method: "POST",
                body: formData
            });

        // addJobSubmit(newJob);
        // toast.success('Job Added');
        return navigate('/');
    }

    return (
        <section className="">
            <div className="container m-auto max-w-2xl py-24">
                <div
                    className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
                >
                    <form onSubmit={submitForm} className="form">
                        <h2 className="text-3xl text-center font-semibold mb-6">Add Job</h2>

                        <div className="mb-4">
                            <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                            >Job Type</label>
                            <select
                                id="type"
                                name="Name"
                                className="border rounded w-full py-2 px-3"
                                required
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            >
                                <option value="Full-Time">Full-Time</option>
                                <option value="Part-Time">Part-Time</option>
                                <option value="Remote">Remote</option>
                                <option value="Internship">Internship</option>
                            </select>
                        </div>

                        {/* <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2"
                            >Name</label
                            >
                            <input
                                type="text"
                                name="Name"
                                className="border rounded w-full py-2 px-3 mb-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2"
                            >Email</label
                            >
                            <input
                                type="email"
                                name="Email"
                                className="border rounded w-full py-2 px-3 mb-2"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2"
                            >Job Listing Name</label
                            >
                            <input
                                type="text"
                                name="Message"
                                className="border rounded w-full py-2 px-3 mb-2"
                            />
                        </div> */}

                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2"
                            >Job Listing Name</label
                            >
                            <input
                                type="text"
                                id="title"
                                name="Email"
                                className="border rounded w-full py-2 px-3 mb-2"
                                placeholder="eg. Beautiful Apartment In Miami"
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="description"
                                className="block text-gray-700 font-bold mb-2"
                            >Description</label
                            >
                            <textarea
                                id="description"
                                name="Message"
                                className="border rounded w-full py-2 px-3"
                                rows="4"
                                placeholder="Add any job duties, expectations, requirements, etc"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>


                        <div>
                            <button
                                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Test DB
                            </button>
                        </div>
                    </form >
                </div >
            </div >
        </section >
    )
};

export default TestDBPage;