import React, { useEffect, useState } from 'react'
import '../App.css'
import logo from '../assets/acharya-logo-h-1.png'
import hot from '../assets/new-hotline.gif'
import { Link } from 'react-router-dom'
import { FaCaretDown } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";

export default function Navbar() {
    let [about, setAbout] = useState('hidden')
    let [academics, setAcademics] = useState('hidden')




    return (
        <>
            <div className='flex justify-evenly mt-6'>
                <img src={logo} alt="" />
                <img src={hot} alt="" className='w-[410px]' />
                <p><i className="fa-solid fa-phone text-red-500 "></i>  +91 740-664-4449 / 720-403-6555</p>
                <p><i className="fa-brands fa-whatsapp text-green-500"></i> +91 973-179-7677</p>
                <p><i className="fa-solid fa-users text-blue-500" ></i>Webinar</p>
            </div>

            <nav className='h-[55px] bg-blue-700  top-0 sticky z-40 leading-[55px]  '>
                <ul className='flex justify-left text-white gap-2 cursor-pointer ml-5 mt-6' >
                    <li><Link to="/">
                        <i className="fa-solid fa-house"></i></Link>
                    </li>

                    <li className='relative ml-3' onClick={() => setAbout(!about)}>About <FaCaretDown style={{ display: 'inline' }} />
                        <ul className={` absolute left-[-25px] w-[400px] leading-[40px] px-[15px] bg-white  ml-6  text-blue-800 text-[14px]  ${about ? "hidden" : "block"}`}>
                            <li ><Link to="/overview" >Overview »</Link></li>
                            <hr />
                            <li ><Link to="/chairman">Chairman's Message »</Link></li>
                            <hr />
                            <li ><Link to="/administration">Administration »</Link></li>
                        </ul>
                    </li>

                    <li className='relative ' onClick={() => setAcademics(!academics)}>Academics <FaCaretDown style={{ display: 'inline' }} />
                        <ul className={` absolute w-[400px] bg-white text-blue-800 text-[14px] leading-[40px] px-[15px] ${academics ? "hidden" : "block"} `}>
                            <li> <Link to="/faculty">Faculty »</Link> </li>
                            <hr />
                            <li> <Link to="/faculty">Research »</Link> </li>
                            <hr />
                            <li> <Link to="/faculty">Acharya IPR »</Link> </li>
                            <hr />
                            <li> <Link to="/faculty">Training »</Link> </li>
                            <hr />
                            <li> <Link to="/faculty">Placement »</Link> </li>
                            <hr />
                            <li> <Link to="/faculty">Collaboration »</Link> </li>

                        </ul>
                    </li >

                    <li>
                        <Link to="admissions">Admissions <FaCaretDown style={{ display: 'inline' }} /></Link>
                    </li>
                    <li>
                        <Link to="/institution">Institution <FaCaretDown style={{ display: 'inline' }} /></Link>
                    </li>
                    <li>
                        <Link to="/life">Life@Acharya <FaCaretDown style={{ display: 'inline' }} /></Link>
                    </li>
                    <li>
                        <Link to="/programmes">Programmes</Link>
                    </li>
                    <li>
                        <Link to="scholarships">Scholarships for CET Students <FaCaretDown style={{ display: 'inline' }} /></Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/login"> <FaLocationArrow style={{ display: 'inline' }} /> LOGIN<FaCaretDown style={{ display: 'inline' }} /></Link>
                    </li>
                    <li>
                        <Link to="/apply">APPLY NOW</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
