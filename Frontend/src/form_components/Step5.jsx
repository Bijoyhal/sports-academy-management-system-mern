import React from 'react'
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useContext } from 'react';
import { formAuth } from '../context/formContext';
// import { DateField } from '@mui/x-date-pickers/DateField';

const Step5 = () => {
    const {steps, setSteps} = useContext(formAuth);
    const{form, handleForm} = useContext(formAuth);
    return (
        <div className='flex flex-col gap-3 w-[80%] lg:w-[35%]'>

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sports</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={form.sports}
                    name='sports'
                    label="Sport"
                    onChange={handleForm}

                // onChange={handleChange}
                >
                    <MenuItem value='Football'>Football</MenuItem>
                    <MenuItem value='Cricket'>Cricket</MenuItem>
                    <MenuItem value='Basketball'>Basketball</MenuItem>
                    <MenuItem value='Vollyball'>Vollyball</MenuItem>
                </Select>
            </FormControl>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Catagory</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={form.catagory}
                    name='catagory'
                    label="Catagory"
                    onChange={handleForm}
                // onChange={handleChange}
                >
                    <MenuItem value='U-12'>U-12</MenuItem>
                    <MenuItem value='U-14'>U-14</MenuItem>
                    <MenuItem value='U-16'>u-16</MenuItem>
                    <MenuItem value='U-18'>U-18</MenuItem>
                    <MenuItem value='U-21'>U-21</MenuItem>
                </Select>
            </FormControl>
            <TextField id="outlined-basic" label="Role/Position" onChange={handleForm} name='position' value={form.position} variant="outlined" />
            <div className='flex justify-between items-center'>
                <Button variant="contained" onClick={() => setSteps(4)}>Prev</Button>
                <Button variant="contained" onClick={() => setSteps(6)}>Next</Button>
            </div>
        </div>
    )
}

export default Step5
