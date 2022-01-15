import MenuItem from "../components/MenuItem"

export default function Dashboard(){
    return(
        <div className="w-48 h-screen bg-gray-600 text-white flex flex-col items-center gap-y-4 text-center relative">
            <MenuItem></MenuItem>
            <MenuItem></MenuItem>
        </div>
    )
}