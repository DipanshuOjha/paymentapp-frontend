import { useNavigate, useSearchParams } from "react-router-dom"
import axios from "axios";
import { useState } from "react";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
export function Send(){
       const [searchParams] = useSearchParams();
       const id = searchParams.get('id')
       const name = searchParams.get('name')
       const [amount,setAmount] = useState(0);
       const navigate = useNavigate();

       return <div className="bg-slate-300 flex justify-center h-screen">
       <div className="flex flex-col justify-center">
           <div className="bg-white w-96 rounded-lg text-center p-5 h-max px-8 shadow-lg">
                      <div className="text-3xl text-black font-bold p-5 pb-12">
                           Send Money
                      </div>
                      <div className="flex">
                        <div className="rounded-full h-12 w-12 flex bg-green-500 justify-center text-white mt-1 mr-1">
                            <div className="font-bold flex flex-col justify-center text-2xl pb-1">
                                 {name[0].toUpperCase()}
                            </div>
                        </div>
                        <div className="font-bold flex flex-col justify-center h-full text-2xl p-3">
                              {name}
                        </div>
                      </div>
                      <div className="text-left font-semibold">
                         Amount (in Rs)
                      </div>
                      <div className="text-left py-2">
                        <input type="number" id="amount" onChange={(e)=>{
                             setAmount(e.target.value)
                        }} placeholder="Enter Amount" className="border px-5 border-slate-200 rounded-md w-80 p-2 " />
                      </div>
                      <div className="py-2">
                      <button  onClick={async()=>{
                            try {
                              const response = await axios.post(
                                `${BACKEND_URL}/api/v1/account/transfer`,
                                {
                                  to: id,
                                  amount: amount
                                },
                                {
                                  headers: {
                                    Authorization: `Bearer ${localStorage.getItem('token')}`
                                  }
                                }
                              );
                        
                              alert(`✅ Success:\n${JSON.stringify(response.data, null, 2)}`);
                              
                        
                            } catch (error) {
                              alert(`❌ Error:\n${error.response?.data?.msg || error.message}`);
                            }
                            navigate('/dashboard');
                      }} type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-80">Initiate Transfer</button>
                      </div>

            </div> 
        </div>   
       </div>
}