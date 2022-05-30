import data from '../data';
import HomeLayout from '../layouts/home';


const Portfolio = () => {
  return (
    <HomeLayout
      pageContent={
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
                  <div className="card shadow-lg border-0">
                    <img src={`../img/portfolio/${portfolio.img}`} className="card-img-top" alt="portfolio" />
                    <div className="card-body">
                      <h5 className="card-title mb-0">{portfolio.heading}</h5>
                      <p className="mb-3 fw-bold small">{portfolio.year}</p>
                      <p className="card-text text-justify">{portfolio.description}</p>
                      <small className="text-muted d-block mb-1">Technology</small>
                      {portfolio.technology.map((tech, idx) => {
                        return (
                          <p key={idx} className="h4 me-1 d-inline" title={tech.title} style={{ opacity: ".5" }}><i className={tech.icon}></i></p>
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
      }
    />
  )
}

export default Portfolio;