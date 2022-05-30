import Link from 'next/link';
import Image from 'next/image';

import data from '../data';


const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <footer id="footer" className="pt-5 myFooter">
      <div className="container">
        <div className="row pb-3">
          <div className="col-md-3 mb-3">
            <h6 className="mb-2">Contributions</h6>
            <ul>
              <li><a className="small d-block text-decoration-none" href="https://github.com/bellshade">Bellshade</a></li>
              <li><a className="small d-block text-decoration-none" href="https://github.com/AdhyWiranto44/object-detection-indonesian-traffic-signs-using-yolo-algorithm">Object Detection Indonesian Traffic Signs Using YOLO Algorithm</a></li>
            </ul>
          </div>
          {/* <div className="col-md-3 mb-3">
            <h6 className="mb-2">Mini app</h6>
            <ul>
              <li><p className="small d-block">Currently Unavailable :)</p></li>
              <li><a className="small d-block" href="/miniapp/covid-19">Covid-19 Indonesia</a></li>
              <li><a className="small d-block" href="/miniapp/weather">Weather</a></li>
            </ul>
          </div> */}
          <div className="col-md-3 mb-3">
            <h6 className="mb-2">This template</h6>
            <ul>
              <li><a className="small d-block text-decoration-none" text-decoration-none href="https://github.com/AdhyWiranto44/web-profile-template/">Github</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-3">
            <h6 className="mb-2">Made with</h6>
            <ul>
              <li><a className="small d-block text-decoration-none" href="https://nextjs.org/">NextJS</a></li>
              <li><a className="small d-block text-decoration-none" href="https://getbootstrap.com/">Bootstrap</a></li>
            </ul>
          </div>
        </div>
        <div className="row pt-3 border-top border-light">
          <div className="col-md-6 text-center text-md-start pb-3">
            <small className="mr-2">Copyright &#169; {currentDate}. Made with <span className="text-danger">&#10084;</span> By {data.full_name}</small>
          </div>
          <div className="col-md-6 text-center text-md-end pb-3">
            {data.social_media.map((socmed, idx) => {
              return (
                <a key={idx} href={socmed.link} className="h4 mx-1 text-secondary" title={socmed.title}><i className={socmed.icon}></i></a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;