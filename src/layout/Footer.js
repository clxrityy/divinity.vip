import React from 'react';
import Socials from '../components/Socials';
import Title from '../components/Title';
import './css/Footer.css';
import { GiEarthAmerica } from 'react-icons/gi';

const Footer = () => {
    return (
        <div id='Footer' className='w-full'>
            <div className='flex-wrap flex flex-col md:flex-row justify-between'>
                <div className='mb-10 ml-5'>
                    <Title />
                </div>
                <div className='flex flex-row lg:flex-col align-middle justify-center text-center'>
                    <div className='justify-center align-middle'>
                        <Socials />
                    </div>
                    <div id='clxrity' className='flex flex-row justify-center align-middle right mt-8'>
                        <GiEarthAmerica
                            style={{ height: '20px', width: '20px', color: '#ffffff' }}
                            className='mr-2 sm:mb-2 drop-shadow-md'
                            id='earth-icon'
                        />
                        <h1
                            className='font-semibold text:xs text-ash-white-light mb-5'
                        >
                            Built in partnership with <a href='https://clxrity.xyz'>clxrity</a>
                        </h1>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;