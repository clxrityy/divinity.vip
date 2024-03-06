import { ComponentProps } from "react"

type Props = {
    children: React.ReactNode;
    solid?: boolean;
} & ComponentProps<"button">

const Button = ({ children, solid, ...props }: Props) => {
    return <button {...props} className={`w-3/5 px-6 py-4 ${solid ? "bg-sky-800/75 text-white/75" : "border border-sky-800/75"} rounded-md hover:scale-95 transition-all shadow-md focus:outline-none focus:ring focus:ring-sky-600 ring-offset-2 font-semibold`}>
        {children}
    </button>
}

export default Button