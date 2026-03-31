import Header from '../components/Header';
import Footer from '../components/Footer';
import PageBanner from '../components/PageBanner';
import CTASection from '../components/CTASection';
import '../styles/Services.css';
import img1 from "../assets/credentialing.webp";
import img2 from "../assets/benefits.webp";
import img3 from "../assets/coding.webp";
import img4 from "../assets/chargeservice.webp";
import img5 from "../assets/paytemproc.webp";
import img6 from "../assets/ArDenial.webp";
import img7 from "../assets/virtualAdminist.webp";
import img8 from "../assets/reporting.webp";
import '../pages/Servicespage.css';
import { Link } from 'react-router-dom';
const services = [
  {
    title: "Credentialing & Enrolment Services",
    desc: "Credentialing is one of the biggest bottlenecks in healthcare and one of the most overlooked.",
    img: img1,
  },
  {
    title: "Eligibility & Benefits Verification Services",
    desc: "Eligibility issues are one of the top reasons claims get denied. At Rapid RCM Solutions, we verify patient insurance",
    img: img2,
  },
  {
    title: "Medical Coding Services",
    desc: "Incorrect or inconsistent coding can cost you thousands. At Rapid RCM Solutions, our certified medical coders handle everything.",
    img: img3,
  },
  {
    title: "Charges Entry Services",
    desc: "One wrong code, one missed modifier, and you're facing denials. At Rapid RCM Solutions, we ensure every charge is entered accurately,",
    img: img4,
  },
  {
    title: "Payment Posting Services",
    desc: "Accurate payment posting is more than just data entry—it’s the foundation of your revenue cycle. At Rapid RCM Solutions",
    img: img5,
  },
  {
    title: "AR & Denial Management Services",
    desc: "Delayed payments, denied claims, and aging AR are signs of deeper billing problems. At Rapid RCM Solutions..",
    img: img6,
  },
  {
    title: "Virtual Administrative Assistant Services",
    desc: "Managing a healthcare practice means endless tasks: scheduling, paperwork, phone calls, and all the behind-the-scenes work..",
    img: img7,
  },
  {
    title: "Reporting Services",
    desc: "Without clear reports, running your practice can feel like driving in the dark. You’re moving, but you don’t know your real progress..",
    img: img8,
  },
];

const Services = () => {
  return (
    <>
      <Header />
      <PageBanner
        title="Our Services"
        subtitle="Comprehensive revenue cycle management solutions tailored to your practice's unique needs."
        currentPage="Services"
      />

     <section className="all-services">
      <div className="container">

        <div className="grid">
          {services.map((item, index) => (
            <div className="card" key={index}>
              
              <div className="image">
                <img src={item.img} alt={item.title} />
              </div>

              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>

                <Link to="/services" className="link"> View More →</Link>
                
                
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>

      <CTASection />
      <Footer />
    </>
  );
};

export default Services;