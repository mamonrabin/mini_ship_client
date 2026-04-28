import React from "react";

const page = () => {
  return (
    <div>
      <div className="p-6 bg-white rounded">
        <div className="flex items-center justify-between">
        <h2 className="md:text-xl text-lg font-medium">Account Information</h2>
        <h2 className="px-6 py-2 border border-[#1B5DD5] text-[#1B5DD5] rounded font-medium">
          Save
        </h2>
      </div>

      <form className="mt-4 flex flex-col gap-2">
        <div className="flex md:flex-row flex-col gap-2">
          <input
            className="w-full px-4 py-3 border rounded outline-none"
            type="text"
            placeholder="Al Mamon"
          />
          <input
            className="w-full px-4 py-3 border rounded outline-none"
            type="text"
            placeholder="Last Name"
          />
        </div>

         <div className="flex md:flex-row flex-col gap-2">
          <input
            className="w-full px-4 py-3 border rounded outline-none"
            type="text"
            placeholder="Contact Number"
          />
          <input
            className="w-full px-4 py-3 border rounded outline-none"
            type="date"
            placeholder="Last Name"
          />
        </div>
         <div className="flex md:flex-row flex-col gap-2">
         <select className="w-full px-4 py-3 border rounded outline-none">
            <option value="male">Male</option>
            <option value="female">Fe-Male</option>
            <option value="order">Custome</option>
         </select>
        </div>
      </form>
      </div>

       <div className="p-6 bg-white rounded mt-4">
        <div className="flex items-center justify-between">
        <h2 className="md:text-xl text-lg font-medium">Account Security</h2>
        <h2 className="px-6 py-2 border border-[#1B5DD5] text-[#1B5DD5] rounded font-medium">
          Save
        </h2>
      </div>

      <form className="mt-4 flex flex-col gap-2">
        <div className="flex md:flex-row flex-col gap-2">
          <input
            className="w-full px-4 py-3 border rounded outline-none"
            type="text"
            placeholder="Enter Email"
          />
          <input
            className="w-full px-4 py-3 border rounded outline-none"
            type="text"
            placeholder="Enter Password"
          />
        </div>
      </form>
      </div>
    </div>
  );
};

export default page;
