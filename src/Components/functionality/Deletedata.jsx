import React from 'react'

const Deletedata = ({confirmDelete,cancelDelete}) => {  
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-45">
          <div className="bg-white p-5 space-y-5 rounded-lg ">
            <h1 className="font-semibold">
              Are you sure you want to delete this item?
            </h1>
            <div className="flex justify-center space-x-3 ">
              <button
                className="bg-red-400 p-1 rounded-lg"
                onClick={cancelDelete}
              >
                Cancel
              </button>
              <button
                className="p-1 px-4 rounded-lg bg-blue-400"
                onClick={confirmDelete}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
  )
}

export default Deletedata