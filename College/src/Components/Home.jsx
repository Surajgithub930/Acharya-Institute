import React from 'react'
import '../App.css'
import video from '../assets/video.mp4'
import a1 from '../assets/a1.jpeg'
import a2 from '../assets/a2.jpeg'
import a3 from '../assets/a3.jpeg'
import a4 from '../assets/a4.jpeg'
import a5 from '../assets/a5.jpeg'
import a6 from '../assets/a6.jpeg'
import a7 from '../assets/a7.jpeg'
import a8 from '../assets/a8.jpeg'
import a9 from '../assets/a9.jpeg'
import a10 from '../assets/a10.jpeg'
import a11 from '../assets/a11.jpeg'
import a12 from '../assets/a12.jpeg'
import a13 from '../assets/a13.jpeg'
import a14 from '../assets/a14.jpeg'
import a15 from '../assets/a15.jpeg'
import Academic50 from '../assets/50Academic.jpg'
import do1 from '../assets/do1.jpeg'
import do2 from '../assets/do2.jpeg'
import do3 from '../assets/do3.jpeg'
import do4 from '../assets/do4.jpeg'
import do5 from '../assets/do5.jpeg'
import do6 from '../assets/do6.jpeg'
import do7 from '../assets/do7.jpeg'
import do8 from '../assets/do8.jpeg'
import do9 from '../assets/do9.jpeg'
export default function Home() {
    return (
        <>
            <button className='enquire-button'>Enquire Now</button>
            {/* ********************************Video-Section********************************** */}
            <div>
                <video src={video} autoPlay loop muted></video>
            </div>

            {/* ****************************Top-College-Section*************************** */}
            <div className='TopSection'>
                <h1 className='heading-1-A'>Acharya</h1>
                <h2 className='heading-1-A'>Where the World Comes to Learn</h2>
                <h3>Bengaluru's Largest Composite Academy</h3>
                <div className='Rank'>
                    <p>
                        Ranking among the <b>Top colleges in Bangalore, India</b> Acharya was established in 1990. A cerebral destination for national and international students, we offer prestigious learning experience and a lavishing 120 acres of campus that attracts students from around the world. There is nothing like the lush greenery and mesmerizing views to soothe your soul! Acharya is exactly what you have wished for.
                    </p>
                    <h4>Come, Discover Acharya - Where the world comes to Learn!</h4>

                </div>
                <button>APPLY NOW</button>
            </div>

            {/******************************Eleven-Institutions-Section**********************************/}
            <div className="Eleven-Container">
                <div className="main-box">
                    <div className="box1">
                        <h1>Eleven Institutions, Infinite Possibilities.</h1>
                    </div>
                    <div className="box2">
                        <div className="inner-box">
                            <p>At Acharya, our educational philosophy is broader than simply academics. Being one of the best colleges in Bangalore, our mission is to provide our students with a holistic life experience. By integrating carefully planned facilities and activities into the daily campus routine, we ensure our students become responsible human beings and prepare them to face the challenges of life.</p>
                            <h3>
                                <i className="fa fa-trophy" aria-hidden="true"> </i> Awards & Recognition
                            </h3>

                            <ul>
                                <li>#1 Technology Enabled Library in India</li>
                                <li>#2 Most Diverse Private Campus in India</li>
                                <li>Bengaluru's Largest Composite Academy</li>
                                <li>#1 Pharmacy College in Bangalore</li>
                                <li>#1 Industry Linked Pharmacy College in India</li>
                                <li>SIRO Status</li>
                                <li style={{ border: 'none' }}>Green Campus Award</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* ****************************Diverse  Inquisitive  Pioneering******************************* */}

            <div id='Diverse'>
                <h1>Diverse <i className="fa-solid fa-arrow-right"></i> Inquisitive <i className="fa-solid fa-arrow-right"></i> Pioneering</h1>
                <div className="Diverse-Container">
                    <div className="Diverse-Card">
                        <img src={a1} alt="" />
                        <h5>Acharya Institute of Technology</h5>
                        <p className='Card-Text'>Acharya Institute of Technology (AIT) is affiliated to Visvesvaraya Technological University (VTU). NAAC & NBA Accredited, AIT offers B.E, M.Tech, MCA & MBA Programmes.</p>
                        <div className="Blue-btn">
                            <button className='Bg-Button'><a href="#">KNOW MORE</a></button>
                        </div>
                    </div>
                    <div className="Diverse-Card">
                        <img src={a2} alt="" />
                        <h5>Acharya's NRV School of Architecture</h5>
                        <p>Acharya's NRV School of Architecture (ANRVSA) is affiliated to Visvesvaraya Technological University (VTU). Approved by AICTE and Council of Architecture (India), ANRVSA offers B.Arch Programmes.</p>
                        <div className="Blue-btn">
                            <button className='Bg-Button'><a href="#">KNOW MORE</a></button>
                        </div>
                    </div>

                    <div className="Diverse-Card">
                        <img src={a3} alt="" />
                        <h5>Acharya & BM Reddy College of Pharmacy</h5>
                        <p>Acharya & BM Reddy College of Pharmacy, affiliated to Rajiv Gandhi University of Health Sciences & accredited by NBA & NAAC. #1 Pharmacy college in Bangalore offering B.Pharm, D.Pharm, Pharm.D & M.Pharm.</p>
                        <div className="Blue-btn">
                            <button className='Bg-Button'><a href="#">KNOW MORE</a></button>
                        </div>
                    </div>

                    <div className="Diverse-Card">
                        <img src={a4} alt="" />
                        <h5>Acharya Institute of Graduate Studies</h5>
                        <p>Acharya Institute of Graduate Studies is affiliated to Bengaluru City University. Accredited by NAAC and recognised by Govt. of Karnataka, AIGS offers Bachelors and Masters programmes for its aspirants.</p>
                        <div className="Blue-btn">
                            <button className='Bg-Button'><a href="#">KNOW MORE</a></button>
                        </div>
                    </div>

                    <div className="Diverse-Card">
                        <img src={a5} alt="" />
                        <h5>Acharya School of Design</h5>
                        <p>Acharya School of Design(ASD) is affiliated to Bengaluru City University. Recognised by Govt. of Karnataka, ASD offers 4 year Bachelor of Visual Arts (BVA) Programmes in various specialisations.</p>
                        <div className="Blue-btn">
                            <button className='Bg-Button'><a href="#">KNOW MORE</a></button>
                        </div>
                    </div>

                    <div className="Diverse-Card">
                        <img src={a6} alt="" />
                        <h5>Acharya Institute of Allied Health Sciences</h5>
                        <p>Acharya Institute of Allied Health Sciences is affiliated to Rajiv Gandhi University of Health Sciences(RGUHS). Approved by AICTE, AIAHS offers Bachelor programmes in the Allied Health domain.</p>
                        <div className="Blue-btn">
                            <button className='Bg-Button'><a href="#">KNOW MORE</a></button>
                        </div>
                    </div>

                    <div className="Diverse-Card">
                        <img src={a7} alt="" />
                        <h5>Acharya's NR Institute of Physiotherapy</h5>
                        <p>Acharya's NR Institute of Physiotherapy (ANRIP) is affiliated to Rajiv Gandhi University of Health Sciences (RGUHS). Approved by AICTE, ANRIP offers BPT programmes for its aspirants.</p>
                        <div className="Blue-btn">
                            <button className='Bg-Button'><a href="#">KNOW MORE</a></button>
                        </div>
                    </div>

                    <div className="Diverse-Card">
                        <img src={a8} alt="" />
                        <h5>Smt. Nagarathnamma School of Nursing</h5>
                        <p>Smt. Nagarathnamma School of Nursing is affiliated to Rajiv Gandhi University of Health Sciences (RGUHS). Accredited by NAAC and recognised by Karnataka Nursing Council, SNSN offers Diploma GNM for its aspirants.</p>
                        <div className="Blue-btn">
                            <button className='Bg-Button'><a href="#">KNOW MORE</a></button>
                        </div>
                    </div>

                    <div className="Diverse-Card">
                        <img src={a9} alt="" />
                        <h5>Smt. Nagarathnamma College of Nursing</h5>
                        <p>Smt. Nagarathnamma College of Nursing is affiliated to Rajiv Gandhi University of Health Sciences. Accredited by NAAC and recognised by KNC and INC, SNCN offers, B.Sc Nursing, PB. B.Sc and M.Sc in Nursing</p>
                        <div className="Blue-btn">
                            <button className='Bg-Button'><a href="#">KNOW MORE</a></button>
                        </div>
                    </div>

                    <div className="Diverse-Card">
                        <img src={a10} alt="" />
                        <h5>Acharya Polytechnic</h5>
                        <p>Acharya Polytechnic is Approved by AICTE and Recognised by Govt. of India, Directorate of Technical Education. Accredited by NBA Acharya Polytechnic offers Diploma Programmes across various Engineering domains.</p>
                        <div className="Blue-btn">
                            <button className='Bg-Button'><a href="#">KNOW MORE</a></button>
                        </div>
                    </div>

                    <div className="Diverse-Card">
                        <img src={a11} alt="" />
                        <h5>Acharya Institute of English & Foreign Languages</h5>
                        <p>Acharya Institute of English and Foreign Languages (AIEFL) is an institution that offers basic certificate programmes, diploma programmes and advanced certification programmes in various language skills.</p>
                        <div className="Blue-btn">
                            <button className='Bg-Button'><a href="#">KNOW MORE</a></button>
                        </div>
                    </div>

                    <div className="Diverse-Card">
                        <img src={a12} alt="" />
                        <h5>An International Experience for All</h5>
                        <p>Acharya is one of the best graduate/postgraduate colleges in Bangalore, India. We are committed to making life at Acharya an International experience - no matter where you are from!</p>
                        <div className="Blue-btn">
                            <button className='Bg-Button'><a href="#">KNOW MORE</a></button>
                        </div>
                    </div>

                    <div className="Diverse-Card">
                        <img src={a13} alt="" />
                        <h5>15 Research Centers in Acharya</h5>
                        <p>Research is integral to learning at Acharya, we are counted among the best colleges in India. Students and Faculty are constantly encouraged in lateral- and out-of-box thinking to create advanced applications. The outcome of research activities is carried out across Acharya in collaboration with Academia & Industry, which is the generation of Intellectual Property, Publication, Technologies & Products. Acharya's Research plays a pivotal role in its academic success.</p>
                        <div className="Blue-btn">
                            <button className='Bg-Button'><a href="#">KNOW MORE</a></button>
                        </div>
                    </div>

                    <div className="Diverse-Card">
                        <img src={a14} alt="" />
                        <h5>International Immersion</h5>
                        <p>Acharya constant endeavours to take its academics higher are significantly enabled by its academic alliances with esteemed organizations, worldwide. Faculty and student exchange, formal and informal knowledge interchange, joint projects, etc, help the robust upgrade. No doubt, we are counted among the top colleges in Bangalore, India. Acharya has collaborated with more than 80 International Universities. Through this, Acharya aims at empowering students with global exposure through our International Immersion Program.</p>
                        <div className="Blue-btn">
                            <button className='Bg-Button'><a href="#">KNOW MORE</a></button>
                        </div>
                    </div>

                    <div className="Diverse-Card">
                        <img src={a15} alt="" />
                        <h5>Acharya - KSCST IPR Cell</h5>
                        <p>As you are aware, Karnataka State enjoys large scientific human resource in India with state of the art research and technology institutions / laboratories and scientific establishments in the country. Innovative / research work carried out in these establishments contribute immensely to the advancement of science and technology, thereby, furthering the economic growth of the nation. Project / R&D work in engineering and other technical institutions carried out as a part of their curriculum during their graduate and postgraduate..</p>
                        <div className="Blue-btn">
                            <button className='Bg-Button'><a href="#">KNOW MORE</a></button>
                        </div>
                    </div>
                </div>
            </div>
            {/* ********************************50 Academic Streams:100 Programmes************************************* */}
            <div className='Academic'>
                <img src={Academic50} alt="not found" />
                <div className="Academic-text">
                    <h2>50 Academic Streams:100 Programmes</h2>
                    <p>Acharya enables students to choose from over 100 programmes from across 50 academic streams. Being among top colleges in Bangalore, Aspirants of Engineering, Management, Design, Architecture, Pharmacy, Science, Healthcare, Arts, Commerce, Fashion Design, Social Work, etc find Acharya to be a preferred choice.</p>
                    <div className="Academic-btn">
                        <button><a href="">know more</a></button>
                    </div>
                </div>
            </div>

            { /* ***************************12000+ Students************************************** */}
            <div className="Students-Container">
                <div className="Students-box">
                    <h1>12000+ Students</h1>
                    <p>With more than 12,000+ students, Acharya is committed to fostering a strong bond between every student and provides diverse learning experiences. There have been several platforms established to ensure these connections are made to improve the connection of our students for years to come. As a college in Bangalore, Acharya offers bonds, friendship, and vibrant culture.</p>
                </div>
                <div className="Students-box">
                    <h1>75 Nationalities</h1>
                    <p>Over the years, Acharya has been the second home to students from countries such as Cameroon, Bangladesh, Nepal, Srilanka, Afghanistan, Indonesia, the U.S.A among others. Acharya is one of the best colleges in Bangalore, the diversity within the campus has inspired inclusiveness within the region and has given our students a chance to develop an international perspective.</p>
                </div>
                <div className="Students-box">
                    <h1>120 Acres of Campus</h1>
                    <p>The 120 Acre Campus of Acharya is an AICTE award-winning campus. With Awards such as 'Clean and Smart Campus' and 'Green Campus', Acharya forms a perfect setting to instill holistic development for its students within the district of Bengaluru and is recognized as one of the best institutes in India.</p>
                </div>
            </div>

            {/* *********************************Placements********************************************* */}

            <div className="Placement">
                <div className="Placement-box-1">
                    <h3>Industry@ <br /> Acharya</h3>
                    <p>Over the years, Acharya has associated itself with the best industries across various domains to ensure opportunities and growth for our students. Being among the top engineering colleges in Bangalore, this process has been through various interactive platforms, the setting up of labs, and much more.</p>
                    <div className="Placement-btn">
                        <button><a href="">know more</a></button>
                    </div>
                </div>
                <div className="Placement-box-1">
                    <h3>ATBI-Startup Friendly Campus</h3>
                    <p>Acharya is the one of best graduate/postgraduate colleges in Bangalore, that believes in the “Overall Growth” of our students. Acharya Technology & Business Incubator, helps aspiring entrepreneurs to transform their ideas into reality through training, go-to-market strategy, funding, etc. Students can test their business ideas and models and can interact with experts and investors to scale up their business.</p>
                    <div className="Placement-btn">
                        <button><a href="">know more</a></button>
                    </div>
                </div>
                <div className="Placement-box-2">
                    <h3>Placements</h3>
                    <p>Every year select 80 to 100 students get the advantage of corporate exposure being Volunteer Coordinators for Placement. 200+ corporates visit the campus year after year and recruit students from every academic stream in the campus. There has been a consistent increase in salaries offered which has gone up to Rs.65.00 lakhs per annum recently.</p>
                    <button><a href="">know more</a></button>
                </div>
            </div>

            {/* ****************************Do more, Be more************************** */}
            <div className="Do-More-Container">
                <h3>Do more, Be more</h3>
                <div className="Do-More-Container-inner">
                    <div className="Do-box">
                        <img src={do1} alt="" />
                        <h4><a href="">Acharya Motor Sports</a></h4>
                        <p>A group of students with a common interest in steering the direction of travel to an efficient eco friendly method has effectively been brought under the same roof to engineer innovation and promote ingenuity. The club is also supportive of racers who wish to excel on the track. Student Racers are given opportunities to take on various circuits around the country. Eligible candidates are funded by Acharya to take part in events such as SAE REEV, BAJA, Formula Bharath, etc.</p>
                    </div>
                    <div className="Do-box">
                        <img src={do2} alt="" />
                        <h4><a href="">Sports</a></h4>
                        <p>Acharya has an unmatched sports infrastructure. With highly qualified coaches and instructors, with facilities including a 10,000 seater, Olympic Sized Stadium, Indoor Sporting Facility, Basketball, Volleyball, Badminton Courts enabling sports including Archery, Gymnasium, Horse Riding, Cricket, Football, American Football, Softball, Rugby, Baseball, Table Tennis, Track and Field sports forms the perfect setting to nurture the dedicated into the best sports-persons on campus.</p>
                    </div>
                    <div className="Do-box">
                        <img src={do3} alt="" />
                        <h4><a href="">Fitness Center</a></h4>
                        <p>A sound mind needs a sound body. Acharya’s Fitness Centre is a fitness concern of Acharya Institutes. We believe that a healthy body increases the concentration level of students enabling them to focus better on their tasks. With state of the art equipment, guidance by trained experienced professionals and facilities felicitating Aerobics, Cardio Exercises, etc., Acharya’s Fitness Centre keeps Acharyans fit round the year.</p>
                    </div>
                    <div className="Do-box">
                        <img src={do4} alt="" />
                        <h4><a href="">Clubs</a></h4>
                        <p>Clubs in Acharya are aplenty and their undertaking, a list too long. Here are a few clubs that are part of Acharya:
                            ● Nature Watch Club ● Music Club ● Dance Club ● Theatre Club ● Acharya Film Forum ● Acharya Kannada Vedike ● Literature Club ● Art Club ● Photography Club ● Developer’s Club of Acharya</p>
                    </div>
                    <div className="Do-box">
                        <img src={do5} alt="" />
                        <h4><a href="">Horse Riding</a></h4>
                        <p>Horse riding is an initiative to give the youth a skill which is rare to come by. It is an irresistible offering for the aspiring ones. Well trained instructors will help students smooth out the learning and give that exhilarating feeling of mastery and fitness.</p>
                    </div>
                    <div className="Do-box">
                        <img src={do6} alt="" />
                        <h4><a href="">Hostel</a></h4>
                        <p>The housing (hostel) facilities are made as ‘homely’ as possible. With choices of single / shared furnished occupancies with or without kitchenettes. The life at the hostel is an extension of the academic pursuit of the student.</p>
                    </div>
                    <div className="Do-box">
                        <img src={do7} alt="" />
                        <h4><a href="">Language & Communication</a></h4>
                        <p>English and foreign language learning facilities within the campus to help students learn English, French and German languages at various levels. Taught by experts and helped by the very latest technology the success rate of learning is rapid.</p>
                    </div>
                    <div className="Do-box">
                        <img src={a8} alt="" />
                        <h4><a href="">Student Affairs</a></h4>
                        <p>We believe the welfare of our students is in the forefront of the services we provide. Let it be for documentation, campus introduction, guidance, connecting to the various on-campus and off-campus resources, communication, etc.</p>
                    </div>
                    <div className="Do-box">
                        <img src={a9} alt="" />
                        <h4><a href="">Proctorial System</a></h4>
                        <p>As an integral part of Life at Acharya, we have the proctorial system. The teaching fraternity of Acharya plays the role of a guide and a mentor to 10-15 students under them. By becoming the single point of contact to the parent, they become the fulcrum between the institution, the student and the parent.</p>
                    </div>
                </div>
            </div>

        {/* *************************blue-image***************************** */}
            <div className='blue-image'>
                
            </div>

            {/* ******************************Crosole-Slider***************************** */}
        </>
    )
}
