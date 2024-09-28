import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { GoBell } from "react-icons/go";
import image from "../assets/rename.png";
import admin from "../assets/admin.jpg";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoMdPersonAdd } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { GoEye } from "react-icons/go";
import { Link } from "react-router-dom";

const Detail = () => {
  const details = [
    {
      id: 1,
      profileimage: image,
      profilename: "Garima Singh",
      class: 5,
      sec: "B",
      parents: "Ronaldo Singh",
      DOB: "20/10/2007",
      phone: 1239988568,
      email: "r93@gmail.com",
    },
    {
      id: 2,
      profileimage: image,
      profilename: "mark",
      class: 4,
      sec: "C",
      parents: "jogn doe",
      DOB: "10/12/2006",
      phone: 9152485411,
      email: "mark193@gmail.com",
    },
    {
      id: 3,
      profileimage: image,
      profilename: "walt vv",
      class: 5,
      sec: "B",
      parents: "Singh",
      DOB: "20/10/2007",
      phone: 1239988568,
      email: "r93@gmail.com",
    },
  ];

  const [data, setData] = useState(details);
  return (
    <div className="bg-gray-400 min-h-screen pt-5 ">
      <div className="flex space-y-4 md:space-y-0 items-center md:justify-between flex-col  md:flex-row bg-white  rounded-xl mx-5 md:px-6 ">
        <h1>
          <CiMenuFries />
        </h1>
        <div className="flex flex-col  items-center space-y-5 md:space-y-0 md:p-2 md:space-x-6   md:flex-row ">
          <div className=" flex items-center space-x-2 md:p-1 px-2 rounded-2xl border">
            <CiSearch className="text-xl" />
            <input
              type="text"
              placeholder="Try to searching..."
              className="rounded-full p-1 outline-none"
            />
          </div>
          <h1>
            <img src={image} alt="" width={18} />
          </h1>
          <h1>
            <IoCartOutline />
          </h1>
          <h1>
            <GoBell />
          </h1>
          <h1>
            <img
              src={admin}
              alt=""
              className="rounded-full w-11 h-11 border-2"
            />
          </h1>
          <div>
            <h1>Mike Jelson</h1>
            <h1 className="font-light">Admin</h1>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between p-3 md:p-5 bg-white mx-5 mt-5 rounded-xl">
        <h1>Students Data</h1>
        <div className="flex gap-5">
          <h1>Home</h1>
          <h1 className="font-light">Students Data</h1>
        </div>
      </div>

      <div className="bg-white mx-5 mt-5 pt-4 p-2  rounded-xl ">
        <div className="flex justify-between px-9 ">
          <input
            type="text"
            placeholder="Search Student"
            className="border  md:px-2 md:pr-14 rounded-md outline-none "
          />
          <div className="bg-blue-500 flex items-center space-x-2 md:p-1 rounded-2xl text-white hover:text-black">
            <IoMdPersonAdd />
           <Link to='/student'> <button className="">Add Student</button></Link>
          </div>
        </div>

        <div className="pt-8 overflow-x-auto  ">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="px-4">Profile</th>
                <th className="px-4">sec</th>
                <th className="px-4">Parents</th>
                <th className="px-4">D.O.B</th>
                <th className="px-4">Phone</th>
                <th className="px-4">Email</th>
                <th className="px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((data) => {
                return (
                  <tr key={data.id} className="text-center border-b">
                    <td>
                      <div className="flex items-center justify-center space-x-3">
                        <img
                          src={data.profileimage}
                          alt=""
                          className="w-9 h-9 rounded-full"
                        />
                        <div className="text-left min-w-[100px]">
                          <h1 className="font-medium">{data.profilename}</h1>
                          <p className="font-light">class:{data.class}</p>
                        </div>
                      </div>
                    </td>
                    <td>{data.sec}</td>
                    <td>{data.parents}</td>
                    <td>{data.DOB}</td>
                    <td>{data.phone}</td>
                    <td>{data.email}</td>
                    <td>
                      <div className="flex gap-3 justify-center pl-5">
                        <button className="text-blue-600">
                          <CiEdit />
                        </button>
                        <button className="text-red-500">
                          <RiDeleteBinLine />
                        </button>
                        <button className="text-blue-400">
                          <GoEye />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Detail;
