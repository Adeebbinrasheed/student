import React, { useState } from 'react';

const EditData = ({ item, confirmEdit, cancelEdit }) => {
  const [formData, setFormData] = useState(item);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    confirmEdit(formData);
  };

  const handleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      setFormData({
        ...formData,
        profileImage: file, 
      });
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-45">
      <div className="bg-white p-4 space-y-5 w-full max-w-xl rounded-lg">
        <h1 className="font-semibold">Student Data</h1>
        <form onSubmit={handleSubmit} className="space-y-3 space-x-4">
          <input type="file" onChange={handleImage} accept='image/*' className='border p-1 rounded' />
          <input
            type="text"
            name="profilename"
            value={formData.profilename}
            onChange={handleChange}
            placeholder="Profile Name"
            className="border p-2 rounded"
          />
           <input
            type='number'
            name="class"
            value={formData.class}
            onChange={handleChange}
            placeholder="class"
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="sec"
            value={formData.sec}
            onChange={handleChange}
            placeholder="Section"
            className="border p-2 rounded capitalize"
          />
          <input
            type="text"
            name="parent"
            value={formData.parent}
            onChange={handleChange}
            placeholder="Parent Name"
            className="border p-2 rounded"
          />
          <input
            type="date"
            name="DOB"
            value={formData.DOB}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type='number'
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="border p-2 rounded"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="border p-2 rounded"
          />
          <div className="flex justify-center md:justify-end space-x-7 md:pr-5">
            <button
              type="button"
              className="bg-red-400 p-1 rounded-lg"
              onClick={cancelEdit}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="p-1 px-4 rounded-lg bg-blue-400"
            >
              Ok
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditData;
