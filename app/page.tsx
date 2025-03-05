import React from "react";
import Table from "../components/Table";

const page = () => {
  return (
    <div className=" w-full bg-gray-800 py-8">
      <h1 className="text-center font-bold text-4xl p-8 text-white">
        Jadwal Imsakiyah Kabupaten Pemalang
      </h1>
      <div className="md:max-w-[80%] max-w-[90%] flex bg-white rounded-2xl mx-auto my-5 p-5 border-2">
        <Table />
      </div>
    </div>
  );
};

export default page;
