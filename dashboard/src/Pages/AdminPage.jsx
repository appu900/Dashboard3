import React, { useEffect, useState } from "react";
import PaymentCard from "../Components/PaymentCard";
import { useSelector } from "react-redux";
import axios from "axios";

const AdminPage = () => {
  const data = useSelector((state) => state.auth);
  console.log(data);
  const token = data[data.length - 1];
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const bodyParameters = {
    key: "value",
  };

  const [paymentdata, setpaymentData] = useState([]);

  async function getData() {
    const response = await axios.get("http://localhost:5000/home");
    console.log(response.data);
    setpaymentData(response.data);
    alert("data fetch sucessfully");
  }

  return (
    <div className="flex items-center w-full">
      {/* side navbar */}

      <div className="w-[20%] h-screen sticky top-0 bg-[#141212] px-6 py-3 text-left">
        <h1 className="text-xl mt-3 text-white">Laxmi chit fund</h1>
        <div className="flex flex-col space-y-3 mt-10">
          <p className="font-semibold bg-blue-500 py-3 pl-5 rounded-lg  text-white">
            Home
          </p>
          <p className="font-semibold  py-3 pl-5 rounded-lg  text-white">
            Home
          </p>
          <p className="font-semibold  py-3 pl-5 rounded-lg  text-white">
            Home
          </p>
          <p className="font-semibold  py-3 pl-5 rounded-lg  text-white">
            Home
          </p>
        </div>
      </div>

      {/* right side */}

      <div className="w-[80%] bg-gray-200 h-screen py-5 px-10">
        <div className="flex gap-10 cursor-pointer w-full">
          <div className="flex flex-col w-[300px] h-[200px] rounded items-center justify-center bg-slate-900 shadow-xl text-white">
            <p className="text-white text-2xl font-semibold">100</p>
            <p className="text-white text-sm">Total Customers</p>
          </div>

          <div className="flex flex-col w-[300px] h-[200px] rounded items-center justify-center bg-slate-900">
            <p className="text-white text-2xl font-semibold">100</p>
            <p className="text-white text-sm">Total Customers</p>
          </div>
          <div className="flex flex-col w-[300px] h-[200px] rounded items-center justify-center bg-slate-900">
            <p className="text-white text-2xl font-semibold">100</p>
            <p className="text-white text-sm">Total Customers</p>
          </div>

          <div className="flex flex-col w-[300px] h-[200px] rounded items-center justify-center bg-slate-900">
            <p className="text-white text-2xl font-semibold">100</p>
            <p className="text-white text-sm">Total Customers</p>
          </div>
        </div>

        {/* paymemnt dashboard */}

        <div className="w-full h-[400px] bg-white rounded-xl overflow-y-scroll shadow-2xl mt-12">
          <div className="text-right mt-5 mr-7">
            <button
              onClick={getData}
              className="bg-blue-600 px-2 py-2 rounded-md text-white font-semibold text-right"
            >
              fetch data
            </button>
          </div>

          <div className="mt-8">
            {paymentdata.map((item, index) => (
              <PaymentCard
                key={index}
                item={item}
                name={item.firstName}
                email={item.email}
                country={item.country}
                amount={item.paymentAmount}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
