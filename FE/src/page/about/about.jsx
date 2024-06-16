import { useState } from "react";
import logo from "../../images/logo.jpg"
import pclayout from "../../images/pc_layout.png"
import icon1 from "../../icon/1.png"
import icon2 from "../../icon/2.png"
import icon3 from "../../icon/3.png"
import icon4 from "../../icon/4.png"

import service1 from "../../icon/service1.png"
import service2 from "../../icon/service2.png"
import service3 from "../../icon/service3.png"
import service4 from "../../icon/service4.png"
import service5 from "../../icon/service5.png"
import service6 from "../../icon/service6.png"

import Header from "../header"

function About() {
    return (
        <div class="main-layout">
            {/* <div class="loader_bg">
                <div class="loader"><img src="images/loading.gif" alt="#" /></div>
            </div> */}
            <Header />
            <div class="brand_color"  style={{ backgroundColor: '#ff7235' }}>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="titlepage">
                                <h2>about</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="about" >
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="about_box">
                                <figure><img src={pclayout} alt="pc layout"/></figure>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="about_box">
                                <h3>Who is Lighten</h3>
                                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum.</p>
                                <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="whyschose">
                <div class="container">

                    <div class="row">
                        <div class="col-md-7 offset-md-3">
                            <div class="title">
                                <h2>Why <strong class="black">choose us</strong></h2>
                                <span>Fastest repair service with best price!</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="choose_bg"  style={{ backgroundColor: '#ff7235' }}>
                <div class="container">
                    <div class="white_bg">
                        <div class="row">
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="for_box">
                                    <i><img src={icon1} alt="icon 1"/></i>
                                    <h3>Data recovery</h3>
                                    <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="for_box">
                                    {/* <i><img src="icon/2.png" /></i> */}
                                    <i><img src={icon2} alt="icon 2"/></i>
                                    <h3>Computer repair</h3>
                                    <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="for_box">
                                <i><img src={icon3} alt="icon 3"/></i>
                                    {/* <i><img src="icon/3.png" /></i> */}
                                    <h3>Mobile service</h3>
                                    <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="for_box">
                                    {/* <i><img src="icon/4.png" /></i> */}
                                    <i><img src={icon4} alt="icon 4"/></i>
                                    <h3>Network solutions</h3>
                                    <p>Perspiciatis eos quos totam cum minima autPerspiciatis eos quos</p>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <a class="read-more">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="service" >
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 offset-md-2">
                            <div class="title">
                                <h2>service <strong class="black">proces</strong></h2>
                                <span>Easy and effective way to get your device repaired.</span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div class="service-box">
                                {/* <i><img src="icon/service1.png" /></i> */}
                                <i><img src={service1} alt="service 1"/></i>
                                <h3>Fast service</h3>
                                <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div class="service-box">
                                {/* <i><img src="icon/service2.png" /></i> */}
                                <i><img src={service2} alt="service 2"/></i>
                                <h3>Secure payments</h3>
                                <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div class="service-box">
                                {/* <i><img src="icon/service3.png" /></i> */}
                                <i><img src={service3} alt="service 3"/></i>
                                <h3>Expert team</h3>
                                <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div class="service-box">
                                {/* <i><img src="icon/service4.png" /></i> */}
                                <i><img src={service4} alt="service 4"/></i>
                                <h3>Affordable services</h3>
                                <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div class="service-box">
                                {/* <i><img src="icon/service5.png" /></i> */}
                                <i><img src={service5} alt="service 5"/></i>
                                <h3>90 Days warranty</h3>
                                <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div class="service-box">
                                {/* <i><img src="icon/service6.png" /></i> */}
                                <i><img src={service6} alt="service 6"/></i>
                                <h3>Award winning</h3>
                                <p>Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footr>
                <div class="footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6 offset-md-3">
                                <ul class="sociel">
                                    <li> <a href="#"><i class="fa fa-facebook-f"></i></a></li>
                                    <li> <a href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li> <a href="#"><i class="fa fa-instagram"></i></a></li>
                                    <li> <a href="#"><i class="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="contact">
                                    <h3>conatct us</h3>
                                    <span>123 Second Street Fifth Avenue,
                                        Manhattan, New York
                                        +987 654 3210</span>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="contact">
                                    <h3>ADDITIONAL LINKS</h3>
                                    <ul class="lik">
                                        <li> <a href="#">About us</a></li>
                                        <li> <a href="#">Terms and conditions</a></li>
                                        <li> <a href="#">Privacy policy</a></li>
                                        <li> <a href="#">News</a></li>
                                        <li> <a href="#">Contact us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="contact">
                                    <h3>service</h3>
                                    <ul class="lik">
                                        <li> <a href="#"> Data recovery</a></li>
                                        <li> <a href="#">Computer repair</a></li>
                                        <li> <a href="#">Mobile service</a></li>
                                        <li> <a href="#">Network solutions</a></li>
                                        <li> <a href="#">Technical support</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="contact">
                                    <h3>IT NEXT THEME</h3>
                                    <span>Tincidunt elit magnis
                                        nulla facilisis. Dolor
                                        sagittis maecenas.
                                        Sapien nunc amet
                                        ultrices, </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footr>
            <script src="js/jquery.min.js"></script>
            <script src="js/popper.min.js"></script>
            <script src="js/bootstrap.bundle.min.js"></script>
            <script src="js/jquery-3.0.0.min.js"></script>
            <script src="js/plugin.js"></script>

            <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
            <script src="js/custom.js"></script>
            <script src="https:cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js"></script>
        </div>
    )
}

export default About;

//test9-2
