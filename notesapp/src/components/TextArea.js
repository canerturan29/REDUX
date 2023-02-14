import { nanoid } from '@reduxjs/toolkit'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNote } from '../redux/noteSlice'

export default function TextArea() {
    const dispatch = useDispatch()
    const [note, setNote] = useState("")
    const [color, setColor] = useState("Darkorange")
    const [title, setTitle] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        if (note === "" || title === "") return

        dispatch(addNote({
            id: nanoid(),
            note: note,
            color: color,
            title: title
        }));

        setTitle("");
        setNote("");

    }
    return (
        <div className='texter'>
            <input
                className='title'
                placeholder='Note Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ backgroundColor: `${color}` }} />

            <br />
            <textarea placeholder='  
            Enter your notes here...'  value={note}
                onChange={e => setNote(e.target.value)}
                style={{ backgroundColor: `${color}` }}>
            </textarea>
            <div className="colorGrp">
                <button id='Darkorange' type='button' onClick={(e) => setColor(e.target.id)} className="btn darkorange" />
                <button id='Pink' type='button' onClick={(e) => setColor(e.target.id)} className="btn pink" />
                <button id='Burlywood' type='button' onClick={(e) => setColor(e.target.id)} className="btn burlywood" />
                <button id='Cadetblue' type='button' onClick={(e) => setColor(e.target.id)} className="btn cadetblue" />
                <button id='Lightgreen' type='button' onClick={(e) => setColor(e.target.id)} className="btn lightgreen" />
                <br />

                <span style={{ backgroundColor: `${color}`, color: "black" }}>Note Color: {color}</span>

            </div>
            <button className='add-btn' onClick={handleSubmit}><i className="fa-regular fa-floppy-disk"></i> ADD NOTE</button>

        </div>
    )
}
