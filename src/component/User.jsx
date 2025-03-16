import { Button } from "./button"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";

export function User(){
       const [users,setUser] = useState([]);
       const [filter,setFilter] = useState('');
       const name = localStorage.getItem('firstName');
       
       useEffect(()=>{
           axios.get('http://localhost:3000/api/v1/user/bulk?filter='+filter).then((response)=>{
                 setUser(response.data.user)
           })
       },[filter])
       return <div className="m-8 flex flex-col">
            <div className="font-bold text-xl">Users</div>
            <div className="py-3">
                <input onChange={(e)=>{
                     setFilter(e.target.value);
                }} type="text" className="px-5 rounded-md border border-slate-100 w-full h-10" placeholder="Search user...." />
            </div>
            <div>
            {users.map(user =>  user.firstName !== name ? <Users key={user.id} user={user} /> : null)}
            </div>
       </div>
}

function Users({user}){
         const navigate = useNavigate();
         return <div className="flex justify-between">
                 <div className="flex">
                       <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-1">
                            <div className="font-bold flex flex-col justify-center text-xl pb-1">
                                 {user.firstName[0].toUpperCase()}
                            </div>
                       </div>
                       <div className="font-bold flex flex-col justify-center h-full text-xl">
                         {user.firstName} {user.lastName}
                       </div>
                 </div>
                 <div>
                    <button onClick={()=>{
                            navigate('/send?id='+user._id+"&name="+user.firstName)
                    }} class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-40">Send Money</button>
                 </div>
         </div>
}