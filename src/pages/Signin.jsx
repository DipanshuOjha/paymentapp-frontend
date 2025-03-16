import { useState } from "react";
import { BottomWarning } from "../component/bottomWarning";
import { Button } from "../component/button";
import { Heading } from "../component/heading";
import { InputBox } from "../component/inputbox";
import { SubHeading } from "../component/subheading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


export function Signin(){
       const [username,setUsername] = useState('')
       const [password,setPassword] = useState('')
       const navigate = useNavigate();
       localStorage.removeItem('token');
       localStorage.removeItem('firstName');
    return <div className="bg-slate-500 flex justify-center h-screen">
    <div className="flex flex-col justify-center">
        <div className="bg-white w-96 rounded-lg text-center p-2 h-max px-4">
            <Heading label={"Sign in"}></Heading>

            <SubHeading label={"Enter your credential to excess your account"}></SubHeading>
            <InputBox onChange={(e)=>{
                      setUsername(e.target.value);
            }} type="text" label={"Email"} placeholder={"MrsSharma@gmail.com"}></InputBox>
            <InputBox  onChange={(e)=>{
                      setPassword(e.target.value)
            }}type="text" label={"Password"} placeholder={"$$$$$$$$"}></InputBox>
            <div className="pt-4">
                <Button onClick={
                    async () => {
                        try {
                            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, {
                                username,
                                password,
                            });
                    
                            localStorage.setItem("token", response.data.token);
                            localStorage.setItem("firstName", response.data.firstName);
                    
                            navigate("/dashboard");
                        } catch (error) {
                            console.error("Sign-in failed:", error.response?.data?.message || error.message);
                            alert(error.response?.data?.message || "An error occurred. Please try again.");
                        }
                    }
                    } label={"Sign in"}></Button>
            </div>
            <div className="flex justify-center">
            <BottomWarning label={"Don't have an account?"} buttontext={"Sign up"} to="/signup" ></BottomWarning>
            </div>
        </div>
    </div>
</div>

}