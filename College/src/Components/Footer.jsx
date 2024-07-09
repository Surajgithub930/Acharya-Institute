import React from 'react'
import '../App.css'
import facebook from '../assets/facebook.png'
import insta from '../assets/instagram.png'
import link from '../assets/linkedin.png'
import youtube from '../assets/youtube.png'
import whats from '../assets/whatsapp.png'
import teli from '../assets/telegram.png'

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className=" p-16">
          <ul className='flex justify-center gap-5 '>
          <li><a href=""><img src={facebook} alt="" /></a></li>
          <li><a href=""><img src={insta} alt="" /></a></li>
          <li><a href=""><img src={link} alt="" /></a></li>
          <li><a href=""><img src={youtube} alt="" /></a></li>
          <li><a href=""><img src={whats} alt="" /></a></li>
          <li><a href=""><img src={teli} alt="" /></a></li>
          </ul>
        </div>
        <div className="black-footer">
          <div className="footer-box1">
            <h1>Address</h1>
            <hr />
            <p><i className="fa-solid fa-location-dot text-orange-500"></i> Acharya Institutes</p>
            <p>Acharya Dr. S. Radhakrishnan Road</p>
            <p>Acharya P.O Soladevanahalli</p>
            <p>Bangalore-560107</p>
            <p>Bangalore-560107</p>
            <h1>Domestic</h1>
            <hr />
            <p><i className="fa-regular fa-envelope-open  text-orange-500"></i> admissions@acharya.ac.in</p>
            <p><i className="fa-solid fa-phone text-orange-500 text-[13px]" ></i> +91 740-664-4449 / 720-403-6555</p>
            <p><i className="fa-brands fa-whatsapp text-green-500"></i> +91 973-179-7677</p>
            <h1>International</h1>
            <hr />
            <p><i className="fa-regular fa-envelope-open  text-orange-500"></i> international@acharya.ac.in</p>
            <p> <i className="fa-solid fa-phone text-orange-500 text-[13px]"></i> +91 973-177-9233</p>
            <p> <i className="fa-brands fa-whatsapp text-green-500"></i> +91 973-179-7677</p>
          </div>

          <div className="footer-box2">
            <h1>Institutes</h1>
            <hr />
            <p>Acharya Institute of Technology »</p>
            <p>Acharya's NRV School of Architecture »</p>
            <p>Acharya & BM Reddy College of Pharmacy »</p>
            <p>Acharya Institute of Graduate Studies »</p>
            <p>Acharya School of Design »</p>
            <p>Acharya Institute of Allied Health Sciences »</p>
            <p>Acharya's NR Institute of Physiotherapy »</p>
            <p>Smt. Nagarathnamma School of Nursing »</p>
            <p>Smt. Nagarathnamma College of Nursing »</p>
            <p>Acharya Polytechnic »</p>
            <p>Acharya Institute of English & Foreign Languages »</p>
          </div>
          <div className="footer-box3">
            <h1>Quick links</h1>
            <hr />
            <p>Acharya News »</p>
            <p>Blogs »</p>
            <p>Incubation »</p>
            <p>Campus Life »</p>
            <p>Infrastructure »</p>
            <p>Training »</p>
            <p>Placement »</p>
            <p>Careers »</p>
            <p>Transport »</p>
            <p>Travel Guidelines »</p>
            <p>Reach us »</p>
            <h1>Acharya Portals</h1>
            <hr />
            <p><i className="fa-solid fa-user text-orange-500"></i> Student Login</p>
            <p><i className="fa-solid fa-user text-orange-500"></i> Employee Login</p>
          </div>
        </div>
        <hr className='w-[100%] border-[gray] bord mt-6' />
        <p className='text-center text-gray-400 mt-3.5'>Copyrights © 2024 Acharya. All rights reserved. Privacy Policy | Mandatory Disclosure</p>
      </div>
    </>
  )
}
