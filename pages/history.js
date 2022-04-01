import Link from 'next/link';
import Image from 'next/image';

import data from '../data';
import Navbar from '../components/Navbar';
import HomeLayout from '../layouts/home';


const History = () => {
  return (
    <HomeLayout
      pageContent={
        <div id="history" className="container mb-5">
            <div className="row">
                <div className="col text-center mb-4">
                    <h3>My History</h3>
                </div>
            </div>
            <div className="row" data-aos="fade-up" data-aos-offset="300">
                <div className="col">
                    <div className="card bg-0 border-0 shadow" style={{borderRadius: "30px"}}>
                    <div className="card-body">
                        <div className="row">
                        <div className="col-md-6 my-3" data-aos="fade-right" data-aos-delay="500">
                            <h5 className="text-center mb-3">Education</h5>
                            <ul className="timeline position-relative">
                                {data.history.educations.map((education, idx) => {
                                    return (
                                        <li key={idx} className="list-unstyled pl-3">
                                            <small>{education.date}</small>
                                            <p className="font-weight-bold mb-0">{education.description}</p>
                                            <ul>
                                                {education.details.map((detail, idx) => {
                                                    return (
                                                        <li key={idx}>{detail}</li>
                                                    );
                                                })}
                                            </ul>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="col-md-6 my-3" data-aos="fade-left" data-aos-delay="500">
                            <h5 className="text-center mb-3">Work Experience</h5>
                            <ul className="timeline position-relative">
                                {data.history.experiences.map((experience, idx) => {
                                    return (
                                        <li key={idx} className="list-unstyled pl-3">
                                            <small>{experience.date}</small>
                                            <p className="font-weight-bold mb-0">{experience.description}</p>
                                            <ul>
                                                {experience.details.map((detail, idx) => {
                                                    return (
                                                        <li key={idx}>{detail}</li>
                                                    );
                                                })}
                                            </ul>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="col-md my-3" data-aos="fade-left" data-aos-delay="500">
                            <h5 className="text-center mb-3">Seminars</h5>
                            <ul className="timeline position-relative">
                                {data.history.seminars.map((seminar, idx) => {
                                    return (
                                        <li key={idx} className="list-unstyled pl-3">
                                            <small>{seminar.date}</small>
                                            <p>{seminar.description}</p>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      }
    />
  )
}

export default History;