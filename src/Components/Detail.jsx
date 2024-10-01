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
import Deletedata from "./functionality/Deletedata";
import EditData from "./functionality/Editdata";
import Adddata from "./functionality/AddData";
import DataTable from "react-data-table-component";

const Detail = () => {
  const columns = [
    {
      name: "Sl.No",
      selector: (row, index) => index + 1,
    },
    {
      name: "Profile",
      selector: (row) => (
        <div className="flex items-center space-x-3">
          <img
            src={row.profileimage}
            alt=""
            className="w-9 h-9 border rounded-full"
          />
          <div className="text-left min-w-[100px]">
            <h1 className="font-medium">{row.profilename}</h1>
            <p className="font-light">class: {row.class}</p>
          </div>
        </div>
      ),
    },
    {
      name: "class",
      selector: (row) => row.class,
    },
    {
      name: "sec",
      selector: (row) => row.sec,
    },
    {
      name: "parent",
      selector: (row) => row.parent,
    },
    {
      name: "DOB",
      selector: (row) => row.DOB,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
    },
    {
      name: "email",
      selector: (row) => row.email,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="flex gap-3 justify-center">
          <button
            className="text-blue-600 hover:text-blue-950"
            onClick={() => handleEdit(row)}
          >
            <CiEdit />
          </button>
          <button
            className="text-red-500 hover:text-red-900"
            onClick={() => handleDelete(row.id)}
          >
            <RiDeleteBinLine />
          </button>
          <Link to="/student" state={row}>
            <button className="text-blue-400 hover:text-lg">
              <GoEye />
            </button>
          </Link>
        </div>
      ),

      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];
  const details = [
    {
      id: 1,
      profileimage: admin,
      profilename: "Garima Singh",
      class: 5,
      sec: "B",
      parent: "Ronaldo Singh",
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
      parent: "john doe",
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
      parent: "Singh",
      DOB: "20/10/2007",
      phone: 1239988568,
      email: "r93@gmail.com",
    },
  ];

  const [data, setData] = useState(details);
  const [filter, setFilter] = useState(details);

  const [show, setShow] = useState(false);
  const [itemTodelete, setItemTodelete] = useState(null);

  const [editShow, setEditshow] = useState(false);
  const [itemToedit, setItemToedit] = useState(null);

  const [addShow, setAddShow] = useState(false);

  const handleDelete = (id) => {
    setItemTodelete(id);
    setShow(true);
  };
  const confirmDelete = () => {
    setData(data.filter((item) => item.id !== itemTodelete));
    setShow(false);
  };

  const cancelDelete = () => {
    setShow(false);
    setItemTodelete(null);
  };

  // edit
  const handleEdit = (item) => {
    setItemToedit(item);
    setEditshow(true);
  };

  const confirmEdit = (updatedItem) => {
    const imageUrl = URL.createObjectURL(updatedItem.profileImage);
    const editedItem={
      ...updatedItem,profileimage:imageUrl,

    }
    setData((data) =>
      data.map((item) => (item.id === editedItem.id ? editedItem : item))
    );
    setEditshow(false);
    setItemToedit(null);
  };

  const cancelEdit = () => {
    setEditshow(false);
    setItemToedit(null);
  };

  //adding
  const handleAdd = () => {
    setAddShow(true);
  };

  const confirmAdd = (Newdata) => {
    const imageUrl = URL.createObjectURL(Newdata.profileImage);

    const newItem = {
      ...Newdata,
      profileimage: imageUrl,
    };

    setData([...data, newItem]);
    setAddShow(false);
  };

  const cancelAdd = () => {
    setAddShow(false);
  };

  const handleChange = (e) => {
    const item = e.target.value;
    const newItem = filter.filter((items) =>
      items.profilename.toLocaleLowerCase().includes(item.toLocaleLowerCase())
    );
    setData(newItem);
  };
  return (
    <div className="bg-gray-400 min-h-screen pt-5 ">
      <div className="flex space-y-4 md:space-y-0 items-center md:justify-between flex-col  md:flex-row bg-white  rounded-xl mx-5 md:px-6 ">
        <h1>
          <CiMenuFries />
        </h1>
        <div className="flex flex-col  items-center space-y-5 md:space-y-0 md:p-2 md:space-x-6 md:flex-row ">
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
            onChange={handleChange}
            className="border  md:px-2 md:pr-14 rounded-md outline-none "
          />
          <div
            className="bg-blue-500 flex items-center space-x-2 md:p-1 rounded-2xl text-white hover:text-black"
            onClick={handleAdd}
          >
            <IoMdPersonAdd />
            <button className="">Add Student</button>
          </div>
        </div>

        <DataTable columns={columns} data={data} pagination />

        {/* deleting a data */}
        {show && (
          <Deletedata
            confirmDelete={confirmDelete}
            cancelDelete={cancelDelete}
          />
        )}

        {/* editing a data */}
        {editShow && (
          <EditData
            confirmEdit={confirmEdit}
            cancelEdit={cancelEdit}
            item={itemToedit}
          />
        )}

        {/* adding a data */}

        {addShow && <Adddata cancel={cancelAdd} confirmAdd={confirmAdd} />}
      </div>
    </div>
  );
};

export default Detail;
