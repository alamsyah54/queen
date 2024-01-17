import { BsTwitterX } from "react-icons/bs"
import { FaFacebookF, FaInstagram } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa6"
import { MdGroups } from "react-icons/md"
import { RiMessengerLine } from "react-icons/ri"

export const contactsButton = [
    {
        url: "https://chat.whatsapp.com/Fo93LGwQxZjHvOf38msWTD",
        icon: (
            <MdGroups className='text-dark-800 dark:text-gray-300 text-2xl lg:text-xl duration-700 m-1' />
        ),
    },
    {
        url: "https://api.whatsapp.com/send?phone=6285172010009",
        icon: (
            <FaWhatsapp className='text-dark-800 dark:text-gray-300 text-2xl lg:text-xl duration-700 m-1' />
        ),
    },
    {
        url: "https://www.facebook.com/alamsyah0054",
        icon: (
            <FaFacebookF className='text-dark-800 dark:text-gray-300 text-2xl lg:text-xl duration-700 m-1' />
        ),
    },
    {
        url: "https://www.facebook.com/messages/t/100029480103950",
        icon: (
            <RiMessengerLine className='text-dark-800 dark:text-gray-300 text-2xl lg:text-xl duration-700 m-1' />
        ),
    },
    {
        url: "https://www.instagram.com/_alamsyah.id/",
        icon: (
            <FaInstagram className='text-dark-800 dark:text-gray-300 text-2xl lg:text-xl duration-700 m-1' />
        ),
    },
    {
        url: "https://twitter.com/alamsyah0322",
        icon: (
            <BsTwitterX className='text-dark-800 dark:text-gray-300 text-xl lg:text-lg duration-700 m-1' />
        ),
    },
]
