import { HTMLAttributes, ReactNode } from "react"

interface ButtonAddProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

export const ButtonAdd = ({children}: ButtonAddProps) => {
    return(
        <button
        className="p-2 px-4 rounded-lg bg-green-500 cursor-pointer text-white duration-200 ease-in-out hover:bg-green-500/80 active:bg-green-500/60"
        >
            {children}
        </button>
    )
}