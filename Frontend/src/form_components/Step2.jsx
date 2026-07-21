import React from 'react'
import { useContext } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { formAuth } from '../context/formContext';
// import { DateField } from '@mui/x-date-pickers/DateField';

const Step2 = () => {
    const {setSteps , form , handleForm} =useContext(formAuth);
    return (
        <div className='flex flex-col gap-3 w-[80%] lg:w-[35%]'>
            <TextField id="outlined-basic" name='gurdian_name' onChange={handleForm} value={form.gurdian_name}  label="Gurdian's Name" variant="outlined" />

            <TextField id="outlined-basic" name='gurdian_number' onChange={handleForm} value={form.gurdian_number} label="Gurdian's Mobile Number" variant="outlined" />
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Relations</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Relations"
                    name='relation'
                    value={form.relation}
                    onChange={handleForm}
                // onChange={handleChange}
                >
                    <MenuItem value='Father'>Father</MenuItem>
                    <MenuItem value='Mother'>Mother</MenuItem>
                    <MenuItem value='Uncle'>Uncle</MenuItem>
                    <MenuItem value='Aunt'>Aunt</MenuItem>
                    <MenuItem value='Grandparents'>Grandparents</MenuItem>
                    <MenuItem value='Others'>Others</MenuItem>
                </Select>
            </FormControl>
            <TextField id="outlined-basic" name='gurdian_email' onChange={handleForm} value={form.gurdian_email} label="Email Address" variant="outlined" />
            <div className='flex justify-between items-center'>
                <Button variant="contained" onClick={() => setSteps(1)}>Prev</Button>
                <Button variant="contained" onClick={() => setSteps(3)}>Next</Button>
            </div>
        </div>
    )
}

export default Step2