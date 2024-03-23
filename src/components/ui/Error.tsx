import { ComponentProps } from "react"

type Props = {
    info?: string;
    reroute?: {
        title: string;
        path: string;
    };
} & ComponentProps<"div">;

const Error = ({ info, reroute, ...props }: Props) => {
    return (
        <div {...props} className="w-full h-[100vh] flex items-center justify-center">
            <div className="flex flex-col items-center justify-center mx-auto text-center gap-10">
                <h1 className="text-5xl uppercase font-extrabold">
                    error
                </h1>
                {
                    info && <p className="text-base font-semibold">
                        {info}
                    </p>
                }
            </div>
        </div>
    );
}

export default Error