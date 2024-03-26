import AdminLogin from '@/components/admin/AdminAuth';
import React from 'react'

export default function AdminPage() {

    return (
        <main className='h-[100vh] w-full flex items-center justify-center'>
            <h1 className='sr-only'>
                admin
            </h1>
            <AdminLogin />
        </main>
    );
}

