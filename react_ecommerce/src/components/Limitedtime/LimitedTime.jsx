import React from "react"
import LimitedCard from "./LimitedCard"
import "./LimitedTime.css"

import {BsFillEyeFill} from 'react-icons/bs'
import {IconContext} from "react-icons";

import {BsStarFill} from 'react-icons/bs'
import {BsStarHalf} from 'react-icons/bs'
import {FaArrowRight} from 'react-icons/fa'
// import {BsStar} from 'react-icons/bs'

import { Row , Col } from 'reactstrap';

import Data from "./Data"

const LimitedTime = () => {

  const {productItems}  = Data
  return (
    <>
      <section className='flash'>
        <div className='container'>
          <div className='heading f_flex justify-content-center '>
            {/* <i className='fa fa-bolt'></i> */}
            <p className="category_heading ">proin gravida nibh vel velit auctor aliquet. aenean sollicitudin, lorem quis bibendum auctor, nisi elit.</p>
          </div>

          <Row className="trending__row">
            <Col md='6' className="d-flex justify-content-center align-items-center">
              <div className="card__container">
                <LimitedCard productItems={productItems}  />
              </div>
            </Col>
            <Col md='6'>
            <div className="limited__tshirt__details">
              <p className="limited__price"><span className='price__icon'>&#8377;</span>679</p>
              <h2>Marvel</h2>
              <p className="trending__stars">
                <BsStarFill/>
                <BsStarFill/>
                <BsStarFill/>
                <BsStarFill/>
                <BsStarHalf/>

              </p>

              <p className="limited__desc">proin gravida nibh vel velit auctor aliquet. aenean sollicitudin, nisi elit.</p>

              <div className="d-flex gap-2 mt-3">
                <button className="limited__view__btn" data-tooltip="View item">
                  <span className="btn__top">
                    <IconContext.Provider value={{ className:"icon"}}>
                    <BsFillEyeFill />
                    </IconContext.Provider>

                  </span>
                  <span className="btn__top">
                    <IconContext.Provider value={{ className:"icon__go"}}>
                    <FaArrowRight />
                    </IconContext.Provider>

                  </span>
                </button>
                
                <button className="limited__cart__btn"><span class="text">add to cart</span><span>Now!</span></button>

              </div>


            </div>
            </Col>

          </Row>

          {/* <div className="main__container">
            <div className="card__container">
              <LimitedCard productItems={productItems}  />
            </div>
            <div className="limited__tshirt__details">
              <p>$99</p>
              <h2>Marvel</h2>

              <p className="limited__desc">proin gravida nibh vel velit auctor aliquet. aenean sollicitudin, lorem quis bibendum auctor, nisi elit.</p>

              <button>add to cart</button>

            </div>

          </div> */}
        </div>
      </section>
    </>
  )
}

export default LimitedTime
