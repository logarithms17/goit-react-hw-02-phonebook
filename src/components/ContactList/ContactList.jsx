import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ContactListItem from 'components/ContactListItem/ContactListItem'

export default class ContactList extends Component {
    
    render() {
    const { deleteInfo, filterContact } = this.props
        
    const filteredContact = filterContact()

    return (
        <ul>
            {filteredContact.map(filteredContact => (
                <ContactListItem key={filteredContact.id} filteredContact={filteredContact} deleteInfo={deleteInfo} /> 
            ))}
        </ul>
    )
}
}
ContactList.propTypes = {
    // filterInfo: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            // id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    )
}
