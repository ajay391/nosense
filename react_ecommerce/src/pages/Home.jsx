import React , {useState , useEffect} from 'react'

import { Container , Row , Col } from 'reactstrap';
import { Link } from 'react-router-dom';

// import {motion} from "framer-motion"
import Helmet from '../components/Helmet/Helmet';

import '../styles/home.css'

import popular from '../assets/data/popular';
import ProductList from '../components/ProductList/ProductList';
import LimitedTime from '../components/Limitedtime/LimitedTime';

import SliderHome from '../components/Slider/Slider';
import ThreeDSlider from '../components/ThreeDSlider/ThreeDSlider';

import {BiSolidUpArrow} from 'react-icons/bi'
import {FiArrowUpRight} from 'react-icons/fi'
import {BiShoppingBag} from 'react-icons/bi'
import {PiArrowsCounterClockwiseFill} from 'react-icons/pi'
import {FiTruck} from 'react-icons/fi'
import {BiSolidOffer} from 'react-icons/bi'


import about1 from '../assets/images/about_1.jpg';
import about2 from '../assets/images/about2.jpg';

import userIcon from "../assets/images/user-icon.png"

// import { Carousel } from '3d-react-carousal' ;
import Data from "../components/Limitedtime/Data"


const Home = () => {

  const shop = '/shop';

  const [data, setData] = useState(popular);

  useEffect(()=>{
    const popularProducts = popular.filter((item) => item.type === 'popular');

    setData(popularProducts)
  },[]);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to check whether the button should be visible
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  // Instagram image array
  // let slides = [
  //   <img  src={img1} alt="1" />,
  //   <img  src={img2} alt="2" />  ,
  //   <img  src={img3} alt="3" />  ,
  //   <img  src={img4} alt="4" />  ,
  //   <img  src={img5} alt="5" />  
  // ];

  const {productItems}  = Data
  // const year =new Date().getFullYear()
  return (
    <Helmet title={"Home"}>
      {/* <section className="hero__section" >
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero__content">
                <p className="hero__subtitle">Trending products in {year}</p>
                <h2>Make Your Clothing More Attractive.</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <motion.button whileTap={{scale:1.2}} className='buy__btn'><Link to='/shop'>SHOP NOW</Link></motion.button>
              </div>
            </Col>
            
          </Row>
        </Container>
      </section> */}
    
      <SliderHome/>

      <section className="trending__items" >
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className="section__title">Popular Items</h2>
            </Col>
            <Col lg='12' className='text-end'>
              <Link to={shop} className='popular__view__all'><span>View All</span></Link>
            </Col>
            <ProductList data={data}/>
          </Row>
        </Container>
      </section>


      {/* about */}

      <section className='about__us__section'>
        <Row className='gx-0'>
          <Col lg='6' md='6' className='about__col__1' style={{ backgroundImage: `url(${about1})`}}>
            
          </Col>
          <Col lg='6' md='6' className='about__col__2' style={{ backgroundImage: `url(${about2})`}}>
            <div className='about__div'>
              <h1 className='about__heading'>for the occassion</h1>
              <p className='about__paragraph'>proin gravida nibh vel velit auctor aliquet. aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec</p>
              <a class="fancy" href="/home">
                <span class="top-key"></span>
                <span class="text">Learn More</span>
                <span class="bottom-key-1"></span>
                <span class="bottom-key-2"></span>
              </a>

            </div>
          </Col>

        </Row>
        
      </section>

      {/* about */}

      {/* Limited */}

      <section className='limited__time'>

        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className="section__title">Trending Item</h2>
            </Col>
            <Col>
              <LimitedTime/>
            </Col>

          </Row>
        </Container>
        
      </section>

      {/* Limited */}





      {/* send review */}
      <section className="insta__sec">

        <Container>
          <Row className='insta__row gx-0' style={{}}>
          
            <Col lg='4' md='4' className='follow_on_insta' >
              <div class="insta__card">
                <h3 class="title">Follow Us On Instagram</h3>
                
                <div className="insta__actions ">
                  <div className="insta_img_followers">
                    <img className="insta__usericon" src={userIcon} alt="" />
                    <div className='insta_name_count'>
                      <h6>nosense</h6>
                      <p>12k followers</p>
                    </div>
                  </div>
                 
                  <a className='instal_follow_btn' href='https://instagram.com/nosense_studio?igshid=MzRlODBiNWFlZA=='>Follow <span><FiArrowUpRight/></span> </a>
                </div>
              </div>
            </Col>
            <Col md='8' className="d-flex justify-content-center align-items-center">
              <div className="insta__container">
                {/* <Carousel slides={slides} autoplay={false} interval={4000} arrows={false}/> */}
               <ThreeDSlider/>
              </div>
            </Col>
          </Row>
        </Container>

      </section>
      {/* send review */}

      {/* banner */}
      <section className="banner__section">


      <Row className=' gx-0' style={{}}>
      <div class="card-container-main">
          
          <div class="card-grid-container">
            <div class="grid-card">
              
              <h2><BiSolidOffer /></h2>
              <h3>Trendy outfits at unbeatable costs.</h3>
              <p>Discover unbeatable deals on trendy outfits that effortlessly combine style and savings.</p>
            </div>
            <div class="grid-card">
              
              <h2><FiTruck /></h2>
              <h3>Free delivery Above 1000</h3>
              <p>Enjoy the added convenience of free delivery on orders above 1000.</p>
            </div>
            <div class="grid-card">
              
              <h2><PiArrowsCounterClockwiseFill /></h2>
              <h3>14 days return</h3>
              <p>Shop now - returns made easy with 14 days to decide!</p>
            </div>
            <div class="grid-card">
              
              <h2><BiShoppingBag /></h2>
              <h3>Shop Now for Instant Savings!</h3>
              <p>Unlock instant savings by shopping with us today!</p>
            </div>
          </div>
        </div>
        
        {/* <Col lg='3' md='3' >
          <div  className='banner__content'>
            <BiShoppingBag className='banner__icon'/>
           
            <h4>Trendy outfits at unbeatable costs.</h4>
          </div>
        </Col>

        <Col lg='3' md='3' className='' >
          <div  className='banner__content'>
          <FiTruck className='banner__icon'/>
            <h4>Free delivery Above 1000</h4>
          </div>
          
        </Col>
        <Col lg='3' md='3' className='' >
          <div  className='banner__content'>
          <TbTruckReturn className='banner__icon'/>
            <h4>14 days return</h4>
          </div>
          
        </Col>
        <Col lg='3' md='3' className='' >
        <div  className='banner__content'>
        <BiSolidOffer className='banner__icon'/>
          <h4>Shop Now for Instant Savings!</h4>
        </div>
          
        </Col> */}
      </Row>


      </section>
      {/* banner end */}
          

      {/* review */}
      {/* <section className="reviews">

        <Container>
          <Row>
          <Col lg='12' className='text-center'>
              <h2 className="section__title">Top Reviews</h2>
            </Col>
            <Col lg='4' md='4' className='' >
            <div class="cookie-card">
                  <span class="title">username</span>
                  <p class="description">proin gravida nibh vel velit auctor aliquet. aenean sollicitudin, nisi elit. </p>
                  <div class="actions">
                     
                  </div>
              </div>
            </Col>
          </Row>
        </Container>

      </section> */}
      {/* review */}

      {/* to top arrow start */}

      <div className='to-top-icon-section'>
        <button className={`to-top-button ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}>
          <BiSolidUpArrow/>
        </button>
      </div>

       {/* to top arrow end */}
     
    </Helmet>
  )
}

export default Home