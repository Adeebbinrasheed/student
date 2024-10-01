import React, { useRef, useState } from "react";
import { CiMenuFries, CiSearch } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { MdDone } from "react-icons/md";
import { CiMicrochip } from "react-icons/ci";
import admin from "../assets/admin.jpg";
import upload from "../assets/upload.jpg";
import report from "../report";
import { Link, useLocation } from "react-router-dom";
import DataTable from "react-data-table-component";

const Student = () => {
  const location = useLocation();
  const stateData = location.state;

  const columns = [
    {
      name: "Code",
      selector: (row) => row.code,
    },
    {
      name: "SubjectName",
      selector: (row) => row.subject,
    },
    {
      name: "Marks",
      selector: (row) => row.marks,
    },
    {
      name: "Grade",
      selector: (row) => row.grade,
    },
    {
      name: "Remarks",
      selector: (row) => row.remarks,
    },
  ];
  return (
    <div className=" bg-gray-400 min-h-screen pt-5">
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
          <Link to="/">
            <h1 className="hover:font-bold">Home</h1>
          </Link>
          <h1 className="hover:font-bold">Students Data</h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row pt-5 mx-5">
        <div className="bg-white md:w-[40%] h-[530px]   px-4 py-4 rounded-xl">
          <div className="flex justify-center items-center flex-col gap-1 ">
            <img
              src={stateData.profileimage}
              width={90}
              alt="profile"
              className="rounded-xl"
            />

            <h1 className="font-semibold text-lg">{stateData.profilename}</h1>
            <button className="text-blue-500 text-sm bg-blue-100 rounded-full px-2">
              Student
            </button>
          </div>
          <div className="flex justify-around pt-7 ">
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

              <div className="space-y-2">
                <p>
                  <span className="font-semibold">Name: </span>
                  {stateData.profilename}
                </p>
                <p>
                  <span className="font-semibold">Class: </span>
                  {stateData.class}
                </p>
                <p>
                  <span className="font-semibold">Section: </span>
                  {stateData.sec}
                </p>
                <p>
                  <span className="font-semibold">Date Of Birth: </span>
                  {stateData.DOB}
                </p>
                <p>
                  <span className="font-semibold">Parent: </span>
                  {stateData.parent}
                </p>
                <p>
                  <span className="font-semibold">Phone: </span>
                  {stateData.phone}
                </p>
                <p>
                  <span className="font-semibold">Email: </span>
                  {stateData.email}
                </p>
             
            </div>
          </div>
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
            {/* <div className="grid grid-cols-5 gap-1  border-gray-300">
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
            </div> */}
            <DataTable columns={columns} data={report} pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
