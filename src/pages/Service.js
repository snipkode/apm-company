import React,{Fragment} from 'react';
import Header from "../components/Header";
import PageHeader from "../components/PageHeader";
import PageAbout from "../components/About/page";
import Services from "../components/Services";
import PricingTable from "../components/PricingTable";
import Testimonial from "../components/Testimonials/home-two";
import BrandLogo from "../components/BrandLogo";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";

import ServiceThumb from '../assets/img/about.jpg'

const PageService = () => {
    return (
        <Fragment>
            <Header/>
            <PageHeader
                bgImg={require('../assets/img/page-header.jpg')}
                title="OUR SERVICES"
                content="Meningkatkan kinerja layanan yang lebih efektif dan aman. Baik di sektor Industri Digital, Bisnis, dan Lembaga atau Instansi"
            />
            <PageAbout
                title={'Our Services'}
                heading="Pembuatan <br/> Platform Digital Terbaik"
                thumb={ServiceThumb}
                content="<b>Kami </b> selalu berupaya membantu mewujudkan platform digital yang aman dan berkualitas, khususnya kemanan database pribadi pengguna"
            />
            <Services classes="sm-top"/>
            <PricingTable/>
            <Testimonial/>
            <BrandLogo/>
            <Funfact classes="sp-top"/>
            <CallToAction/>
            <Footer/>
            <LoginRegister/>
            <MobileMenu/>
        </Fragment>
    );
};

export default PageService;