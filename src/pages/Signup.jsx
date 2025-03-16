import { useState } from "react";
import { BottomWarning } from "../component/bottomWarning";
import { Button } from "../component/button";
import { Heading } from "../component/heading";
import { InputBox } from "../component/inputbox";
import { SubHeading } from "../component/subheading";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line no-undef
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


export function Signup(){
        const [firstName,setFirstName] = useState("");
        const [lastName,setLastName] = useState("");
        const [username,setEmail] = useState("");
        const [password,setPassword] = useState("");
        const navigate = useNavigate();
        localStorage.removeItem('token')
        localStorage.removeItem('firstName');
        return <div className="bg-slate-500 flex justify-center h-screen">
        <div className="flex flex-col justify-center">
            
            <div className="bg-white w-96 rounded-lg text-center p-2 h-max px-4">
                <Heading label={"Sign up"}></Heading>
                <SubHeading label={"Enter the following detail for signing up"}></SubHeading>
                <InputBox onChange={(e) =>{
                      setFirstName(e.target.value)
                }} type="text" label={"First Name"} placeholder={"Joe"}></InputBox>
                <InputBox onChange={(e) =>{
                      setLastName(e.target.value)
                }}  type="text" label={"Last Name"} placeholder={"Sharma"}></InputBox>
                <InputBox onChange={(e) =>{
                      setEmail(e.target.value)
                }}  type="text" label={"Email"} placeholder={"MrsSharma@gmail.com"}></InputBox>
                <InputBox  onChange={(e) =>{
                      setPassword(e.target.value)
                }} type="password" label={"Password"} placeholder={"$$$$$$$$"}></InputBox>
                <div className="pt-4">
                    <Button onClick={async ()=>{
                           const response= await axios.post(`${BACKEND_URL}/api/v1/user/signup`,{
                                  username,
                                  firstName,
                                  lastName,
                                  password
                            })
                            localStorage.setItem('token',response.data.token)
                            localStorage.setItem('firstName',response.data.firstName);
                            navigate('/dashboard')
                            }} label={"Sign up"}></Button>
                </div>
                <div className="flex justify-center">
                <BottomWarning label={"Already have an account?"} buttontext={"Sign in"} to="/signin" ></BottomWarning>
                </div>
            </div>
        </div>
    </div>
    
}