import React from "react";
import { useState } from "react";
import Button from "../btn";

function Dashboard() {
  const [formData, setformData] = useState({
    tertiary: "",
    degree: "",
    pursedDegree: "",
    status: "",
  });
  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div>
        <div className=" mx-[350px] mt-10 border-1 border rounded border-blue-400 p-5  ">
          <div className="">
            <div>
              <label className="form-label">Highest Degree of Study</label>
            </div>
            <div className="flex rounded mb-4 w-[600px] ">
              <input
                className="bg-transparent	w-[450px] pl-3  leading-[45px] "
                name="tertiary"
                placeholder="Degree of Study"
                type="text"
                value={formData.degree}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="">
            <div>
              <label className="form-label">Current Status</label>
            </div>
            <div className="flex rounded mb-4 w-[600px] ">
              <input
                placeholder="Current Status"
                className="bg-transparent	w-[450px] pl-3  leading-[45px] "
                name="status"
                type="text"
                value={formData.status}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="">
            <div>
              <label className="form-label">
                What Degree do you want to pursue
              </label>
            </div>
            <div className="flex rounded mb-4 w-[600px] ">
              <input
                placeholder="Degree to pursue"
                className="bg-transparent	w-[450px] pl-3  leading-[45px] "
                name="pursedDegree"
                type="text"
                value={formData.pursedDegree}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="">
            <div>
              <label className="form-label">Preferred country of study </label>
            </div>
            <div className="flex rounded mb-4 w-[600px] ">
              <input
                placeholder="Country"
                className="bg-transparent	w-[450px] pl-3  leading-[45px] "
                name="Country"
                type="text"
                value={formData.country}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex bg-green-100 text-sm ">
            <p className="bg-green-400 w-2 "></p>
            <p className="p-3">Only schools in United Kingdom are accessible for now</p>
          </div>
        </div>
        <div className="pt-5 text-center text-white">
          <Button text="Save" className="bg-blue-400 rounded px-[230px] py-2" />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
