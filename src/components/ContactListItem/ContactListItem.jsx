import React, { Component } from 'react'
import css from './ContactListItem.module.css'

export default class ContactListItem extends Component {
    render() {
    const {filteredContact, deleteInfo} = this.props
    
    return (
        <li className={css.contactList}>
            {filteredContact.name}: {filteredContact.number}
            <button className={css.listButton} onClick={() => {deleteInfo(filteredContact.id)}}> Delete</button>
        </li>
    )
}
}
