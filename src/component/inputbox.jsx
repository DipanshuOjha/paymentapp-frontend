export const InputBox =  function({label,placeholder,onChange}){
       return <div className="flex flex-col text-left p-3">
              <div className="text-lg font-semibold">
                {label}
              </div>
              <div className="rounded-xl border-black">
                <input onChange={onChange} placeholder={placeholder} class=" border border-slate-200 rounded-md w-80 h-9 ps-4"/>
              </div>
            </div>  
       
}