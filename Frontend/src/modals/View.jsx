import React, { useContext } from "react";
import { formAuth } from "../context/formContext";
import { RxCross2 } from "react-icons/rx";

const View = () => {
    const { setView, players, setPlayers } = useContext(formAuth);

    return (
        <div className="fixed inset-0 bg-black/50 py-[30px] md:py-[50px] overflow-y-auto">
            <div className="bg-white w-[90%] md:w-[60%] mx-auto p-[10px] md:p-[30px]">
                <div
                    className="flex justify-end items-center mb-5 cursor-pointer"
                    onClick={() => setView(false)}
                >
                    <RxCross2 />
                </div>
                <div className=' border-l-4 border-red-600 px-6 mb-5 '>
                    <h1 className='text-2xl  md:text-3xl font-bold text-black/60'>Application Form</h1>
                </div>
                <div className="border rounded border-black/20 px-[10px] py-[20px]">
                    <div className="flex justify-between mb-3">
                        <span className="text-gray-500  italic">Name:</span>
                        <span className="text-gray-600">{players.name}</span>
                    </div>
                    <div className="flex justify-between mb-3">
                        <span className="text-gray-500  italic">Date of Birth:</span>
                        <span className="text-gray-600">{players.dob}</span>
                    </div>
                    <div className="flex justify-between mb-3">
                        <span className="text-gray-500  italic">Age:</span>
                        <span className="text-gray-600">{players.age}</span>
                    </div>
                    <div className="flex justify-between mb-3">
                        <span className="text-gray-500  italic">Mobile Number:</span>
                        <span className="text-gray-600">{players.number}</span>
                    </div>
                    <div className="flex justify-between mb-3">
                        <span className="text-gray-500  italic">Email:</span>
                        <span className="text-gray-600">{players.email}</span>
                    </div>
                    <div className="flex justify-between mb-3">
                        <span className="text-gray-500  italic">Gender:</span>
                        <span className="text-gray-600">{players.gender}</span>
                    </div>
                    <div className="flex justify-between mb-3">
                        <span className="text-gray-500  italic">Gurdian's Name:</span>
                        <span className="text-gray-600">{players.gurdian_name}</span>
                    </div>
                    <div className="flex justify-between mb-3">
                        <span className="text-gray-500  italic">Gurdian's Number:</span>
                        <span className="text-gray-600">{players.gurdian_number}</span>
                    </div>
                    <div className="flex justify-between mb-3">
                        <span className="text-gray-500  italic">Relation:</span>
                        <span className="text-gray-600">{players.relation}</span>
                    </div>
                    <div className="flex justify-between mb-3">
                        <span className="text-gray-500  italic">Gurdian's Email:</span>
                        <span className="text-gray-600">{players.gurdian_email}</span>
                    </div>
                    <div className="flex justify-between mb-3">
                        <span className="text-gray-500  italic">Address:</span>
                        <span className="text-gray-600">{players.address}</span>
                    </div>
                    <div className="flex justify-between mb-3">
                        <span className="text-gray-500  italic">City:</span>
                        <span className="text-gray-600">{players.city}</span>
                    </div>
                    <div className="flex justify-between mb-3">
                        <span className="text-gray-500  italic">State:</span>
                        <span className="text-gray-600">{players.state}</span>
                    </div>
                    <div className="flex justify-between mb-3">
                        <span className="text-gray-500  italic">Postal/Zipcode:</span>
                        <span className="text-gray-600">{players.postal}</span>
                    </div>
                    <div className="flex justify-between mb-3">
                        <span className="text-gray-500  italic">Country:</span>
                        <span className="text-gray-600">{players.country}</span>
                    </div>
                    <div className="flex justify-between mb-3">
                        <span className="text-gray-500  italic">Club Name:</span>
                        <span className="text-gray-600">{players.club_name}</span>
                    </div>
                    <div className="flex justify-between mb-3">
                        <span className="text-gray-500  italic">Club State:</span>
                        <span className="text-gray-600">{players.club_state}</span>
                    </div>
                    <div className="flex justify-between mb-3">
                        <span className="text-gray-500  italic">Club District:</span>
                        <span className="text-gray-600">{players.club_district}</span>
                    </div>
                    <div className="flex justify-between mb-3">
                        <span className="text-gray-500  italic">Sports:</span>
                        <span className="text-gray-600">{players.sports}</span>
                    </div>
                    <div className="flex justify-between mb-3">
                        <span className="text-gray-500  italic">Catagory:</span>
                        <span className="text-gray-600">{players.catagory}</span>
                    </div>
                    <div className="flex justify-between mb-3">
                        <span className="text-gray-500  italic">Position:</span>
                        <span className="text-gray-600">{players.position}</span>
                    </div>
                    <div className="flex justify-between mb-3">
                        <span className="text-gray-500  italic">Status:</span>
                        <span className="text-gray-600">{players.status}</span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default View;
