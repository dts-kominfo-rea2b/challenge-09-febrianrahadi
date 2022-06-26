// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';

const Contact = (props) => {
    return (
        <div className='divStyle'>
            <table style={{width:'100%'}}>
                <colgroup><col style={{ width: '30%' }}/><col style={{ width: '70%' }}/></colgroup>
                <tr>
                    <td rowSpan={4}>
                        <img style={{borderRadius:'50%'}} width={150} src={props.data.photo} alt="f" />
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>{props.data.name}</td>
                </tr>
                <tr>
                    <td colSpan={2}>{props.data.phone}</td>
                </tr>
                <tr>
                    <td colSpan={2}>{props.data.email}</td>
                </tr>
            </table>
        </div>
    )
}

export default Contact;