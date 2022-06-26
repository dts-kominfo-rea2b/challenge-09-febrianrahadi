// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import './Header.css';

const Header = (props) => {
    return (
        <div style={{width:'100%'}}>
            <table style={{width:'100%'}}>
                <tr>
                    <td><h1>{ props.title }</h1></td>
                    <td><h1>Call a Friend</h1></td>
                </tr>
                <tr>
                    <td><p>{ props.subtitle }</p></td>
                    <td><p>your friendly contact app</p></td>
                </tr>
                <tr>
                    <td><hr className="hrStyle"/></td>
                </tr>
            </table>
        </div>
    )
}

export default Header;