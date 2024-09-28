import React, { useRef, useState } from "react";
import { CiMenuFries, CiSearch } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { MdDone } from "react-icons/md";
import { CiMicrochip } from "react-icons/ci";
import admin from "../assets/admin.jpg";
import upload from "../assets/upload.jpg";
import report from "../report";

const Student = () => {
  const [image, setImage] = useState(upload);
  const fileInputRef = useRef(null);
  

  const handleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(URL.createObjectURL(file));
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };
  return (
    <div className=" bg-gray-400 pt-5">
      <div className="flex space-y-4 md:space-y-0 items-center md:justify-between flex-col  md:flex-row bg-white rounded-xl mx-5 md:px-6 ">
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
            <img src={admin} alt="" width={25} />
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
        <h1 className="font-medium">Students Data</h1>
        <div className="flex gap-5">
          <h1>Home</h1>
          <h1 className="font-light">Students Data</h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row pt-5 mx-5">
        <div className="bg-white md:w-[40%]   px-4 py-6 rounded-xl">
          <form action="">
            <div className="flex justify-center items-center flex-col gap-1 ">
              <img
                src={image}
                width={90}
                alt="Selected"
                onClick={triggerFileInput}
                className="cursor-pointer rounded-xl border-2"
              />
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleImage}
              />
              <h1 className="font-semibold text-lg">Name</h1>
              <button className="text-blue-500 text-sm bg-blue-100 rounded-full px-2">
                Student
              </button>
            </div>
            <div className="flex justify-around pt-7">
              <div className="flex items-center space-x-2">
                <MdDone className=" text-green-500 bg-green-100 rounded-full w-8 h-8" />
                <div>
                  <h1>1.23K</h1>
                  <p>Tasks Done</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <CiMicrochip className=" text-green-500 bg-green-100 rounded-full w-8 h-8" />
                <div>
                  <h1>568</h1>
                  <p>Projects Done</p>
                </div>
              </div>
            </div>
            <div className="space-y-2 pt-5 pl-5">
              <h1>Details</h1>
              <hr />
              <div className="space-y-2 flex flex-col">
                <div className="space-x-2">
                  <label htmlFor="">Name:</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="font-light outline-none"
                    required
                  />
                </div>
                <div className="space-x-2">
                  <label htmlFor="">Class:</label>
                  <select name="" id="" className="font-light outline-none">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                    <option value="">6</option>
                    <option value="">7</option>
                    <option value="">8</option>
                    <option value="">9</option>
                    <option value="">10</option>
                    <option value="">11</option>
                    <option value="">12</option>
                  </select>
                </div>
                <div className="space-x-2">
                  <label htmlFor="">Section:</label>

                  <select name="" id="" className="font-light">
                    <option value="">A</option>
                    <option value=""></option>
                    <option value="">B</option>
                    <option value="">C</option>
                    <option value="">D</option>
                  </select>
                </div>
                <div className="space-x-2">
                  <label htmlFor="">Date Of Birth:</label>
                  <input
                    type="date"
                    name=""
                    id=""
                    className="font-light"
                    required
                  />
                </div>
                <div className="space-x-2">
                  <label htmlFor="">Parents:</label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    className="font-light"
                    required
                  />
                </div>
                <div className="space-x-2">
                  <label htmlFor="">Phone:</label>
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    className="font-light"
                    placeholder="123-456-7890"
                    required
                  />
                </div>
                <div className="space-x-2">
                  <label htmlFor="">Email:</label>
                  <input
                    type="email"
                    placeholder="enter your email"
                    className="font-light"
                  />
                </div>
              </div>
              <div className="flex justify-center gap-6 pt-5">
                <button className="bg-blue-500 rounded-full p-1 px-11">
                  Edit
                </button>
                <button className="bg-red-400 rounded-full p-1 px-11">
                  Delete
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="pl-5 w-full">
          <div className="space-x-7">
            <button className="hover:bg-blue-500 font-medium hover:rounded-full p-1 hover:text-white">
              Progress Report
            </button>
            <button className="hover:bg-blue-500 font-medium hover:rounded-full p-1 px-3 hover:text-white">
              Fees
            </button>
          </div>

          <div className="bg-white rounded-lg px-5 space-y-2 pt-3 mt-3">
            <h1 className="font-semibold text-xl">Progress Report</h1>
            <hr />
            <div className="grid grid-cols-5 gap-1  border-gray-300">
              <div className=" font-bold p-2 border-b border-gray-300">
                Code
              </div>
              <div className=" font-bold p-2 border-b border-gray-300">
                SubjectName
              </div>
              <div className=" font-bold p-2 border-b border-gray-300">
                Marks
              </div>
              <div className="font-bold p-2 border-b border-gray-300">
                Grade
              </div>
              <div className="font-bold p-2 border-b border-gray-300">
                Remarks
              </div>
              {report.map((data) => (
                <>
                  <div className="p-2 border-b border-gray-300">
                   {data.code}
                  </div>
                  <div className="p-2 border-b border-gray-300">
                    {data.subject}
                  </div>
                  <div className="p-2 border-b border-gray-300">
                   {data.marks}%
                  </div>
                  <div className="p-2 border-b border-gray-300">
                    {data.grade}
                  </div>
                  <div className="p-2 border-b border-gray-300">
                    {data.remarks}
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
