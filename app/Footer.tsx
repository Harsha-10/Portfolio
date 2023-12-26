import { social } from "@/types/main";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram,FaGithub,FaLinkedin } from 'react-icons/fa';
import {FaXTwitter} from 'react-icons/fa6';
export default function Footer({ socials, name }: { socials: social[], name: string }) {

    const { theme } = useTheme()

    return (
        <footer className="w-full bg-white dark:bg-grey-800 text-gray-500 dark:text-gray-300">

            <div className="xl:max-w-6xl mx-auto md:mx-6 lg:mx-10 xl:mx-auto py-4 lg:py-6 flex flex-col-reverse md:flex-row gap-2 md:gap-0 justify-between items-center">

                {/* Social Links */}
                <div className="flex xl:hidden items-center gap-2">
                    <Link href={socials[0].link} target="_blank" rel="noreferrer" className="grid place-items-center p-3 rounded-full text-lg hover:bg-gray-100 hover:dark:bg-grey-900 transition-colors">
                            {React.createElement(FaLinkedin)}
                    </Link>
                    <Link href={socials[1].link} target="_blank" rel="noreferrer" className="grid place-items-center p-3 rounded-full text-lg hover:bg-gray-100 hover:dark:bg-grey-900 transition-colors">
                            {React.createElement(FaGithub)}
                    </Link>
                    <Link href={socials[2].link} target="_blank" rel="noreferrer" className="grid place-items-center p-3 rounded-full text-lg hover:bg-gray-100 hover:dark:bg-grey-900 transition-colors">
                            {React.createElement(FaInstagram)}
                    </Link>
                    <Link href={socials[3].link} target="_blank" rel="noreferrer" className="grid place-items-center p-3 rounded-full text-lg hover:bg-gray-100 hover:dark:bg-grey-900 transition-colors">
                            {React.createElement(FaXTwitter)}
                    </Link>
                </div>
                <span className="text-sm text-gray-600 invisible xl:visible 2xl:visible sm:invisible mx-auto">CopyRight@ Harsha 2024</span>
            </div>

        </footer>
    )
}