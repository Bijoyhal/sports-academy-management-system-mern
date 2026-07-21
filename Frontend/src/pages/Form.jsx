import React from 'react'
import Step1 from '../form_components/Step1'
import Step2 from '../form_components/Step2'
import Step3 from '../form_components/Step3'
import Step4 from '../form_components/step4'
import Step5 from '../form_components/Step5'
// import Step6 from '../form_components/Steps6'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useContext } from 'react';
import { formAuth } from '../context/formContext';
import Step6 from '../form_components/Steps6'
import { userAuth } from '../context/userContext'



const Form = () => {
    const step = [
        'Personal Detail',
        'Gurdian Info',
        'Address',
        'Club/State',
        'Competition',
        "Upload"
    ];

    const showsSteps = (steps) => {
        switch (steps) {
            case 1:
                return <Step1 />
            case 2:
                return <Step2 />

            case 3:
                return <Step3 />
            case 4:
                return <Step4 />
            case 5:
                return <Step5 />
            case 6:
                return <Step6 />
            default:
                return null


        }
    }

    const { steps, setSteps} = useContext(formAuth);
    const {logout} = useContext(userAuth);

    return (
        <div className='h-[100vh] flex flex-col relative'>
            <div className='w-full px-5 md:px-[50px] py-5 flex justify-end'>
                <button onClick={logout} className='text-[16px] px-5 py-3 bg-blue-600 text-white rounded hover:bg-blue-500 transition-all  active:bg-blue-700'>Logout</button>
            </div>

            <div className='flex-1 flex flex-col justify-center items-center gap-[30px]'>
                <div className=' border-l-4 border-blue-600 px-6 '>
                    <h1 className='text-2xl md:text-3xl font-bold text-black/80'>Application Form</h1>
                </div>
                <Stepper activeStep={steps - 1} alternativeLabel className='w-[80%] lg:w-[50%] '>
                    {step.map((label) => (
                        <Step key={label}>
                            <StepLabel>
                                <span className="hidden sm:inline">
                                    {label}
                                </span>
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {showsSteps(steps)}
            </div>
            
        </div>
    )
}

export default Form
