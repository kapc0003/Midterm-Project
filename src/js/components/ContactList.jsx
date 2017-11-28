import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {formatName, formatDOB} from '../common';

export default class ContactList extends Component {
    render() {
        return (
            <div className='container list'>
                <li><i>Scroll to view more Contacts</i></li>
                <ul>
                    {this.props.items.map(item => (
                        <li key={item.key}>
                            <a href={'#contact/' + item.id}>
                                <figure>
                                    <img src={item.picture.thumbnail} alt={formatName(item.name)}/>
                                    <figcaption>
                                        <p>{formatName(item.name)}</p>
                                        <span>{formatDOB(item.dob)}</span>
                                    </figcaption>
                                </figure>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

ContactList.propTypes = {
    items: PropTypes.array
};