import AdminAside from "@sections/Admin/Aside/AdminAside";
import { NextPage } from "next";
import Image from "next/image";

const offers = [
  {
    id: 9177,
    image: "/images/pizza.png", // Replace with the actual image path
    title: "Do you like Pizza at Papa's?",
    description: "Yummy thin pizza with pepperoni",
  },
  {
    id: 9187,
    image: "/images/pizza.png", // Replace with the actual image path
    title: "Do you like Pizza at Papa's?",
    description: "Yummy thin pizza with pepperoni",
  },
  {
    id: 9179,
    image: "/images/pizza.png", // Replace with the actual image path
    title: "Do you like Pizza at Papa's?",
    description: "Yummy thin pizza with pepperoni",
  },
  // Add more offers as needed
];

const OffersPage: NextPage = (): JSX.Element => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <AdminAside />
      <main className="flex-grow p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Offers</h1>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600">
            + ADD OFFER
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 rounded-lg">
            <thead>
              <tr>
                <th className="px-4 py-2 border border-gray-700">ID</th>
                <th className="px-4 py-2 border border-gray-700">Image</th>
                <th className="px-4 py-2 border border-gray-700">Title</th>
                <th className="px-4 py-2 border border-gray-700">Description</th>
                <th className="px-4 py-2 border border-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {offers.map((offer, index) => (
                <tr key={index}>
                  <td className="border border-gray-700 px-4 py-2">{offer.id}</td>
                  <td className="border border-gray-700 px-4 py-2">
                    <Image src={offer.image} width={50} height={50} alt={offer.title} />
                  </td>
                  <td className="border border-gray-700 px-4 py-2">{offer.title}</td>
                  <td className="border border-gray-700 px-4 py-2">{offer.description}</td>
                  <td className="border border-gray-700 px-4 py-2">
                    <div className="flex space-x-2">
                      <button className="text-green-500 hover:text-green-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M11 17l2-2m0 0l-2-2m2 2h8m-8 0H5m8 0V3m0 18V3"
                          />
                        </svg>
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default OffersPage;
