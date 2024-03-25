import { ComponentProps } from "react"

type Props = {
    children: React.ReactNode;
    solid?: boolean;
    btnColor?: "blue" | "grey" | "red" | "green";
} & ComponentProps<"button">

const Button = ({ children, solid, btnColor, ...props }: Props) => {
    
    let className = solid ? "bg-sky-800/75 text-white/75" : "border border-sky-800/75 text-sky-800/80";

    if (btnColor === "blue") {
        className = className;
    } else if (btnColor === "grey") {
        className = solid ? "bg-gray-700/75 text-gray-200" : "border border-gray-800/75 text-gray-800";
    } else if (btnColor === "red") {
        className = solid ? "bg-red-500/40 text-white/75" : "border border-red-500/75 text-red-500/80";
    } else if (btnColor === "green") {
        className + solid ? "bg-emerald-500/40 text-white/75" : "border border-emerald-500/75 text-emerald-600/75";
    }



    return <button {...props} className={`w-full px-6 py-4 ${className} rounded-md hover:scale-95 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-sky-800/75 ring-offset-2 font-semibold text-center flex items-center justify-center disabled:cursor-not-allowed disabled:hover:scale-100`}>
        {children}
    </button>;
}

export default Button;