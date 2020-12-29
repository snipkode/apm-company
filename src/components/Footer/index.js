import React from 'react';
import Text from "../UI/Text";
import Widget from "../UI/Widget";
import List from "../UI/List";
import LI from "../UI/List/Item";
import {Link} from "react-router-dom";
import Logo from '../../assets/img/logo-dark.png'

function Footer() {
    return (
        <footer className="footer-area sp-bottom">
            <div className="container">
                <div className="row mtn-40">
                    <div className="col-lg-4 order-4 order-lg-0">
                        <div className="widget-item">
                            <div className="about-widget">
                                <Link to={`${process.env.PUBLIC_URL + "/"}`}>
                                    <img src={Logo} alt="Logo"/>
                                </Link>

                                <Text>
                                  Memberikan pelayanan terbaik dan menjaga keperyaan klien merupakan kewajiban kami.
                                </Text>

                                <Text classes="copyright-txt">
                                    &copy; {new Date().getFullYear()} PT Arkana Putra Mandiri. All Rights Reserved.
                                </Text>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-lg-2 ml-auto">
                        <Widget title="Information">
                            <List classes="widget-list">
                                <LI><Link to={`${process.env.PUBLIC_URL + "/about"}`}>Perusahaan</Link></LI>
                                <LI><Link to={`${process.env.PUBLIC_URL + "/contact"}`}>Kontak</Link></LI>
                                <LI><Link to={`${process.env.PUBLIC_URL + "/services"}`}>Layanan</Link></LI>
                                <LI><Link to={`${process.env.PUBLIC_URL + "/"}`}>Karir</Link></LI>
                            </List>
                        </Widget>
                    </div>

                    <div className="col-md-4 col-lg-2 ml-auto">
                        <Widget title="Social Links">
                            <List classes="widget-list">
                                <LI><Link to="https://facebook.com/" target={'_blank'}>Facebook</Link></LI>
                                <LI><Link to="https://twitter.com/" target={'_blank'}>Twitter</Link></LI>
                                <LI><Link to="https://dribbble.com/" target={'_blank'}>Dribbble</Link></LI>
                                <LI><Link to="https://www.instagram.com/" target={'_blank'}>Instagram</Link></LI>
                            </List>
                        </Widget>
                    </div>

                    <div className="col-md-4 col-lg-3">
                        <Widget title="Contact Us">
                            <address>
                                Jl. Banjarwaru RT 03/11, Desa Sindangbarang, Kecamatan Karangpucung.<br/>
                                Kode Pos 53255, Kab. Cilacap - Jawa Tengah<br/>
                                (+68) 120034509
                            </address>
                        </Widget>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;