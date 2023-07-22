import React from 'react';
import logo from '../assets/collage-logo.png'

const Footer = () => {
    return (
        <div className=' mt-5'>
            <footer className="footer p-10  text-base-content">
                <div>
                    <div>
                        <img src={logo} alt="" className=' w-[250px]'  />
                    </div>
                    <p>Oneirocollage .<br />Providing admission support since 2006</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Colleges</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;