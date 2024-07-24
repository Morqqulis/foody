import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    // DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../../ui/dropdown-menu"
import Icon from '../../../../public/Header/profileIcon.png'
import React, { FC } from 'react'
import Image from "next/image"

const DrapDown: FC = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className={'text-black'}>
                <Image src={Icon} width={60} height={40} alt="Icon" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer border-b">Profile</DropdownMenuItem>
                <DropdownMenuItem  className="cursor-pointer border-b">Your Basket</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer  border-b">Your Orders</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer  border-b">Checkout</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default DrapDown