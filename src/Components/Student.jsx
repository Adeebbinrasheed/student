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
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

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

  const column1 = [
    {
      name: "Fee",
      selector: (row) => row.code,
    },
    {
      name: "Price",
      selector: (row) => row.subject,
    },
    {
      name: "Marks",
      selector: (row) => row.marks,
    },
    {
      name: "",
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
              <p className="flex">
                <span className="font-semibold">Name: </span>
                <span className="ml-2 text-gray-500">
                  {stateData.profilename}
                </span>
              </p>
              <p className="flex">
                <span className="font-semibold">Class: </span>
                <span className="ml-2 text-gray-500">{stateData.class}</span>
              </p>
              <p className="flex">
                <span className="font-semibold">Section: </span>
                <span className="ml-2 text-gray-500">{stateData.sec}</span>
              </p>
              <p className="flex">
                <span className="font-semibold">Date Of Birth: </span>
                <span className="ml-2 text-gray-500">{stateData.DOB}</span>
              </p>
              <p className="flex">
                <span className="font-semibold">Parent: </span>
                <span className="ml-2 text-gray-500">{stateData.parent}</span>
              </p>
              <p className="flex">
                <span className="font-semibold">Phone: </span>
                <span className="ml-2 text-gray-500">{stateData.phone}</span>
              </p>
              <p className="flex">
                <span className="font-semibold">Email: </span>
                <span className="ml-2 text-gray-500">{stateData.email}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="pl-5 w-full">
          <Tabs>
            <TabList className="flex gap-5">
              <Tab className="hover:bg-blue-500 font-medium hover:rounded-full p-1 hover:text-white">
                Progress Report
              </Tab>
              <Tab className="hover:bg-blue-500 font-medium hover:rounded-full p-1 px-3 hover:text-white">
                Fees
              </Tab>
            </TabList>

            <TabPanel className="mt-4">
              <div className="bg-white rounded-lg p-4">
                <DataTable columns={columns} data={report} pagination />
              </div>
            </TabPanel>
            <TabPanel>
              <div className="bg-white rounded-lg p-4">
                <DataTable columns={column1} data={report} pagination />
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Student;
