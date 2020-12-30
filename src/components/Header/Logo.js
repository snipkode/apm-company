import React, {Component} from 'react';
import logo from '../../assets/img/logo-hd-trans.png'

class Logo extends Component {
    render() {
        return (
            <div className="logo-area">
                <a href="/"><img src={logo} alt="Arkana-Logo" style={{maxWidth: "250px"}}/></a>
            </div>
        );
    }
}

export default Logo;