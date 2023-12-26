import React from 'react';
import Link from 'next/link';
import * as Fa from 'react-icons';
import { FaInstagram,FaGithub,FaLinkedin } from 'react-icons/fa';
import {FaXTwitter} from 'react-icons/fa6';
import { social } from '@/types/main';
const Socials = ({ socials }: { socials: social[] }) => {

    return (
        <section id='socials' className="hidden lg:flex justify-center flex-row gap-6">
            <Link href={socials[0].link} target="_blank" rel="noreferrer" className="grid  hover:animate-bounce p-3 rounded-full bg-blue-700 text-white">
                    {React.createElement(FaLinkedin)}
            </Link>
            <Link href={socials[1].link} target="_blank" rel="noreferrer" className="grid  hover:animate-bounce p-3 rounded-full bg-blue-700 text-white">
                    {React.createElement(FaGithub)}
            </Link>
            <Link href={socials[2].link} target="_blank" rel="noreferrer" className="grid  hover:animate-bounce p-3 rounded-full bg-blue-700 text-white">
                    {React.createElement(FaInstagram)}
            </Link>
            <Link href={socials[3].link} target="_blank" rel="noreferrer" className="grid  hover:animate-bounce p-3 rounded-full bg-blue-700 text-white">
                    {React.createElement(FaXTwitter)}
            </Link>
        </section>
    )
}

export default Socials