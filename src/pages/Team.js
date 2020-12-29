import React,{Fragment} from 'react';
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import About from "../components/About/page";
import TeamMember from '../templates/Team'
import BrandLogo from "../components/BrandLogo";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";

import ServiceThumb from '../assets/img/about.jpg'

const PageTeam = () => {
    return (
        <Fragment>
            <Header/>
            <PageHeader
                bgImg={require('../assets/img/page-header.jpg')}
                title="KNOW ABOUT THE ULTIMATE SOLID TEAM"
                content="Kami berkomitmen untuk menjaga kepercayaan dan saling menguntungkan dalam berbisnis"
            />
            <About
                title={'Our Team'}
                heading="Meet Our <br/> Expert Member"
                thumb={ServiceThumb}
                content="<b>Kami</b> senang bertemu secara langsung jika anda memiliki rencana skala besar untuk mendapatkan pemahaman dan solusi yang lebih baik"
            />
            <TeamMember/>
            <BrandLogo/>
            <Funfact classes="sp-top"/>
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
            <MobileMenu/>
        </Fragment>
    );
};

export default PageTeam;