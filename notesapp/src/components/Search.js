
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { findNote } from '../redux/noteSlice'


export default function Search() {
    const search = useSelector(state => state.notes.search)

    const dispatch = useDispatch();

    return (
        <div>

            <input type="search"
                className='input'
                placeholder='Search Notes'
                value={search}
                onChange={(e) => dispatch(findNote(e.target.value))} />
        </div>
    )
}
