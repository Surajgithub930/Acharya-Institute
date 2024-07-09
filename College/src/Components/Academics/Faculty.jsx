import React from 'react'
import '../../App.css'
import faculty from '../../assets/faculty.jpg'

export default function Faculty() {
  return (
    <div className='overflow-hidden'>
      <img src={faculty} alt="" className='w-[100%] hover:scale-[1.02] duration-[1s] ' />
      <div className='px-[100px] h-[50vh] pt-20'>
        <h2 className='text-[55px] text-blue-800 hover:scale-[1.03] duration-[1s] text-center'>Our Professors</h2>
        <p>Acharya Institutes is known for global leadership in education, and the Acharya faculty is a combination of young and experienced, passionate and curious individuals. They are the most distinguished scholars, who constantly do research in their respective fields.</p>
        <div className='flex  space-x-8  '>
          <div>
            <select name="" className='w-[540px] h-[40px] border-[1px] border-solid border-blue-600 '>
              <option value selected>Select College Name</option>
              <option value="1">ACHARYA INSTITUTE OF TECHNOLOGY</option>
              <option value="2">ACHARYA INSTITUTE OF GRADUATE STUDIES</option>
              <option value="3">ACHARYA POLYTECHNIC</option>
              <option value="5">ACHARYA & BM REDDY COLLEGE OF PHARMACY</option>
              <option value="8">ACHARYAS NRV SCHOOL Of ARCHITECTURE</option>
              <option value="10">SMT. NAGARATHNAMMA COLLEGE OF NURSING</option>
              <option value="12">ACHARYA SCHOOL OF DESIGN</option>
              <option value="22">ACHARYA INSTITUTE OF ALLIED HEALTH SCIENCES</option>
              <option value="23">SMT. NAGARATHNAMMA SCHOOL OF NURSING</option>
              <option value="24">ACHARYAS NR INSTITUTE OF PHYSIOTHERAPY</option>
            </select>
          </div>
          <div>
            <select id="dept" className='w-[540px] h-[40px] border-[1px] border-solid border-blue-600  '>
              <option value selected>Select Department Name</option>
              <option value="51">AERONAUTICAL ENGG</option>
              <option value="52">AUTOMOBILE</option>
              <option value="53">BIO TECHNOLOGY</option>
              <option value="54">CHEMISTRY</option>
              <option value="56">COMPUTER SCIENCE & ENGINEERING</option>
              <option value="59">CIVIL</option>
              <option value="60">ELECTRONICS & COMMUNICATION ENGG</option>
              <option value="61">ELECTRICAL & ELECTRONICS ENGG</option>
              <option value="66">MATHEMATICS</option>
              <option value="70">HUMANITIES</option>
              <option value="71">MECHANICAL</option>
              <option value="73">MASTER OF BUSINESS ADMINISTRATION</option>
              <option value="75">INFORMATION SCIENCE & ENGINEERING</option>
              <option value="76">PHYSICS</option>
              <option value="79">MECHATRONICS</option>
              <option value="275">ARTIFICIAL INTELLIGENCE & MACHINE LEARNING</option>
              <option value="277">Master in computer application</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}
