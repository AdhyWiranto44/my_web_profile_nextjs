import Link from 'next/link';
import Image from 'next/image';

import data from '../data';
import Navbar from '../components/Navbar';
import HomeLayout from '../layouts/home';


const Skill = () => {
  return (
    <HomeLayout
      pageContent={
        <div id="skill" className="container mb-5">
            <div className="row mb-4">
                <div className="col-md text-center">
                    <h3>My Skills</h3>
                </div>
            </div>
            <div className="row">
                {data.skills.map((skill, idx) => {
                    return (
                        <div key={idx} className="col-md mb-3" data-aos="fade-up">
                            <div className="card border-0 bg-transparent">
                                <i className={`${skill.icon} text-center`}></i>
                                <div className="card-body text-center">
                                    <h5 className="card-title mb-1">{skill.heading}</h5>
                                    <p className="card-text">{skill.description}</p>
                                </div>
                            </div>
                        </div>    
                    );
                })}
            </div>
        </div>
      }
    />
  )
}

export default Skill;