import { createContext, useState } from "react";
import axios from 'axios';
import toast from 'react-hot-toast'
import { useNavigate } from "react-router";

export const userAuth = createContext();

export const UserProvider = ({ children }) => {

    const navigate = useNavigate();
    const [token, setToken] = useState('')

    //Register 
    const [register, setRegister] = useState({
        username: "",
        email: "",
        password: ""
    })

    const handleRegister = (e) => {
        setRegister({
            ...register,
            [e.target.name]: e.target.value
        })
    }

    const submitRegister = async (e) => {
        e.preventDefault();

        if (!register.username || !register.email || !register.password) {

            toast.error("Please fill all fields");

            return;

        }
        try {
            const res = await axios.post('https://sports-academy-management-system-mern-1.onrender.com/user/Register', register);
            setRegister({
                username: "",
                email: "",
                password: ""
            })

            toast.success(res.data.message);
            navigate('/Login')

        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "Something went wrong");
        }
    }


    //Login
    const [Login, setLogin] = useState({
        email: "",
        password: ""
    })

    const handleLogin = (e) => {
        setLogin({
            ...Login,
            [e.target.name]: e.target.value
        })
    }

    const submitLogin = async (e) => {
        e.preventDefault();

        if (!Login.email || !Login.password) {

            toast.error("Please fill all fields");

            return;
        }
        try {
            const res = await axios.post('https://sports-academy-management-system-mern-1.onrender.com/user/Login', Login);
            setLogin({
                email: "",
                password: ""
            })
            //Admin Login

            if (res.data.role === "admin") {
                localStorage.setItem("accessToken", res.data.accessToken)
                setToken(res.data.accessToken);
                localStorage.setItem("role", "admin");
                toast.success("Admin Login Successful");
                navigate("/Dashboard", {
                    replace: true,
                });
                return;
            }

            // USER LOGIN
            localStorage.setItem("role", "user");
            toast.success("OTP sent successfully");
            setOtp(true);

        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "Something went wrong");
        }
    }


    //logout

    const logout = () => {
        try {
            localStorage.removeItem("accessToken");
            localStorage.removeItem('role')
            setToken(null);
            setOtp(false);
            navigate("/Login", { replace: true });
            toast.success("Logged out successfully");

        } catch (error) {
            console.error(error);
            toast.error("Logout failed");
        }
    };

    //Otp modals
    const [otp, setOtp] = useState(false)

    const [getOtp, setGetOtp] = useState('');

    const handleOtp = (e) => {
        setGetOtp(e.target.value);
    }

    const submitOtp = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('https://sports-academy-management-system-mern-1.onrender.com/user/verify-otp', {
                otp: getOtp,
            });
            localStorage.setItem("accessToken", res.data.accessToken)
            setToken(res.data.accessToken);
            navigate('/Form', { replace: true });
            toast.success('Login Successfull');
        } catch (error) {
            console.log(error.response);
            console.log(error.response?.data);
            toast.error(error.response?.data?.message);
        }
    }





    const value = {
        register,
        setRegister,
        handleRegister,
        submitRegister,
        Login,
        setLogin,
        handleLogin,
        submitLogin,
        logout,
        token,
        otp,
        setOtp,
        handleOtp,
        getOtp,
        submitOtp
    }

    return (
        <userAuth.Provider value={value}>
            {children}
        </userAuth.Provider>
    )

}



