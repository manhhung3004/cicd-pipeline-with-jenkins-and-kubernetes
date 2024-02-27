import { useState } from "react";

import '../../css/style.css'
import '../../css/bootstrap.min.css'
import '../../css/responsive.css'

import logo from "../../images/logo.jpg"

import p1 from "../../icon/p1.png"
import p2 from "../../icon/p2.png"
import p3 from "../../icon/p3.png"
import p4 from "../../icon/p4.png"
import p5 from "../../icon/p5.png"
import p6 from "../../icon/p6.png"
import p7 from "../../icon/p7.png"

function Product() {
    return (
        <div class="main-layout product_page">
            {/* <div class="loader_bg">
                <div class="loader"><img src="images/loading.gif" alt="#" /></div>
            </div> */}
            <header>
                <div class="header">
                    <div class="head_top">
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div class="top-box">
                                        <ul class="sociel_link">
                                            <li> <a href="#"><i class="fa fa-facebook-f"></i></a></li>
                                            <li> <a href="#"><i class="fa fa-twitter"></i></a></li>
                                            <li> <a href="#"><i class="fa fa-instagram"></i></a></li>
                                            <li> <a href="#"><i class="fa fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div class="top-box">
                                        <p>long established fact that a reader will be </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                                <div class="full">
                                    <div class="center-desk">
                                    <div class="logo"> <a href=""><img src={logo} alt="logo"/></a> </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-7 col-lg-7 col-md-9 col-sm-9">
                                <div class="menu-area">
                                    <div class="limit-box">
                                        <nav class="main-menu">
                                            <ul class="menu-area-main">
                                                <li > <a href="/">Home</a> </li>
                                                <li> <a href="about">About</a> </li>
                                                <li class="active"> <a href="product">product</a> </li>
                                                <li> <a href="blog"> Blog</a> </li>
                                                <li> <a href="contact">Contact</a> </li>
                                                <li class="mean-last"> <a href="#contact">signup</a> </li>

                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                <li><a class="buy" href="#">Login</a></li>
                            </div>
                        </div>
                    </div>
                </div>

            </header>

            <div class="brand_color">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="titlepage">
                                <h2>our product</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="product">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="title">
                                <span>We package the products with best services to make you a happy customer.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-bg">
                <div class="product-bg-white">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="product-box">
                                    {/* <i><img src="icon/p1.png" /></i> */}
                                    <i><img src={p1} alt="p1"/></i>
                                    <h3>Norton Internet Security</h3>
                                    <span>$25.00</span>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="product-box">
                                    {/* <i><img src="icon/p2.png" /></i> */}
                                    <i><img src={p2} alt="p2"/></i>
                                    <h3>Norton Internet Security</h3>
                                    <span>$25.00</span>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="product-box">
                                    {/* <i><img src="icon/p3.png" /></i> */}
                                    <i><img src={p3} alt="p3"/></i>
                                    <h3>Norton Internet Security</h3>
                                    <span>$25.00</span>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="product-box">
                                    {/* <i><img src="icon/p4.png" /></i> */}
                                    <i><img src={p4} alt="p4"/></i>
                                    <h3>Norton Internet Security</h3>
                                    <span>$25.00</span>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="product-box">
                                    {/* <i><img src="icon/p5.png" /></i> */}
                                    <i><img src={p5} alt="p5"/></i>
                                    <h3>Norton Internet Security</h3>
                                    <span>$25.00</span>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="product-box">
                                    {/* <i><img src="icon/p2.png" /></i> */}
                                    <i><img src={p2} alt="p2"/></i>
                                    <h3>Norton Internet Security</h3>
                                    <span>$25.00</span>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="product-box">
                                    {/* <i><img src="icon/p6.png" /></i> */}
                                    <i><img src={p6} alt="p6"/></i>
                                    <h3>Norton Internet Security</h3>
                                    <span>$25.00</span>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="product-box">
                                    {/* <i><img src="icon/p7.png" /></i> */}
                                    <i><img src={p7} alt="p7"/></i>
                                    <h3>Norton Internet Security</h3>
                                    <span>$25.00</span>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="product-box">
                                    {/* <i><img src="icon/p6.png" /></i> */}
                                    <i><img src={p6} alt="p6"/></i>
                                    <h3>Norton Internet Security</h3>
                                    <span>$25.00</span>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="product-box">
                                    {/* <i><img src="icon/p1.png" /></i> */}
                                    <i><img src={p1} alt="p1"/></i>
                                    <h3>Norton Internet Security</h3>
                                    <span>$25.00</span>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="product-box">
                                    {/* <i><img src="icon/p2.png" /></i> */}
                                    <i><img src={p2} alt="p2"/></i>
                                    <h3>Norton Internet Security</h3>
                                    <span>$25.00</span>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                <div class="product-box">
                                    {/* <i><img src="icon/p4.png" /></i> */}
                                    <i><img src={p4} alt="p4"/></i>
                                    <h3>Norton Internet Security</h3>
                                    <span>$25.00</span>
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
        </div>
    )
}

export default Product;