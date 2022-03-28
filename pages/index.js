/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import data from '../data'
import Link from 'next/link';

export default function Home() {
  const currentDate = new Date().getFullYear;

  return (
    <>
        <Head>
            <meta charset="utf-8" data-color-mode="light" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            
            <link rel="icon" href={`../img/${data.web_icon}`} />
            
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossOrigin="anonymous" />

            {/* <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" /> */}
            
            <link rel="stylesheet" href="../css/style.css" />
            
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" />

            <script src="vendor/jquery/jquery.js"></script>
            <script src="vendor/jquery/jquery.easing.1.3.js"></script>
            <script src="vendor/popper/popper.min.js"></script>
            <script src="vendor/bootstrap/js/bootstrap.min.js"></script>

            {/* <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
            <script>
                {AOS.init()}
            </script> */}

            {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js"></script>
            <script>
                {gsap.from("#jumbotron", {duration: .7, y: -100, opacity: 0, ease: "back", delay: .3})}
            </script> */}

            {/* <script src="../js/script.js"></script> */}

            <title>{data.full_name}</title>
        </Head>

        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
            <Link href="/">
                <a className="navbar-brand">
                    <Image src={`/img/${data.web_icon}`} alt={data.full_name} title="AdhyW" width="36" height="36" />
                </a>
            </Link>
                <button className="navbar-toggler border-0 pr-0" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <div className="nav-menu" onClick="openNavMenu(this)">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav mx-auto navbarLinks">
                        <a className="nav-item nav-link mx-2" href="#portfolio" data-toggle="collapse" data-target=".navbar-collapse.show">Portfolio</a>
                        <a className="nav-item nav-link mx-2" href="#skill" data-toggle="collapse" data-target=".navbar-collapse.show">Skill</a>
                        <a className="nav-item nav-link mx-2" href="#about" data-toggle="collapse" data-target=".navbar-collapse.show">About</a>
                        <a className="nav-item nav-link mx-2" href="#history" data-toggle="collapse" data-target=".navbar-collapse.show">History</a>
                        <Link href="https://adhywiranto44.medium.com/">
                            <a className="nav-item nav-link mx-2" target="_blank">Posts</a>
                        </Link>
                    </div>
                    <a className="nav-item nav-link mx-2" href="#contactme"><i className="fas fa-paper-plane mr-2"></i>Contact me!</a>
                    <button className="btnChangeTheme btn btn-outline-dark btn-sm border-0 ml-3 shadow-none">
                        <i className="far fa-moon"></i>
                    </button>
                </div>
            </div>
        </nav>

        <div className="row">
            <div className="col">
                <a className="goTop btn btn-secondary fixed-bottom mr-3 mb-3 ml-auto border-0 d-none" href="#onTop"
                    style={{width: "50px", height: "50px"}}>
                    <i className="fas fa-chevron-up h4 pt-2"></i>
                </a>
            </div>
        </div>

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
                    <a href="#about" className="btn btn-dark nav-item mt-4 py-2">About me</a>
                </div>
            </div>
        </div>

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

        <div id="hobby" className="container" style={{marginBottom: "100px"}}>
            <div className="row mb-4">
                <div className="col-md">
                    <h3 className="text-center">My Hobbies</h3>
                </div>
            </div>
            {data.hobbies.map((hobby, index) => {
                if (index % 2 === 0) {
                    return (
                        <div className="row" data-aos="fade-right" data-aos-offset="200">
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

        <div id="portfolio" className="container mb-5">
            <div className="row">
                <div className="col text-center mb-4">
                    <h3>My Portfolio</h3>
                </div>
            </div>
            <div className="row">
                {data.portfolio.map((portfolio, idx) => {
                    return (
                        <div key={idx} className="col-xl-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
                            <div className="card shadow border-0">
                                <img src={`../img/portfolio/${portfolio.img}`} className="card-img-top" alt="portfolio" />
                                <div className="card-body">
                                    <h5 className="card-title">{portfolio.heading}</h5>
                                    <p className="card-text text-justify">{portfolio.description}</p>
                                    <small className="text-muted d-block mb-1">Technology</small>
                                    {portfolio.technology.map((tech, idx) => {
                                        return (
                                            <p key={idx} className="h4 mr-1 d-inline" title={tech.title} style={{opacity: ".5"}}><i className={tech.icon}></i></p>
                                        );
                                    })}
                                    <br />
                                    <a className="btn btn-dark px-3 mt-3 nav-item" href={portfolio.link} target="blank">Show</a>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

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

        <div id="contactme" className="container">
            <div className="row">
                <div className="col-md align-self-center text-center mb-3">
                    <h3>Contact me!</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <form name="adhywiranto44-contact-me">
                        <div className="form-group" data-aos="fade-right">
                            <input type="text" className="form-control shadow-sm" id="name" name="name" placeholder="name" required autoComplete="off" />
                        </div>
                        <div className="form-group" data-aos="fade-right" data-aos-delay="50">
                            <input type="email" className="form-control shadow-sm" id="email" name="email" placeholder="email" required autoComplete="off" />
                        </div>
                        <div className="form-group" data-aos="fade-right" data-aos-delay="100">
                            <textarea className="form-control shadow-sm" id="messages" name="messages" rows="10" placeholder="message" required autoComplete="off"></textarea>
                        </div>
                        <button type="submit" className="btn btn-dark px-3 py-2 font-weight-bold btn-send" data-aos="fade-right" data-aos-delay="150">Send</button>
                        
                        <button className="btn btn-dark px-3 py-2 font-weight-bold btn-loading d-none" type="button" disabled>
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

        <footer id="footer" className="pt-5 myFooter" style={{marginTop: "140px"}}>
            <div className="container">
                <div className="row pb-3">
                    <div className="col-md-3 mb-3">
                        <h6 className="mb-2">Contributions</h6>
                        <ul>
                            <li><a className="small d-block" href="https://github.com/bellshade">Bellshade</a></li>
                            <li><a className="small d-block" href="https://github.com/AdhyWiranto44/object-detection-indonesian-traffic-signs-using-yolo-algorithm">Object Detection Indonesian Traffic Signs Using YOLO Algorithm</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-3">
                        <h6 className="mb-2">Mini app</h6>
                        <ul>
                            <li><a className="small d-block" href="/miniapp/covid-19">Covid-19 Indonesia</a></li>
                            <li><a className="small d-block" href="/miniapp/weather">Weather</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-3">
                        <h6 className="mb-2">This template</h6>
                        <ul>
                            <li><a className="small d-block" href="https://github.com/AdhyWiranto44/web-profile-template/">Github</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-3">
                        <h6 className="mb-2">Made with</h6>
                        <ul>
                            <li><a className="small d-block" href="https://mongodb.org/">MongoDB</a></li>
                            <li><a className="small d-block" href="https://expressjs.com/">Express.js</a></li>
                            <li><a className="small d-block" href="https://getbootstrap.com/">Bootstrap</a></li>
                            <li><a className="small d-block" href="https://nodejs.org/en/">Node.js</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row pt-3 border-top border-light">
                    <div className="col-md-6 text-center text-md-left pb-3">
                        <small className="mr-2">&#169; {currentDate}. Made with &#10084; By {data.full_name}</small>
                    </div>
                    <div className="col-md-6 text-center text-md-right pb-3">
                        {data.social_media.map((socmed, idx) => {
                            return (
                                <a key={idx} href={socmed.link} className="h4 mx-1 text-secondary" title={socmed.title}><i className={socmed.icon}></i></a>    
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}
