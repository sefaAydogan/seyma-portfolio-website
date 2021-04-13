import React from 'react'
import './Designs.scss'
import ImageCards from './ImageCards'


function DesignComponent() {
    return (
        <div className="designPage">
            <div className="designForm">
                <ImageCards />
            </div>
        </div>
    )
}

export default DesignComponent;