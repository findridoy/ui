import { useState } from "react"
import SubMenuItem from "./SubMenuItem"
import { Transition } from "@headlessui/react"

export default function MenuItem() {
    const [subMenuVisible, setSubMenuVisible] = useState(false)

    const handleMenuClick = () => {
        setSubMenuVisible(!subMenuVisible)
    }

    return (
        <div className="cursor-pointer w-4/5">
            <div onClick={handleMenuClick}>Dashboard</div>

        <Transition show={subMenuVisible} enter="transition-transform origin-top duration-300" enterFrom="-rotate-x-90" enterTo="rotate-x-0" leave="transition-transform origin-top duration-300" leaveFrom="rotate-x-0" leaveTo="-rotate-x-90">
        {<ul className={'flex flex-col gap-y-4 bg-gray-400 text-black py-4 items-center rounded-lg  '} >
                <li> <SubMenuItem></SubMenuItem> </li>
                <li> <SubMenuItem></SubMenuItem> </li>
                <li> <SubMenuItem></SubMenuItem> </li>
            </ul>}
        </Transition>

            
        </div>

    )
}