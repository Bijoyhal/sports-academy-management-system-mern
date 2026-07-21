import React, { useContext, useEffect, useState } from "react";
import {
    TextField,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@mui/material";
import { formAuth } from "../context/formContext";

const Step1 = () => {
    const { setSteps, form, handleForm, setForm } = useContext(formAuth);

    // Calculate age from DOB
    const calculateAge = (birthDate) => {
        const today = new Date();
        const dobDate = new Date(birthDate);

        let calculatedAge = today.getFullYear() - dobDate.getFullYear();

        const monthDiff = today.getMonth() - dobDate.getMonth();

        if (
            monthDiff < 0 ||
            (monthDiff === 0 && today.getDate() < dobDate.getDate())
        ) {
            calculatedAge--;
        }

        return calculatedAge;
    };

    return (
        <div className="w-[90%] md:w-[70%] lg:w-[40%] mx-auto flex flex-col gap-4">
            {/* Name */}
            <TextField
                label="Name"
                name="name"
                value={form.name}
                onChange={handleForm}
                fullWidth
            />

            {/* Date of Birth */}
            <TextField
                // label="Date of Birth"
                type="date"
                name="dob"
                value={form.dob}
                onChange={(e) => {
                    const selectedDob = e.target.value;
                    const calculatedAge = calculateAge(selectedDob);

                    setForm((prev) => ({
                        ...prev,
                        dob: selectedDob,
                        age: calculatedAge >= 0 ? calculatedAge.toString() : "0",
                    }));
                }}
                slotProps={{
                    inputLabel: { shrink: true },
                }}
                fullWidth
            />

            {/* Age */}
            <TextField
                label="Age"
                name="age"
                value={form.age}
                onChange={handleForm}
                slotProps={{
                    inputLabel: { shrink: true },
                }}
                fullWidth
            />

            {/* Email */}
            <TextField
                label="Email"
                name="email"
                value={form.email}
                onChange={handleForm}
                fullWidth
            />

            {/* Gender */}
            <FormControl fullWidth>
                <InputLabel>Gender</InputLabel>
                <Select
                    name="gender"
                    value={form.gender}
                    label="Gender"
                    onChange={handleForm}
                >
                    <MenuItem value="Male">Male</MenuItem>
                    <MenuItem value="Female">Female</MenuItem>
                    <MenuItem value="Others">Others</MenuItem>
                </Select>
            </FormControl>

            {/* Phone Number */}
            <TextField
                label="Phone Number"
                name="number"
                value={form.number}
                onChange={handleForm}
                fullWidth
            />

            {/* Next Button */}
            <Button variant="contained" onClick={() => setSteps(2)} className="!mt-2">
                Next
            </Button>
        </div>
    );
};

export default Step1;
