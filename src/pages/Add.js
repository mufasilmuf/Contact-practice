import React, { useState } from 'react';

import Header from "../components/header";

const Add = (props) => {
    const { contact } = props;

    //state even ever update happen it will render the components...
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const submit = (e) => {
        e.preventDefault();
        const newData = {
            id: contact.length + 1,
            name,
            phone
        }
        contact.push(newData)
        setName('')
        setPhone('')
    }

    return (
        <div>
            <Header />
            <section className='section_body_add'>
                <form onSubmit={submit}>
                    <section>
                        <label>Name</label>
                        <input type={"text"} name="name" placeholder='Enter a name' value={name} onChange={(e) => setName(e.target.value)} />
                    </section>
                    <section>
                        <label>Phone</label>
                        <input type={"number"} name="phone" placeholder='Enter a mobile number' value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </section>
                    <div className='btn-submit'>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Add;