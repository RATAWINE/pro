import React, {useState, useRef} from 'react'

const TestImage = () => {

    const [preview, setPreview] = useState([])
    const filePicker = useRef()

    const pickImage = () => {
        filePicker.current.click()

            //fileReader
            const readFile = new FileReader();
            readFile.readAsDataURL(filePicker.current.files[0]);
            readFile.onload = () => {
                setPreview([readFile.result])
            }
            

        

    }


    return (
                <>
         
                 <label htmlFor="">Testing image picker</label>
                    <input type="file" ref={filePicker} accept='.jpg, .png' onChange={pickImage} multiple />
                    { preview && preview.map((img, index) => {
                        return (
                            <span key={index} style={{marginBottom:'2rem', padding:'2rem', gap:'2rem', display:'inline-flex', border: '1px solid var(--border-color)'}}>
                                <img src={preview} style={{ objectFit: 'cover', width:'100%'}} alt="images" /> 
                            </span> 
                        )
                    }) 
                    }

                
                </>
    )
}

export default TestImage
