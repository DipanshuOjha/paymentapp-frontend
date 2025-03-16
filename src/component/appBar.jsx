import { useState } from "react"

export function AppBar(){
       const name = localStorage.getItem('firstName');

       return <div className="flex shadow flex-row justify-between p-5">
       <div className=" flex font-bold text-3xl text-black justify-center">Payments App</div>
       <div className="flex">
           <div className="flex flex-col justify-center font-semibold text-xl px-2">
               Hello {name}
           </div>
           <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center">
               <div className="flex flex-col justify-center h-full text-xl">
                 {name[0].toUpperCase()}
               </div>
           </div>
       </div>
       
   </div>
}