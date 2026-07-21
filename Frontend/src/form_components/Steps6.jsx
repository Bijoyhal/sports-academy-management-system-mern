import React from 'react'
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useContext } from 'react';
import { formAuth } from '../context/formContext';
// import { DateField } from '@mui/x-date-pickers/DateField';

const Step6 = () => {
    const { steps, setSteps ,handleForm,form, formSubmit  } = useContext(formAuth);
    return (
        <div className='flex flex-col  w-[80%] lg:w-[35%] '>

            <label htmlFor="avatar" className='text-[14px] text-black/60 italic mb-2 '>Upload your profile picture:</label>

            <input type="file" id="profile_pic" name="profile_pic"     onChange={handleForm}  className='border border-black/30  rounded py-3 px-3 text-[14px] mb-3' accept="image/png,image/jpeg,image/jpg" />

             <label htmlFor="avatar" className='text-[14px] text-black/60 italic mb-2 '>Upload your Aadhar Card here:</label>

            <input type="file" id="aadhar" name="aadhar"    accept=".pdf,image/*"  onChange={handleForm} className='border border-black/30  rounded py-3 px-3 text-[14px] mb-3' />

             <label htmlFor="avatar" className='text-[14px] text-black/60 italic mb-2 '>Upload your PAN Card here:</label>

            <input type="file" id="pan" name="pan"    accept=".pdf,image/*"  onChange={handleForm} className='border border-black/30  rounded py-3 px-3 text-[14px] mb-3' />

             <label htmlFor="avatar" className='text-[14px] text-black/60 italic mb-2 '>Upload your certifcate here:</label>

            <input type="file" id="certificate" name="certificate"     accept=".pdf,image/*" onChange={handleForm} className='border border-black/30  rounded py-3 px-3 text-[14px] mb-3' />

            <div className='flex justify-between items-center'>
                <Button variant="contained" onClick={() => setSteps(5)}>Prev</Button>
                <Button variant="contained" onClick={formSubmit}>Submit</Button>
            </div>
        </div>
    )
}

export default Step6
