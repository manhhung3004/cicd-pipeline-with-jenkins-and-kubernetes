// import React from 'react';
import React, { useState, useEffect } from 'react';
import styles from "./services.module.css"; // Import file CSS module
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../header"
import Footr from "../footr"
function Services() {
    useEffect(() => {
        const tabLinks = document.querySelectorAll('.menu-item a');
        const tabContents = document.querySelectorAll('.tabcontent');
        // Function to handle tab click
        const handleTabClick = function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            const tabId = this.getAttribute('data-tab');
            // Ẩn tất cả nội dung tab
            tabContents.forEach(function (content) {
                content.style.display = 'none';
            });
            // Remove 'active' class từ tất cả các liên kết tab
            tabLinks.forEach(function (link) {
                link.classList.remove('active');
            });
            // Hiển thị nội dung tab được nhấp
            document.getElementById(tabId).style.display = 'block';
            // Thêm lớp 'active' vào liên kết tab được nhấp
            this.classList.add('active');
        };
        // Loại bỏ các event listener cũ trước khi thêm mới
        tabLinks.forEach(function (link) {
            link.removeEventListener('click', handleTabClick);
        });
        // Thêm event listener mới cho mỗi tab link
        tabLinks.forEach(function (link) {
            link.addEventListener('click', handleTabClick);
        });
    }, []);
    return (
        <div style={{ backgroundColor: '#fcf5ef' }}>
            <Header />
            <div class="brand_color" style={{ backgroundColor: '#ff7235' }}>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="titlepage">
                                <h2>Our Services</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="title center">
                                <span>Our products with the best to make you a happy customer.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="choose_bg mt-3 mb-3" style={{ backgroundColor: '#fff' }}>
                <div className="container">
                    <div className="white_bg">
                        <div className="row">
                            <div className="col-xl-7 col-lg-7 col-md-9 col-sm-9 mx-auto">
                                <div className="menu-area">
                                    <div className="limit-box">
                                        <nav className="main-menu">
                                            <ul className="menu-area-main center" style={{ listStyle: 'none', padding: 0 }}>
                                                <li className="menu-item"> <a data-tab="Datarecovery">Data recovery</a> </li>
                                                <li className="menu-item"> <a data-tab="ComputerRepair">Computer repair</a> </li>
                                                <li className="menu-item"> <a data-tab="MobileServices">Mobile service</a> </li>
                                                <li className="menu-item"> <a data-tab="NetworkSolution">Network solutions</a> </li>
                                            </ul>
                                            <div id="Datarecovery" className={styles.tabcontent}>
                                                <h2>Data Recovery Content</h2>
                                                <p>This is the content for data recovery.</p>
                                            </div>

                                            <div id="ComputerRepair" className={styles.tabcontent}>
                                                <h2>Computer Repair Content</h2>
                                                <p>This is the content for computer repair.</p>
                                            </div>

                                            <div id="MobileServices" className={styles.tabcontent}>
                                                <h2>Mobile Services Content</h2>
                                                <p>This is the content for mobile services.</p>
                                            </div>

                                            <div id="NetworkSolution" className={styles.tabcontent}>
                                                <h2>Network Solutions Content</h2>
                                                <p>This is the content for network solutions.</p>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footr />
        </div>
    );
}

export default Services;
