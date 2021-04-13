import React from 'react'
import './Scripts.scss'
import FirstScript from './FirstScript'
import SecondScript from './SecondScript'
import ThirdScript from './ThirdScript'
function ScriptPage() {
    return (
        <div className="scriptPage">
            <div className="scriptForm">
                <h1 style={{ textDecoration: 'underline' }}>My Scripts</h1>
                <FirstScript />
                <hr style={{ height: '2px', backgroundColor: 'white' }} />
                <SecondScript />
                <hr style={{ height: '2px', backgroundColor: 'white' }} />
                <ThirdScript />
                <br />
            </div>
        </div>
    )
}

export default ScriptPage;