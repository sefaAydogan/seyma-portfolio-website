import React from 'react'
import './Photos.scss'
import ImageCards from './ImageCards'


function PhotographyPage() {
    return (
        <div className="photoPage">
            <div className="photoForm">

                <ImageCards />

            </div>
        </div>
    )
}

export default PhotographyPage;