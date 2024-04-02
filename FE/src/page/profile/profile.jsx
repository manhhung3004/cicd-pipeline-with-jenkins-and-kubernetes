import React from "react";
import styles from "./profile.module.css"; // Import file CSS module
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../header"
function Profile() {

    return (
        <div style={{ backgroundColor: '#fcf5ef' }}>
            <Header />
            <div class="container rounded bg-white mt-1" >
                <div class="row">
                    <div class="col-md-3 border-right">
                        <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span class="font-weight-bold">Edogaru</span><span class="text-black-50">edogaru@mail.com.my</span><span> </span></div>
                    </div>
                    <div class="col-md border-right">
                        <div class="p-3 py-5">
                            <div class="d-flex justify-content-between align-items-center mb-1">
                                <h2 class="text-right">Hồ sơ của tôi</h2>
                            </div>
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h5 class="text-right">Quản lý thông tin hồ sơ để bảo mật tài khoản</h5>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-6"><label class="labels">Name</label><input type="text" className={`form-control ${styles.formControl}`} placeholder="First name" /></div>
                                <div class="col-md-6"><label class="labels">LastName</label><input type="text" class="form-control" placeholder="surname" /></div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-12"><label class="labels">Mobile Number</label><input type="number" className={`form-control ${styles.formControl}`} placeholder="Enter phone number" /></div>
                                <div class="col-md-12"><label class="labels">Address</label><input type="text" class="form-control" placeholder="enter address " /></div>
                                <div className="col-md-12">
                                    <label className="labels">Email ID</label>
                                    <input type="email" className={`form-control ${styles.formControl}`} placeholder="Enter email id" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
                                </div>
                            </div>
                            <div class="mt-3 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
