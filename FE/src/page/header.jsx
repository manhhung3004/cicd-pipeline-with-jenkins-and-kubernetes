
import React from "react";
import logo from "../images/logo.jpg"

function Header({ isLoggedIn, handleLogout, handleLogin }) {
    return (
        <div class="main-layout" >
                <header>
                    <div class="header" style={{ backgroundColor: '#fcf5ef' }}>
                        <div class="head_top" style={{ backgroundColor: '#ff7235' }}>
                            <div class="container">
                                <div class="row">
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div class="top-box">
                                            <ul class="sociel_link">
                                                <li> <a href="#"><i class="fa fa-facebook-f"></i></a></li>
                                                <li> <a href="#"><i class="fa fa-twitter"></i></a></li>
                                                <li> <a href="#"><i class="fa fa-instagram"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                        <div class="top-box">
                                            <p>Web lỏ design by Manhung ft Dinkhoi </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container" >
                            <div class="row">
                                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                                    <div class="full">
                                        <div class="center-desk">
                                            <div class="logo"> <a href="/"><img src={logo} alt="logo" /></a> </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-7 col-lg-7 col-md-9 col-sm-9">
                                    <div class="menu-area">
                                        <div class="limit-box">
                                            <nav class="main-menu">
                                                <ul class="menu-area-main">
                                                    <li class="active"> <a href="/" style={{ color: '#ff7235' }}>Home</a> </li>
                                                    <li> <a href="/About">About</a> </li>
                                                    <li> <a href="/Product">product</a> </li>
                                                    <li> <a href="/Blog"> Blog</a> </li>
                                                    <li> <a href="/Contact">Contact</a> </li>
                                                    <li class="mean-last"> <a href="/Register">signup</a> </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2" id="loginContainer">
                                    {isLoggedIn ? (
                                        <li id="logoutButton"><a class="buy" style={{ backgroundColor: '#ff7235', color: '#fcf5ef' }} href="#" onClick={handleLogout}>Logout</a></li>
                                    ) : (
                                        <li id="loginButton"><a class="buy" style={{ backgroundColor: '#ff7235', color: '#fcf5ef' }} href="/login" onClick={handleLogin}>Login</a></li>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
    );
}

export default Header;