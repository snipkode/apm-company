import React, {Component} from 'react';
import logo from '../../assets/img/logo-50.png'

class Logo extends Component {
    render() {
        return (
            <div className="logo-area">
                <a href="/"><img src={logo} alt="Arkana-Logo" style={{maxWidth: "100%"}}/></a>
            </div>
        );
    }
}

export default Logo;