import React, { useContext, useState } from "react";
import * as XLSX from "xlsx";
import { formAuth } from "../context/formContext";
import { GrView } from "react-icons/gr";
import toast from "react-hot-toast";
import axios from "axios";




const Table = () => {
    const { getAll , getForm  ,setView ,players, setPlayers} = useContext(formAuth);

    // Handle approve button
    const handleApprove = async (id) => {
        try {
            await axios.put(
                `http://localhost:9005/api/form/updateStatus/${id}`,
                {
                    status: "Approved"
                }
            );
            toast.success("Status changed to Approved");
            getForm();
            
        } catch (error) {
            console.log("UPDATE STATUS ERROR:", error);
        }

    };

    // Handle reject button
    const handleReject =async (id) => {
        try {
            await axios.put(
                `http://localhost:9005/api/form/updateStatus/${id}`,
                {
                    status: "Rejected"
                }
            );
            toast.success("Status changed to Rejected");
            getForm();
        } catch (error) {
            console.log(error)
        }
    };


    //Export to excel function.
    const exportToExcel = () => {
        const data = getAll.map((player) => ({
            Name: player.name,
            Email: player.email,
            "Phone Number": player.number,
            "Guardian Name": player.gurdian_name,
            "Sports Position": player.position,
            "Club Name": player.club_name,
            "Status": player.status
        }));

        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();

        XLSX.utils.book_append_sheet(workbook, worksheet, "Players");

        XLSX.writeFile(workbook, "Players_List.xlsx");
    };




    return (
        <div className="w-full min-h-screen bg-white p-4 md:p-8">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="mb-8">
                    <div className="flex justify-between items-center mb-3">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2" >Players List</h1>
                        <button onClick={exportToExcel} className="bg-green-100 transition text-green-700 text-[14px] px-4 py-3 rounded hover:bg-green-300">Export to Excel</button>
                    </div>

                    <p className="text-gray-600">View and manage player registrations</p>
                </div>

                {/* Desktop Table View - Hidden on Mobile */}
                <div className="hidden md:block overflow-x-auto border border-gray-300 rounded-lg">
                    <table className="w-full bg-white">
                        {/* Table Header */}
                        <thead className="bg-gray-200 border-b border-gray-300">
                            <tr>
                                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">
                                    Name
                                </th>
                                <th className="px-6 py-4 text-center text-sm font-bold text-gray-900">
                                    Email
                                </th>
                                <th className="px-6 py-4 text-center text-sm font-bold text-gray-900">
                                    Number
                                </th>
                                <th className="px-6 py-4 text-center text-sm font-bold text-gray-900">
                                    Guardian's Name
                                </th>
                                <th className="px-6 py-4  text-sm text-center font-bold text-gray-900">
                                    Sports Position
                                </th>
                                <th className="px-6 py-4 text-center text-sm font-bold text-gray-900">
                                    Club Name
                                </th>
                                <th className="px-6 py-4 text-center text-sm font-bold text-gray-900 ">
                                    Status
                                </th>
                                <th className="px-6 py-4 text-center text-sm font-bold text-gray-900">
                                    View
                                </th>
                                <th className="px-6 py-4 text-center text-sm font-bold text-gray-900">
                                    Action
                                </th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody className="divide-y divide-gray-300">
                            {getAll.map((item, index) => (
                                <tr key={item._id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-sm text-gray-900 font-medium text-center">
                                        {item.name}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700 text-center">
                                        {item.email}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700 text-center">
                                        {item.number}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700 text-center">
                                        {item.gurdian_name}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700 text-center">
                                        {item.catagory}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700 text-center">
                                        {item.club_name}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700 text-center">
                                        {item.status}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700 text-center cursor-pointer" onClick={()=>{setPlayers(item); setView(true)}}>
                                        <GrView />
                                    </td>
                                    <td className="px-6 py-4 text-sm ">
                                        <div className="flex justify-center gap-3">
                                            {/* Approved Button with Tick */}
                                            <button
                                                onClick={() => handleApprove(item._id)}
                                                className="flex items-center justify-center w-10 h-10 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition"
                                                title="Approve"
                                            >
                                                ✓
                                            </button>

                                            {/* Rejected Button with X */}
                                            <button
                                                onClick={() => handleReject(item._id)}
                                                className="flex items-center justify-center w-10 h-10 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition"
                                                title="Reject"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Mobile Card View - Visible only on Mobile */}
                <div className="md:hidden space-y-4">
                    {getAll.map((item, index) => (
                        <div
                            key={item._id}
                            className="bg-white border border-gray-300 rounded-lg p-4"
                        >
                            {/* Name and Actions Row */}
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
                                <div className="flex gap-2">
                                    {/* Approved Button with Tick */}
                                    <button
                                        onClick={() => handleApprove(item._id)}
                                        className="flex items-center justify-center w-9 h-9 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition text-lg"
                                        title="Approve"
                                    >
                                        ✓
                                    </button>

                                    {/* Rejected Button with X */}
                                    <button
                                        onClick={() => handleReject(item._id)}
                                        className="flex items-center justify-center w-9 h-9 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition text-lg"
                                        title="Reject"
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>

                            {/* Information Fields */}
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600 font-medium">Email:</span>
                                    <span className="text-gray-900">{item.email}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 font-medium">Number:</span>
                                    <span className="text-gray-900">{item.number}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 font-medium">Guardian:</span>
                                    <span className="text-gray-900">{item.gurdian_name}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 font-medium">Position:</span>
                                    <span className="text-gray-900">{item.catagory}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 font-medium">Club:</span>
                                    <span className="text-gray-900">{item.className}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 font-medium">Status:</span>
                                    <span className="text-gray-900">{item.status}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600 font-medium">view</span>
                                    <span className="text-gray-900 cursor-pointer" onClick={()=>{setPlayers(item); setView(true)}}><GrView /></span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Total Records */}
                <div className="mt-6 text-sm text-gray-600">
                    Total: {getAll.length} players
                </div>

            </div>
        </div>
    )
}

export default Table
