import React from 'react'
import premnath from '../../assets/premnath_reddy.jpg'

export default function Chairman() {
  return (
    <div className='overflow-hidden'>
      <div className="chairmanImage"></div>
      <div className="chairman flex justify-center  w-[100%] h-[106vh] pt-[50px]">
        <div className="img-card w-[350px] h-[580px] border-2 mr-7">
          <img src={premnath} alt="" />

          <p className=' pt-6 text-center'>
            <b>B Premnath Reddy</b><br />
            Founder Chairman
            </p>
        </div>
        <div className="chair-text w-[730px]">
          <h1 className='text-[45px] text-blue-900 hover:scale-[1.03] duration-[1s] '>Chairman's Message</h1>
          At Acharya, we believe in <b>'fueling the quest for knowledge'.</b>

          <p className='mt-5'>In doing so, our commitments pave the way for the individual professional success which culminates in benefiting the society. Creating a vast state-of-the-art academic infrastructure, putting together best teaching talent, equipping with every required learning aid ensure that students at Acharya get the best in academics. Sporting, cultural and extra-curricular facilities are put in place so that the students enjoy their campus life. The wide range of Acharya academics encompasses Engineering, Management, Technology, Life Sciences, Pharmacy, Nursing, Teaching, Journalism, Communication, Fashion Design, etc. and has drawn aspiring youth from every part of India and across the globe. Acharya Institutes is truly emerging as the nurturing ground for leadership. It has become synonymous with practical and industry-focused education.</p>

          <p className='mt-5'>The fact that Acharyans, today, are a familiar face in the industry and the same is a demonstration of its total commitment to excellence in academics.</p>
        </div>
      </div>
    </div>
  )
}
