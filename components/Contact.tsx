import axios from "axios";
import { useState,useRef } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import SectionWrapper from "./SectionWrapper"
import Image from "next/image";
import { FormEvent } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import emailjs from "@emailjs/browser"
import { set } from "firebase/database";
const Contact = () => {
    const form = useRef<HTMLFormElement | null>(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const sendEmail = (e:FormEvent) => {
        e.preventDefault();
        if (form.current) {
            setLoading(true);
            emailjs.sendForm('service_n4edrfp', 'template_zjebe5m', form.current, 'FA4WQM1RjLrtvugSQ')
            .then((result) => {
                console.log(result);
                if(result.text==="OK"){
                    setLoading(false);
                    setSuccess(true);
                    toast.success("Email Sent Successfully");
                }
            }, (error) => {
                setLoading(false);
                toast.error("Failed to send email with error code $`{error.status}`");
                console.log(error.text);
            });
        }
    };
    return (
        <SectionWrapper id="contact" className="mb-16 mx-4 lg:mx-0">
            <h2 className="text-center text-4xl">Contact Me</h2>
            <ToastContainer />

            <div className="w-full lg:w-5/6 2xl:w-3/4 mt-10 md:mt-16 mx-auto flex justify-between rounded-xl">
                <Image unoptimized={true} quality={100} alt="contact" src="/contact.png" className="hidden md:block w-1/2 h-full object-cover" width={1000} height={1000} />
                <div className="flex-1">
                    <h3 className="text-2xl pb-4">Get in touch</h3>
                    <p className="text-gray-400 mb-4 text-sm md:text-base">My inbox is always open. Whether you have a question or just want to say hello, I will try my best to get back to you!</p>

                    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 rounded-xl">
                        <input name="user_name" type="text" placeholder='Full Name *' required className="outline-none bg-gray-100 dark:bg-grey-800 placeholder-gray-400 rounded-lg py-3 px-4" />
                        <input name="user_email" type="email" placeholder='Email *' required className="outline-none bg-gray-100 dark:bg-grey-800 placeholder-gray-400 rounded-lg py-3 px-4" />
                        <textarea  name="message" rows={4} placeholder='Message *' required className="outline-none resize-none bg-gray-100 dark:bg-grey-800 placeholder-gray-400 rounded-lg py-3 px-4" />
                        <button type="submit" value="Send" disabled={loading} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white rounded-lg disabled:cursor-not-allowed self-end">
                            {loading ? <span className="flex items-center gap-2">Say Hello <BiLoaderAlt className="animate-spin" /></span> : "Say Hello 👋"}
                        </button>
                    </form>
                </div>
            </div>
        </SectionWrapper >
    )
}

export default Contact