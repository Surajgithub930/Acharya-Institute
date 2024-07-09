import React from 'react'
import '../../App.css'
import administration from '../../assets/administration.jpg'
import { IoHome } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";



export default function Administration() {
  return (
    <div className='overflow-hidden'>
      <img src={administration} alt="" className='w-[100%] hover:scale-[1.03] ease-out duration-[.5s] ' />
      <div className='w-[100%] h-[158vh] flex'>
        <div className='table ml-[117px] mt-12'>
          <div className='w-[350px] h-[247] border-[1px] border-solid border-gray-400'>
            <ul className='administration-box1'>
              <li><a href="/"><IoHome style={{ display: 'inline' }} /> Home</a></li>
              <li><a href="/chairman"><FaUser style={{ display: 'inline' }} /> Chairman's Message</a></li>
              <li><a href="/administration"><FaUsers style={{ display: 'inline' }} /> Administration</a></li>
              <li><a href=""><FaPencilAlt style={{ display: 'inline' }} />
                Admissions</a></li>
              <li><a href=""><IoLocationSharp style={{ display: 'inline' }} /> How to Reach Acharya</a></li>
              <li style={{ border: 'none' }}><a href=""><CiMail style={{ display: 'inline' }} /> Apply Now</a></li>
            </ul>
          </div>
          <div className='w-[350px] h-[570px] border-solid border-[1px] border-gray-400 mt-6'>
            <h2 className='p-1 bg-gray-200 text-[35px]'>Reach Us</h2>
            <ul className='administration-box2 mt-6'>
              <li><a href="mailto:admissions@acharya.ac.in"><CiMail style={{ display: 'inline' }} /> admissions@acharya.ac.in</a></li>
              <li><a href="tel:+917406644449"> +91 740-664-4449</a></li>
              <li><a href="https://wa.me/+919731797677" target="_blank"><FaWhatsapp style={{ color: 'green', display: 'inline' }} />  +91 973-179-7677</a></li>
              <li><a href="mailto:international@acharya.ac.in"><CiMail style={{ display: 'inline' }} /> international@acharya.ac.in</a></li>
              <li><a href="tel:+917406644449"> +91 973-177-9233</a></li>
              <li><a href="https://wa.me/+919731797677" target="_blank"><FaWhatsapp style={{ color: 'green', display: 'inline' }} /> +91 973-179-7677</a></li>
            </ul>
            <h2 className='p-1 bg-gray-200 text-[35px] mt-10'>Address</h2>
            <p className='ml-3 mt-6'>
              <b><IoLocationSharp style={{ display: 'inline' }} />Acharya Institutes</b>
              <br />
              Acharya Dr. S. Radhakrishnan Road
              <br />
              Acharya P.O Soladevanahalli
              <br />
              Bangalore-560 107
              <br />
              Karnataka, India.
            </p>
          </div>
        </div>
        <div className='leading-9 ml-8'>
          <h1 className='text-[47px] mt-14 text-blue-900  '>Administration</h1>
          <p className='leading-7 mt-5'>Acharya enables you to quickly and effectively communicate with the right personals to make your college experience more efficient. For any queries, you may write to any of the corresponding emails.</p>

          <h3 className='text-[20px]'>Admissions</h3>
          <p>Email: <a href="mailto:admissions@acharya.ac.in" className='text-blue-700'>admissions@acharya.ac.in</a></p>

          <h3 className='text-[20px]'>Student Affairs</h3>
          <p>Email: <a href="" className='text-blue-700'>info@acharya.ac.ina</a></p>

          <h3 className='text-[20px]'>ERP</h3>
          <p>Email: <a href="mailto:erp@acharya.ac.in" className='text-blue-700'>erp@acharya.ac.in</a></p>

          <h3 className='text-[20px]'>Incubation</h3>
          <p>Email: <a href="mailto:incubation@acharya.ac.in" className='text-blue-700'>incubation@acharya.ac.in</a></p>

          <h3 className='text-[20px]'>Collaboration</h3>
          <p>Email: <a href="mailto:collaborations@acharya.ac.in" className='text-blue-700'>collaborations@acharya.ac.in</a></p>

          <h3 className='text-[20px]'>Training</h3>
          <p>Email: <a href="mailto:training@acharya.ac.in" className='text-blue-700'>training@acharya.ac.in</a></p>

          <h3 className='text-[20px]'>Placement</h3>
          <p>Email: <a href="mailto:placements@acharya.ac.in" className='text-blue-700'>placements@acharya.ac.in</a></p>

          <h3 className='text-[20px]'>Research</h3>
          <p>Email: <a href="mailto:research@acharya.ac.in" className='text-blue-700'>research@acharya.ac.in</a></p>

          <h3 className='text-[20px]'>Hostel</h3>
          <p>Email: <a href="mailto:hostelmanager@acharya.ac.in" className='text-blue-700'>hostelmanager@acharya.ac.in</a></p>

          <h3 className='text-[20px]'>Chief Proctor</h3>
          <p>Email: <a href="mailto:chiefproctor@acharya.ac.in" className='text-blue-700'>chiefproctor@acharya.ac.in</a></p>

          <h3 className='text-[20px]'>Alumni Association</h3>
          <p>Email: <a href="mailto:alumni@acharya.ac.in" className='text-blue-700'>alumni@acharya.ac.in</a></p>
        </div>
      </div>
    </div>
  )
}
