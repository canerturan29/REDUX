import React from 'react'
import ContentFooter from './ContentFooter'
import Search from './Search'
import TextArea from './TextArea'

export default function Content() {
    return (<>
        <form className='App'>
            <h1 className='text'>Notes App</h1>
            <Search />
            <br></br>
            <TextArea />
            <br></br>
            <ContentFooter />

        </form>
    </>
    )
}
