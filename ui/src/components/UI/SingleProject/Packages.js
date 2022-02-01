import React from 'react'
import Button from '../Button'
import {BsCheckLg} from 'react-icons/bs'
import {FaTimes} from 'react-icons/fa'

const Packages = () => {

    return (
        <div className="package mt3">

            <h4 className="project-title mb2">Compare Packages</h4>

                <table className="package-table">
                <thead>
                    <tr>
                        <td>Packages</td>
                        <td><h4>Basic</h4> <p>3 logos in JPG & transparent PNG + NO Mascots & Complex design</p></td>
                        <td><h4>Standard</h4> <p>3 logos in JPG & transparent PNG + NO Mascots & Complex design</p></td>
                        <td><h4>Premium</h4> <p>3 logos in JPG & transparent PNG + NO Mascots & Complex design</p></td>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Source File</td>
                        <td><BsCheckLg /></td>
                        <td><BsCheckLg /></td>
                        <td><BsCheckLg /></td>
                    </tr>
                    <tr>
                        <td>Source File</td>
                        <td><FaTimes /></td>
                        <td><BsCheckLg /></td>
                        <td><BsCheckLg /></td>
                    </tr>
                    <tr>
                        <td>Source File</td>
                        <td><FaTimes /></td>
                        <td><BsCheckLg /></td>
                        <td><BsCheckLg /></td>
                    </tr>
                    <tr>
                        <td>Source File</td>
                        <td><FaTimes /></td>
                        <td><BsCheckLg /></td>
                        <td><BsCheckLg /></td>
                    </tr>
                    <tr>
                        <td>Delivery</td>
                        <td>2 days</td>
                        <td>4 days</td>
                        <td>5 days</td>
                    </tr>
                    <tr>
                        <td>Revision</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                    </tr>
                </tbody>

                <tfoot>
                    <tr>
                        <td></td>
                        <td>
                            <p className="mb1"><b>Ghc 80</b></p>
                            <Button name="Select" bgColor="var(--primary-bg-color)" padding=".5rem 3rem" display="inline"
                            border="none" color="var(--text-color-light)"/>
                        </td>
                        <td>
                            <p className="mb1"><b>Ghc 230</b></p>
                            <Button name="Select" bgColor="var(--primary-bg-color)" padding=".5rem 3rem" display="inline"
                            border="none" color="var(--text-color-light)"/>
                        </td>
                        <td>
                            <p className="mb1"><b>Ghc 600</b></p>
                            <Button name="Select" bgColor="var(--primary-bg-color)" padding=".5rem 3rem" display="inline"
                            border="none" color="var(--text-color-light)"/>
                        </td>
                    </tr>
                </tfoot>

                </table>
        </div>
    )
}

export default Packages
