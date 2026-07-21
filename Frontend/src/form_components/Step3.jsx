import React from 'react'
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useContext } from 'react';
import { formAuth } from '../context/formContext';
// import { DateField } from '@mui/x-date-pickers/DateField';

const Step3 = () => {
    const {steps, setSteps} = useContext(formAuth);
    const {form, setForm , handleForm} = useContext(formAuth);
    return (
        <div className='flex flex-col gap-3 w-[80%] lg:w-[35%]'>
            <TextField id="outlined-basic" name='address' value={form.address} onChange={handleForm} label="Address" variant="outlined" />
            <TextField id="outlined-basic" name='city' value={form.city} onChange={handleForm} label="City/Town" variant="outlined" />
            <TextField id="outlined-basic" name='state' value={form.state} onChange={handleForm} label="State" variant="outlined" />
            <TextField id="outlined-basic" name='postal' value={form.postal} onChange={handleForm} label="Postal/ZIP code" variant="outlined" />
            <TextField id="outlined-basic" name='country' value={form.country} onChange={handleForm} label="Country" variant="outlined" />
            <div className='flex justify-between items-center'>
                <Button variant="contained" onClick={() => setSteps(2)}>Prev</Button>
                <Button variant="contained" onClick={() => setSteps(4)}>Next</Button>
            </div>
        </div>
    )
}

export default Step3
