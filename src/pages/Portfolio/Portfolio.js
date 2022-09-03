import React from 'react';
import { Link } from 'react-router-dom';
import pic from '../../images/pi.jpg';
import Footer from '../shared/Footer';
const Portfolio = () => {
    return (
        <div>
            <div className="mx-8">

                <h3 className='my-3'>About The <span style={{ color: "tomato" }}>Developer</span>  </h3>

                <div class="avatar my-12">

                    <div class="w-32 rounded">
                        <img src={pic} />
                    </div>


                </div>
                <div class="card mx-auto px-6 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h2 className='text-primary-focus text-2xl'>Raian Ibn Faiz</h2>
                        <h4>Educational Background:</h4>
                        <h3>B.Sc in Computer Science</h3>
                        <h2><span style={{ color: "goldenRod" }}>Institution: </span>Brac University</h2>

                    </div>
                </div>
                <div class="card mx-auto px-6 bg-base-100 shadow-xl mt-5">
                    <div class="card-body">


                        <p className='text-justify font-bold'> I am the developer of this website. I have used reactJs, react router dom, javascript xml, firebase authentication , mongodb database , express js. I have  some knowledge about backend and trying to expand my knowledge about backend to develop the backend of website. Therefore my target is to be a skilled full stack developer. I am preparing myself for reaching my goal. I have done some of the small projects. You can check those projects from below-</p>

                    </div>
                </div>
                <div class="card mx-auto my-8 bg-base-100 shadow-xl">
                    <div class="card-body">

                        <p>Project 1 : Bicycle Warehouse Management Store (Go to Website:<a className='text-primary-focus mb-4' target="_blank" href='https://warehouse-management-92018.web.app/'> Click Here</a> )</p>
                        <p>Project 2 : Independent Photography Service (Go to Website:<a className='text-primary-focus mb-4' target="_blank" href='https://independent-service-prov-b72f0.web.app/'> Click Here</a> )</p>
                        <p>Project 3 : Boots Shop Products Analysis (Go to Website:<a className='text-primary-focus mb-4' target="_blank" href='https://product-analysis-website-raianibnfaiz.netlify.app/'> Click Here</a> )</p>

                    </div>
                    <h3>My GitHub : <a style={{ color: "blue" }} href="https://github.com/raianibnfaiz"> Link</a></h3>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Portfolio;