import React, {Component} from 'react';
import logo from '../../assets/img/logo.png'

class Logo extends Component {
    render() {
        return (
            <div className="logo-area">
                <a href="/"><img src={logo} alt="Businex-Logo" style={{maxWidth: 80, maxHeight: 80}} /></a>
            </div>
        );
    }
}

export default Logo;