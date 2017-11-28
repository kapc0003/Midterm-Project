import ReactDOM from 'react-dom';
import React from 'react';
import ContactList from './components/ContactList.jsx';
import ContactDetail from './components/ContactDetail.jsx';
import {contacts} from './data/contacts';

let state = {};

//On hash change
window.addEventListener('hashchange', ()=>setState({location: location.hash}));

function setState(changes){
    state = Object.assign({}, state, changes);
    
    let item;
    let location = state.location.replace(/^#\/?|\/$/g, '').split('/');
    
    //Routing
    if (location[0] === 'contact' ){
        item = state.items.find(item => item.id == location[1] ? true : false);
    }
    
    const MainView = (
        <div className='wrap'>
            <ContactList items = {state.items} />
            <ContactDetail item = {item}/>
        </div>
    ); 
    
    ReactDOM.render(MainView, document.getElementById('react-app'));
}

//Initial State
setState({
    items: contacts,
    location: location.hash
});