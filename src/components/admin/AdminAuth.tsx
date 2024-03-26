"use client";
import React, { ComponentProps, useState } from 'react';
import Button from '../ui/Button';
import adminLogin, { adminPath } from '@/util/adminLogin';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

type Props = {} & ComponentProps<"form">;

const AdminAuth = ({ ...props }: Props) => {

    const [credentialsPass, setCredentialsPass] = useState<string>('');

    const router = useRouter();

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const credentials = formData.get('credentials') as string || credentialsPass;

        const response = adminLogin(credentials);

        console.log(response)

        if (response.success) {
            toast.success(response.message)
            router.push(`/admin/${adminPath(credentials)}`);
        } else {
            toast.error(response.message);
        }
    }
    
    const [credentialsLength, setCredentialsLength] = useState<number>(0);

    return (
        <form {...props} onSubmit={onSubmit} className='h-2/3 flex flex-col gap-10'>
            <div className='w-full flex items-center justify-center gap-5 flex-col lg:flex-row text-center'>
                <label className='text-center text-base lg:text-lg font-medium tracking-tight'>
                    credentials
                </label>
                <input type='password' className='w-full bg-slate-100 rounded-md border border-sky-700 px-1 py-2 text-sm flex' name='credentials' id='credentials' required onChange={(e) => {
                    e.preventDefault();
                    setCredentialsLength(e.target.value.length);
                    setCredentialsPass(e.target.value);
                }} />
            </div>
            <Button type='submit' disabled={credentialsLength == 0} >
                LOGIN
            </Button>
        </form>
    );
}

export default AdminAuth;