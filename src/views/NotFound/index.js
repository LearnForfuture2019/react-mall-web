import React from "react";
import logo from '../../assets/imgs/404.jpg'
import './index.css'
export default class NotFound extends React.Component{
    render() {
        return (
            <div id='box'>
                <img src={logo} alt="404"/>
            </div>
        );
    }
}