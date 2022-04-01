import Navbar from '../components/Navbar';
import Head from 'next/head';

import data from '../data';
import Footer from '../components/Footer';


const HomeLayout = ({pageContent}) => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh"
    }}>
      <Head>
        <meta charset="utf-8" data-color-mode="light" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        
        <link rel="icon" href={`../img/${data.web_icon}`} />
        
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossOrigin="anonymous" />

        {/* <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" /> */}
        
        <link rel="stylesheet" href="../css/style.css" />
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" />

        {/* <script src="vendor/jquery/jquery.js"></script>
        <script src="vendor/jquery/jquery.easing.1.3.js"></script>
        <script src="vendor/popper/popper.min.js"></script> */}
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

      <Navbar />

      <div style={{
        flexGrow: 1,
        paddingTop: "100px",
        paddingBottom: "100px",
      }}>
        {pageContent}
      </div>

      <Footer />
    </div>
  );
}

export default HomeLayout;