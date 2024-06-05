import React, { Component } from 'react'
import css from './Filter.module.css'

export default class Filter extends Component {
    
render() {
    const { filter, setFilter } = this.props
    
    const handleFilter = (e) => {
        
        setFilter(e.target.value)
    }
    return (
        <div>
            <h1>Contacts</h1>
            <label htmlFor="filter" className={css.filterLabel}>Find contacts by name</label>
            <input type="text" onChange={handleFilter} id="filter" value={filter}/>
    </div>
    )
}
}
