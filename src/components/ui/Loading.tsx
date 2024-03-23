import config from '@/config';
import React, { ComponentProps } from 'react'

type Props = { size?: number } & ComponentProps<"div">;

const Loading = ({size, ...props}: Props) => {
    return (
        <div {...props} className='w-full h-full flex items-center justify-center'>
            <config.icons.loading size={size ? size : 50} className='animate-spin text-sky-800' />
        </div>
    );
}

export default Loading