import React from 'react';
import { socailLinks } from '../constants';

const Socials = () => {
    return (
        <div className='flex flex-row pr-8 lg:pt-8 md:mb-8'>
            {socailLinks.map((social, index)=> (
                <div className='p-8 drop-shadow-md'>
                    <a id='social-icon' href={social.link}>
                        {social.icon}
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Socials;