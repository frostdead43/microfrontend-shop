"use client";

export default function AddressForm() {
  return (
 <div className="border rounded-lg p-6 border-red-50 bg-white shadow-sm">
  <div className="flex items-center gap-2 mb-6">
    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
    </div>
    <h2 className="text-xl font-semibold text-gray-800">
      Delivery Details
    </h2>
  </div>

  <form className="flex flex-col gap-5">
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">
        Name and Surname
      </label>
      <input
        type="text"
        placeholder="Name and Surname"
        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
      />
    </div>

    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">
        Phone Number
      </label>
      <input
        type="tel"
        placeholder="5XX XXX XX XX"
        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
      />
    </div>

    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">
        Address
      </label>
      <textarea
        placeholder="Please Enter Your Full Address"
        rows="3"
        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition resize-none"
      />
    </div>

    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">
        City
      </label>
      <input
        type="text"
        placeholder="Enter your City"
        className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
      />
    </div>

    <div className="mt-2 pt-4">
      <button
        type="button"
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-lg transition duration-200"
      >
       Save
      </button>
    </div>
  </form>
</div>
  );
}
