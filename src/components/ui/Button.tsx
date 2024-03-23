import { ComponentProps } from "react"

type Props = {
    children: React.ReactNode;
    solid?: boolean;
} & ComponentProps<"button">

const Button = ({ children, solid, ...props }: Props) => {
    return <button {...props} className={`w-full px-6 py-4 ${solid ? "bg-sky-800/75 text-white/75" : "border border-sky-800/75 text-sky-800/80"} rounded-md hover:scale-95 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-sky-800/75 ring-offset-2 font-semibold text-center flex items-center justify-center disabled:cursor-not-allowed disabled:hover:scale-100`}>
        {children}
    </button>
}

export default Button;