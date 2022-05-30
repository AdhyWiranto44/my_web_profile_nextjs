import Link from 'next/link';
import Image from 'next/image';

import data from '../data';
import Navbar from '../components/Navbar';
import HomeLayout from '../layouts/home';


const Contact = () => {
  return (
    <HomeLayout
      pageContent={
        <div id="contactme" className="container">
            <div className="row">
                <div className="col-md align-self-center text-center mb-3">
                    <h3>Contact me!</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <form name="adhywiranto44-contact-me">
                        <div className="form-group mb-3" data-aos="fade-right">
                            <input type="text" className="form-control shadow-sm" id="name" name="name" placeholder="name" required autoComplete="off" />
                        </div>
                        <div className="form-group mb-3" data-aos="fade-right" data-aos-delay="50">
                            <input type="email" className="form-control shadow-sm" id="email" name="email" placeholder="email" required autoComplete="off" />
                        </div>
                        <div className="form-group mb-3" data-aos="fade-right" data-aos-delay="100">
                            <textarea className="form-control shadow-sm" id="messages" name="messages" rows="10" placeholder="message" required autoComplete="off" ></textarea>
                        </div>
                        <button type="submit" className="btn btn-dark px-3 py-2 fw-bold btn-send" data-aos="fade-right" data-aos-delay="150">Send</button>
                        
                        <button className="btn btn-dark px-3 py-2 fw-bold btn-loading d-none" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Loading...
                        </button>
                    </form>
                    <div className="alert alert-success alert-dismissible fade show d-none my-alert mt-3" role="alert">
                        <strong>Yeay!</strong> The messages has been sent :)
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
      }
    />
  )
}

export default Contact;