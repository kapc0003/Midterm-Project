import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {formatName, formatDOB, getAge, formatLocation} from '../common';

export default class ContactDetail extends Component {
    render() {
        if (!this.props.item) {
            return (
                <div className='container details'>
                    <p>Click on a Contact to the left</p>
                </div>
            );
        } else {
            return (
                <div className='container details'>

                    <h1>{formatName(this.props.item.name)}</h1>

                    <div className='DOB'>
                        <p><b>D.O.B:</b> {formatDOB(this.props.item.dob)} ({getAge(this.props.item.dob)} years old)</p>
                    </div>

                    <div className='Location'>
                        <p>{formatLocation(this.props.item.location, 1)}</p>
                        <p>{formatLocation(this.props.item.location, 2)}</p>
                        <p>{formatLocation(this.props.item.location, 3)}</p>
                    </div>

                    <div className='Info'>
                        <p><b>Email:</b> {this.props.item.email}</p>
                        <p><b>Phone:</b> {this.props.item.phone}</p>
                    </div>

                    <div>
                        <figure>
                            <img src={this.props.item.picture.large} alt={formatName(this.props.item.name)}/>
                        </figure>
                    </div>

                </div>
            );
        }
    }
}

ContactDetail.propTypes = {
    item: PropTypes.object
};