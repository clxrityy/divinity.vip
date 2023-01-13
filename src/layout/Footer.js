import React from 'react';
import Socials from '../components/Socials';
import Title from '../components/Title';
import './css/Footer.css';
import { GiEarthAmerica } from 'react-icons/gi';

const Footer = () => {
    return (
        <div id='Footer' className='w-full h-full'>
            <div className='grid grid-cols-2 justify-between absolute bottom-0 w-full'>
                <div className='mb-10 ml-5'>
                    <Title />
                </div>
                <div id='socials-div' className='right-0'>
                    <Socials />
                </div>
            </div>
        </div>
    );
};

export default Footer;