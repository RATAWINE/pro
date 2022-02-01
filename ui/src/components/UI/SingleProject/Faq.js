import { React, useState } from 'react'
import {BiChevronDown} from 'react-icons/bi'

const Faq = () => {
    const faqs = [
        {
            q : "What information you need to provide for logo?",
            a : "Information about your business - Company name (Which one you want to add in logo) - Any color which one you like - If you have any sample / sketch which one you like"
        },
        {
            q : "How do you need to provide for logo?",
            a : "Information about your business - Company name (Which one you want to add in logo) - Any color which one you like - If you have any sample / sketch which one you like"
        }
    ]
    const [activeIndex, setactiveIndex] = useState(null)

    // logic goes here //

    return (
        <div className="faq mt3">
            <h4 className="project-title mb2">FAQs</h4>

                {faqs.map((fq, index) => {
                    return (
                        <div key={fq.q} className="faq-content"> 
                            <span onClick={(e) => {setactiveIndex(index)}} className="mt2">
                                <h4>{fq.q}</h4>
                                <p> <BiChevronDown className="fs-2" /> </p>
                            </span>

                            {activeIndex === index ? <p className="mt1">{fq.a}</p> : null}
                        </div>
                    )
                })}
                
        </div>
    )
}

export default Faq
