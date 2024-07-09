import React from 'react'
import '../../App.css'
export default function Overview() {
  return (
    <div className='overflow-hidden'>
      <div className="overviewImage"></div>
      <div className="overview">

        <div className="about1">
          <div className="about-box1">
            <ul>
              <li><a href="/"><i className="fa-solid fa-house"></i> Home</a></li>
              <li><a href="/chairman"><i className="fa-solid fa-user"></i> Chairman's Message</a></li>
              <li><a href="" ><i className="fa-solid fa-users" ></i> Administration</a></li>
              <li><a href=""><i className="fa-solid fa-pen"></i> Admissions</a></li>
              <li><a href=""><i className="fa-solid fa-location-dot"></i> How to Reach Acharya</a></li>
              <li><a href=""><i className="fa-solid fa-envelope"></i> Apply Now</a></li>
            </ul>
          </div>
          <div className="about-box2">
            <h2 className='text-[35px] bg-gray-100 pl-2'>Reach Us</h2>
            <ul className='mt-6'>
              <li><a href="mailto:admissions@acharya.ac.in"><i className="fa-solid fa-envelope"></i> admissions@acharya.ac.in</a></li>
              <li><a href="tel:+917406644449"><i className="fa-solid fa-phone text-[12px]"></i> +91 740-664-4449</a></li>
              <li><a href="https://api.whatsapp.com/send?phone=+919731797677&text=I would like to get more information" target="_blank"><i className="fa-brands fa-whatsapp text-green-500"></i>  +91 973-179-7677</a></li>
              <li><a href="mailto:international@acharya.ac.in"><i className="fa-solid fa-envelope"></i> international@acharya.ac.in</a></li>
              <li><a href=""><i className="fa-solid fa-phone text-[12px]"></i> +91 973-177-9233</a></li>
              <li><a href="https://api.whatsapp.com/send?phone=+919731797677&amp;text=I would like to get more information" target="_blank"><i className="fa-brands fa-whatsapp text-green-500"></i>  +91 973-179-7677</a></li>
            </ul>

            <h2 className='text-[35px] bg-gray-100 mt-10 pl-2'>Address</h2>
            <p className='mt-6'> <b><i className="fa-solid fa-location-dot"></i>Acharya Institutes</b>
              <br />
              Acharya Dr. S. Radhakrishnan Road

              Acharya P.O Soladevanahalli
              <br />
              Bangalore-560 107
              <br />
              Karnataka, India.
            </p>
          </div>
        </div>
        <div className="about2">
          <h1 className='text-[45px] text-blue-900 hover:scale-[1.03] duration-[1s] leading-[62px]'>About Acharya</h1>
          <p>The Sanskrit word "Acharya", which means "TEACHER", epitomizes the quintessential values of our institution</p>

          <h3 className='text-[30px] text-blue-900 leading-[62px]'>#34 Years of Acharya</h3>
          <p> Established under J.M.J educational society 34 years ago, we at Acharya Institutes, Bangalore are proud to be the choice of students from around the world. We are Bangalore’s largest composite academic facility, with over 12,000+ students.</p>

          <h3 className='text-[30px] text-blue-900 leading-[62px]'>Our Motto</h3>
          <p>"Nurturing Aspirations Supporting Growth"</p>

          <h3 className='text-[30px] text-blue-900 leading-[62px]'>Our Vision</h3>
          <p>"Acharya Institutes, Committed to the cause of value-based education in all disciplines, envisions itself as a fountainhead of innovative human enterprise, with inspirational initiatives for Academic Excellence"</p>

          <h3 className='text-[30px] text-blue-900 leading-[62px]'>The Acharya Story</h3>
          <p className='leading-[27px]'>It all began with a vision to set a new benchmark in the world of education. And now, an annual count of 12,000+ students and 100+ academic programmes, it is safe to say that Acharya is right there in the top bracket, globally, when it comes to the quality of education and the possibilities that the young achievers here are presented with. Acharya Institutes is one of the best colleges in India! Spread across 120 acres of pristine land in Bengaluru India's 'technology hub' and located only a few minutes drive from top-notch multinational companies and Indian corporates, the Acharya campus is a magnificent sight, to begin with. Being counted amongst the top colleges in Bangalore, Acharya hosts its student-centric design and innovative blend of modern and traditional styles of architecture, the campus is a perfect setting for the students to let their ideas fly and get closer to realizing their dreams. Here the emphasis is on experiential and collaborative learning and our students learn the ways of the world directly from each other, with the campus being home to students from no less than 75 countries..</p>

          <p className='mt-10 leading-[27px]'>Acharya Institutes is undoubtedly among the best colleges in Bangalore, the academic, residential, extra-curricular, and landscaped zones of the campus are innovatively integrated. And adding to the campus life are the sports facilities that include a 10,000+ seating stadium enabling track and field events, football, cricket, cultural events, and mega music shows, along with an amphitheater and other facilities for indoor games. The concern for the environment is deeply rooted here in the design, through extensive afforestation of land, rainwater harvesting, creation of a 4-acre artificial lake, water treatment, use of alternative energy sources, and a ban on using substances that are not environment-friendly, etc. Come join Acharya, we are of the top colleges in Bangalore. All this and more await you here and we are delighted to welcome you to an exciting learning experience at Acharya - where the world comes to learn.</p>
        </div>


      </div>
    </div>
  )
}
