import { useEffect, useState } from "react";
import { AppBar } from "../component/appBar";
import { Balance } from "../component/balance";
import { User } from "../component/User";
import axios from "axios";
export function Dashboard(){
       const [value,setValue] = useState(0); 
    useEffect(()=>{
           async function balance(){
           const response = await axios.get('http://localhost:3000/api/v1/account/balance',{
               headers:{
                  Authorization:`Bearer ${localStorage.getItem('token')}`
               }
           });
           setValue(response.data.balance);
           }
           balance();
    },[])

    return  <div>
            <AppBar></AppBar>
            <div className="m-8">
                 <Balance value={value}></Balance>
            </div>
            <User></User>
    </div>
} 