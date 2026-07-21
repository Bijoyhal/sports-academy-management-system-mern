import React, { useState } from 'react'
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useContext } from 'react';
import { formAuth } from '../context/formContext';
// import { DateField } from '@mui/x-date-pickers/DateField';

const Step4 = () => {
    const {steps, setSteps} = useContext(formAuth);
    const {form, setForm , handleForm} = useContext(formAuth)
    return (
        <div className='flex flex-col gap-3 w-[80%] lg:w-[35%]'>
            <TextField id="outlined-basic" name='club_name' value={form.club_name}  label="Club Name" variant="outlined" onChange={handleForm} />
            <TextField id="outlined-basic" name='club_state' value={form.club_state} label="State" variant="outlined" onChange={handleForm} />
            <TextField id="outlined-basic" name='club_district' value={form.club_district}  label="District" variant="outlined" onChange={handleForm} />
            <div className='flex justify-between items-center'>
                <Button variant="contained" onClick={() => setSteps(3)}>Prev</Button>
                <Button variant="contained" onClick={() => setSteps(5)}>Next</Button>
            </div>
        </div>
    )
}

export default Step4
