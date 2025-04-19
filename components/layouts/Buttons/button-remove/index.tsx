import { HTMLAttributes, ReactNode } from "react"

interface ButtonRemoveProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

export const ButtonRemove = ({children}: ButtonRemoveProps) => {
    return(
        <button
        className="p-2 px-4 rounded-lg bg-red-500 cursor-pointer text-white duration-200 ease-in-out hover:bg-red-500/80 active:bg-red-500/60"
        >
            {children}
        </button>
    )
}