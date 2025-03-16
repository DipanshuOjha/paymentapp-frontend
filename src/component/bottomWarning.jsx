import { Link } from "react-router-dom"

export function BottomWarning({label,buttontext,to}){
    return <div className="flex text-md text-black-500 text-center">
           <div>{label}</div>
           <Link className="pointer underline pl-1 cursor-pointer" to={to}>{buttontext}</Link>
          </div>
}