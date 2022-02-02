import React from 'react'
import './Project.css'
import {BsClockHistory, BsCheck2Square} from 'react-icons/bs'
import {GrPowerCycle} from 'react-icons/gr'
import Button from '../Button'

const PackagesTab = () => {
    const includes = [
        '3 Initial Concepts',
        'Source File',
        'Logo Transparency',
        'High Resolution',
        'Vector File'
    ]
    return (
        <div className="package-tab">
            <div className="package-tab_labels">
                <label htmlFor="" className="active-tab">Basic</label>
                <label htmlFor="">Standard</label>
                <label htmlFor="">Premium</label>
            </div>
            <div className="package-tab_content">
                <span>
                    <h3>Popular</h3>
                    <h3>GHc80</h3>
                </span>
                <span>
                    <p>3 Awesome Logo + Free Revisions + HD JPG and Transparent PNG + Vector Files -No Mascot design</p>
                </span>
                <span>
                    <p><BsClockHistory /> 2 Days Delivery</p>
                    <p><GrPowerCycle /> 2 Revisions</p>
                </span>
                <span>
                    <h4>What's Included</h4> 
                    <div className="package-tab_includes">
                        {includes.map((list, index) => {
                            return (
                                <p key={index}><BsCheck2Square /> {list} </p> 
                            )
                        })}
                    </div>
                </span>
                <span className="mt2">
                    <Button name="Select GHC80" border="none" 
                    bgColor="var(--primary-bg-color)" fontWeight="600" width="100%"
                    color="#fff" padding="1.5rem 3rem" textSize="1.5rem" radius="6px"/>
                    <p className="mt1">Compare Packages</p>
                </span>
            </div>
        </div>
    )
}

export default PackagesTab
