import React from 'react';
import Socials from '../components/Socials';
import Title from '../components/Title';
import './css/Footer.css'

const Footer = () => {
    return (
        <div id='Footer' className='w-full'>
            <div className='flex-wrap flex flex-col md:flex-row justify-between'>
                <div className='mb-10 ml-5'>
                    <Title />
                </div>
                <div className=''>
                    <Socials />
                </div>
            </div>
        </div>
    );
};

export default Footer;