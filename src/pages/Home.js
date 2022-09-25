import React from 'react'
import ContactCard from '../components/contactCard';

import Header from "../components/header";
import '.././App.css';

const Home = (props) => {
    const { contact } = props;

    return (
        <div>
            <Header />
            <div className='bodySection_home'>
                {contact.map((contact) => <ContactCard key={contact.id} name={contact.name} phone={contact.phone} />)}
            </div>
        </div>
    )
}

export default Home;