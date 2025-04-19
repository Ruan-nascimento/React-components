import { HTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface ButtonRemoveProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    className?: string
}

export const ButtonRemove = ({children, ...rest}: ButtonRemoveProps) => {
    return(
        <button
        {...rest}
        className={twMerge("p-2 px-4 rounded-lg bg-red-500 cursor-pointer text-white duration-200 ease-in-out hover:bg-red-500/80 active:bg-red-500/60", rest.className)}
        >
            {children}
        </button>
    )
}