import React from 'react'

import "../style/contactCard.css";

const ContactCard = (props) => {
    const { name, phone } = props;

    return (
        <div className='contactCard'>
            <p className='name'>{name}</p>
            <p className='number'>{phone}</p>
            <div className='btn_group'>
                <button className='btn_edit'>Edit</button>
                <button className='btn_delete'>Delete</button>
            </div>
        </div>
    )
}

export default ContactCard;