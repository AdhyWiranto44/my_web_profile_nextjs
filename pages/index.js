/* eslint-disable @next/next/no-sync-scripts */
import Link from 'next/link';
import HomeLayout from '../layouts/home';
import data from '../data';

export default function Home() {
  return (
    <HomeLayout
      pageContent={
        <div id="jumbotron" className="container">
          <div className="row">
            <div className="col-md-4 text-center order-md-2">
              <img className="jumbotronImg bg-transparent" height="380" src={`../img/${data.photo}`} alt="Adhy Wiranto" />
            </div>
            <div className="col-md-6 offset-lg-1 jumbotronTitle">
              <small className="mb-0">Hello, my name is</small>
              <h1>{data.full_name}</h1>
              <p className="mb-2 font-weight-lighter">{data.job}</p>
              {data.social_media.map((socmed, idx) => {
                return (
                  <a key={idx} href={`socmed.link`} className="h4 mx-1 text-secondary" title={`socmed.title`}><i className={socmed.icon}></i></a>
                )
              })}
              <br />
              <Link href="/about">
                <a className="btn btn-dark nav-item mt-4 py-2">About me</a>
              </Link>
            </div>
          </div>
        </div>
      }
    />
  );
}
