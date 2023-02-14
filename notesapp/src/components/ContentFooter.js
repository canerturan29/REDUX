

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNote } from '../redux/noteSlice';

function ContentFooter() {
    const items = useSelector(state => state.notes.items);
    const searchText = useSelector(state => state.notes.search);
    const dispatch = useDispatch();

    const filtered = items.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key].toString().toLowerCase().includes(searchText.toLowerCase())
        );
    });
    return (
        <div className="notes">
            {
                filtered.map(item => (
                    <div key={item.id} className="note" style={{ backgroundColor: `${item.color}` }}>
                        {item.title}
                        <button className="delete-note" onClick={() => dispatch(deleteNote(item.id))}><i class="fa fa-trash" aria-hidden="true"></i></button> <br /> <hr />
                        <div>
                            {item.note}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ContentFooter