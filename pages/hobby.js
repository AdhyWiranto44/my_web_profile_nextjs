import Link from 'next/link';
import Image from 'next/image';

import data from '../data';
import Navbar from '../components/Navbar';
import HomeLayout from '../layouts/home';


const Hobby = () => {
  return (
    <HomeLayout
      pageContent={
        <div id="hobby" className="container" style={{marginBottom: "100px"}}>
            <div className="row mb-4">
                <div className="col-md">
                    <h3 className="text-center">My Hobbies</h3>
                </div>
            </div>
            {data.hobbies.map((hobby, index) => {
                if (index % 2 === 0) {
                    return (
                        <div key={index} className="row" data-aos="fade-right" data-aos-offset="200">
                            <div className="col-md">
                                <div className="card border-0 bg-transparent mb-3" style={{maxWidth: "540px"}}>
                                    <div className="row no-gutters">
                                        <div className="col-md-4">
                                            <img src={`../img/hobby/${hobby.img}`} className="card-img shadow-lg" title="Photo bt Luca Bravo on Unsplash" alt="hobby" />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body p-0 pl-3 mt-2 mb-3">
                                                <h5 className="card-title">{hobby.heading}</h5>
                                                <p className="card-text">{hobby.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                } else {
                    return (
                        <div className="row" data-aos="fade-left" data-aos-offset="200">
                        <div className="col-md">
                            <div className="card border-0 bg-transparent mb-3 float-right" style={{maxWidth: "540px"}}>
                                <div className="row no-gutters">
                                    <div className="col-md-4 order-md-2">
                                        <img src={`../img/hobby/${hobby.img}`} className="card-img shadow-lg" title="Photo bt Luca Bravo on Unsplash" alt="hobby" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body p-0 pr-md-3 pl-3 mt-2 mb-3 text-md-right">
                                            <h5 className="card-title">{hobby.heading}</h5>
                                            <p className="card-text">{hobby.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    );
                }
            })}
        </div>
      }
    />
  )
}

export default Hobby;