import Link from 'next/link';
import Image from 'next/image';

import data from '../data';
import Navbar from '../components/Navbar';
import HomeLayout from '../layouts/home';


const About = () => {
  return (
    <HomeLayout
      pageContent={
        <div id="about" className="container mb-5">
          <div className="row">
            <div className="col-md">
              <div className="row">
                <div className="col-md">
                  <h3 className="mb-4 text-center">About me</h3>
                </div>
              </div>
              <div className="row" data-aos="fade-up" data-aos-offset="200">
                <div className="col-lg-8 col offset-lg-2">
                  <div className="card border-0 p-3 shadow">
                    <div className="card-body">
                      <p className="card-text">{data.about_me}</p>
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

export default About;