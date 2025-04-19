import { HTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge"

interface ButtonAddProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    className?: string
}

export const ButtonAdd = ({children, ...rest}: ButtonAddProps) => {
    return(
        <button
        {...rest}
    className={twMerge(`p-2 px-4 rounded-lg bg-green-500 cursor-pointer text-white duration-200 ease-in-out hover:bg-green-500/80 active:bg-green-500/60`, rest.className)}
        >
            {children}
        </button>
    )
}