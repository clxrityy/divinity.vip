import AdminLogin from '@/components/admin/AdminAuth';
import React from 'react'

export default function AdminPage() {

    return (
        <main className='w-full flex items-center'>
            <h1 className='sr-only'>
                admin
            </h1>
            <AdminLogin />
        </main>
    );
}

