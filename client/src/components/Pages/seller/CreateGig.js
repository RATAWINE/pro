import React, {useEffect, useState, useReducer, useRef} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import {MdAddCircle, MdClose} from 'react-icons/md'
import {BsCheck2Circle} from 'react-icons/bs'
import {IoMdImages} from 'react-icons/io'
import Modal from '../../UI/Modal'
import Loader from '../../UI/Loader/Loader'
import { errorModal, resetModal, createNewGig } from '../../Actions/actions'
import './seller.css'




const CreateGig = (props) => {
    // ref
    const browse = useRef()

    // component states
    const [step, setStep] = useState(0)
    const [title, setTitle] = useState('Description')
    const [categories, setCategories] = useState(null)
    const [subs, setSubs] = useState(null)
    const [pricelist, setPricelist] = useState(null)
    const [tag, setTag] = useState('')
    const [fill, setFill] = useState(10)
    const [range, setRange] = useState(null)
    const [upload, setUpload] = useState([])
    const [disable, setDisable] = useState(false)

    // subs SWITCH Function //
    useEffect( () => {
        const fetchCategories = async() => {
            try {
                const res = await axios.get(`http://localhost:8000/api/v1/category`);
                console.log(res.data.data);
                setCategories(res.data.data)
             } catch (error) {
                 console.log(error)
             }
        }

        fetchCategories();

    },[]);

    useEffect(()=>{
        setRange([...Array(100).keys()])
    },[])

    useEffect(()=>{
        if(props.gigs){       
            if(props.gigs.status === 'new'){
                setStep(3)
                setFill(100)
                setTitle('Congratulations');
                setDisable(false);

            }
            console.log('gig status changed')
        };
    },[props.gigs])

    const resetPriceList = () => {
        basicDispatch({type: "RESET"});
        standardDispatch({type: "RESET"})
        premiumDispatch({type: "RESET"})
    }

    const getSubcategory = async(category) => {
        if(category === ''){
            setSubs(null);
            return
        }
           try {
              const res = await axios.get(`http://localhost:8000/api/v1/category/${category}`);
              const subCategories = Object.keys(res.data.data.subcategories);
               dispatch({ type: "SUBCATEGORY", payload: subCategories[0]})
               resetPriceList();
               setSubs(subCategories);
           } catch (error) {
               console.log(error)
           }
    }

    const getPriceList = async (subcategory) => {
        const filteredList = categories.filter( cat => Object.keys(cat.subcategories).includes(subcategory))
        //console.log(filteredList[0])
        setPricelist(filteredList[0].subcategories[`${subcategory}`])
       setTimeout(()=>{
           resetPriceList()
       }, 500)   

    }

    // initial state //
    const initialState = {
        title: '',
        category: '',
        subcategory: '',
        tags: [],
        desc: ''
    }

    // reducer function
    const reducerFn = (state, action) => {
        switch (action.type) {
            case "TITLE":
                return {...state, title: action.payload}
            case "CATEGORY":
                getSubcategory(action.payload)
                return {...state, category: action.payload}
            case "SUBCATEGORY":
                getPriceList(action.payload)
                return {...state, subcategory: action.payload}
            case "TAGS":
                return {...state, tags: [action.payload, ...state.tags]}
            case "DESC":
                return {...state, desc: action.payload}
            default:
                return state;
        }
    }  

    // basic reducer function
    const basicReducerFn = (state, action) => {
            switch (action.type) {
                case "BASIC_ADD":
                    let newInput = Object.fromEntries(new Map([action.payload]))
                    return {...state, ...newInput}
                case "BASIC_PRICE":
                    return {...state, price: action.payload}
                case "BASIC_DELIVERY":
                    return {...state, delivery: action.payload}
                case "BASIC_REVISION":
                    return {...state, revision: action.payload}
                case "RESET":
                    return { name: 'basic', price: '', delivery: '', revision: ''}
                default:
                    return state;
            }
        }
    // standard reducer function
    const standardReducerFn = (state, action) => {
        switch (action.type) {
                case "STANDARD_ADD":
                    let newInput = Object.fromEntries(new Map([action.payload]))
                    return {...state, ...newInput}
                case "STANDARD_PRICE":
                    return {...state, price: action.payload}
                case "STANDARD_DELIVERY":
                    return {...state, delivery: action.payload}
                case "STANDARD_REVISION":
                    return {...state, revision: action.payload}
                case "RESET":
                    return { name: 'standard', price: '', delivery: '', revision: ''}
                default:
                    return state;
        }
    } 
    // premium reducer function
    const premiumReducerFn = (state, action) => {
        switch (action.type) {
                case "PREMIUM_ADD":
                    let newInput = Object.fromEntries(new Map([action.payload]))
                    return {...state, ...newInput}
                case "PREMIUM_PRICE":
                    return {...state, price: action.payload}
                case "PREMIUM_DELIVERY":
                    return {...state, delivery: action.payload}
                case "PREMIUM_REVISION":
                    return {...state, revision: action.payload}
                case "RESET":
                    return { name: 'premium', price: '', delivery: '', revision: ''}
                default:
                    return state;
        }
    }

    // description reducer
    const [formState, dispatch] = useReducer(reducerFn, initialState)
    // basic package pricing reducer 
    const [basicPrice, basicDispatch] = useReducer(basicReducerFn, { name: 'basic', price: '', delivery: '', revision: ''})
    // standard package pricing reducer 
    const [standardPrice, standardDispatch] = useReducer(standardReducerFn, { name: 'standard', price: '', delivery: '', revision: ''})
    // premium package pricing reducer 
    const [premiumPrice, premiumDispatch] = useReducer(premiumReducerFn, { name: 'premium', price: '', delivery: '', revision: ''})

    // addTags //
    const addTag = () => {
        if(tag === '') {
            return;
        }
        dispatch({type: "TAGS", payload: tag[0].toUpperCase() + tag.substring(1).toLowerCase()})
        setTag('');
    }
    //prevBtn
    const stepBack = (e) => {
        e.preventDefault();
        window.scrollTo({top: 0})
        setStep(step - 1);
        setFill(prev => {
            if(prev === 40){
                return 10
            }
            if(prev === 65){
                return 40
            }
            return 10
        })
        setDisable(false);
        setTitle(prev => {
            if(prev === 'Pricing.'){
                return 'Description'
            }
            if(prev === 'Upload'){
                return 'Pricing'
            }
            if(prev === 'Publish'){
                return 'Upload'
            }
            return 'Description'
        })
    }
    // image select function
    const onImageSelect = (e) => {
        props.resetModal();
        for (let i = 0; i < e.target.files.length; i++){
            if(e.target.files[i].size >= 500000){
                props.errorModal(`Invalid file size: Image(${i + 1}) is too large`)
                return;
            }
            let duplicate = upload.find(file => file.name === e.target.files[i].name);
            if(duplicate !== undefined){
                props.errorModal(`Invalid: '${e.target.files[i].name}' is already selected`)
                return;
            }
            setUpload(prev => [...prev, e.target.files[i]])
            console.log(upload)
        }
        
    }
    // image delete function
    const onImageDelete = (name) => {
        const update = upload.filter(file => file.name !== name);
        setUpload(update);
    }
    // onFormSubmit function
    const onFormSubmit = (e) => {
        e.preventDefault();
        window.scrollTo({top: 0})
        
        if(step === 0) {
            setStep(1);
            setFill(40)
            setTitle('Pricing');
        }
        if(step === 1) {
            setStep(2)
            setFill(65)
            setTitle('Upload')  
        }
        if(step === 2) {
            // setStep(3)
            // setFill(100)
            // setTitle('Congratulations');
            setDisable(true);
            
            // 
            const formData = new FormData();
            formData.append('title', formState.title);
            formData.append('category', formState.category);
            formData.append('subcategory', formState.subcategory);
            formData.append('tags', JSON.stringify(formState.tags));
            formData.append('description', formState.desc);
            formData.append('basicPackage', JSON.stringify(basicPrice));
            formData.append('standardPackage', JSON.stringify(standardPrice));
            formData.append('premiumPackage', JSON.stringify(premiumPrice));

            if(upload.length > 0){
                for (let index = 0; index < upload.length; index++) {
                    formData.append('gallery[]', upload[index])
                }
            }
            //. call action creator to save and create gig
            props.createNewGig(formData)
            
        }
    }
    

    return (
        <div className='gig'>
            <div className="progress-bar mb3">
                    <div className="progress-bar-container">
                        <div>
                            <p>Description</p>
                            <p style={{ color: 'var(--primary-bg-color)', border: '2px solid var(--primary-bg-color)'}}>1</p>
                        </div>
                        <div>
                            <p>Pricing</p>
                            <p style={{ color: fill >= 40 && 'var(--primary-bg-color)', border: fill >= 40 && '2px solid var(--primary-bg-color)'}}>2</p>
                        </div>
                        <div>
                            <p>Gallery</p>
                            <p style={{ color: fill >= 65 && 'var(--primary-bg-color)', border: fill >= 65 && '2px solid var(--primary-bg-color)'}}>3</p>
                        </div>
                        <div>
                            <p>Publish</p>
                            <p style={{ color: fill >= 100 && 'var(--primary-bg-color)', border: fill >= 100 && '2px solid var(--primary-bg-color)'}}>4</p>
                        </div>
                    </div>
                    <span><div className="slider" style={{width: `${fill}%`}} ></div></span>
            </div>

            <div className="gig_form">
                { step < 3 &&
                    <>
                        <h3>{title}</h3>
                        <p className='mb3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/> Dolor qui quo officiis inventore eveniet et harum commodi aperiam modi excepturi</p>
                    </>
                }
                {/* DESCRIPTION FORM */}
                {
                    step === 0 && 
                <form className='gig_desc' onSubmit={(e) => onFormSubmit(e)}>

                    <label htmlFor="gig-title">Title</label>
                    <input type="text" id="gig-title" value={formState.title}
                    onChange={(e) => dispatch({ type: "TITLE", payload: e.target.value })}
                    placeholder="Enter the Title of your gig" />

                    <label htmlFor="gig-category">Category</label>
                    <select name="" id="gig-category" value={formState.category}
                    onChange={(e) => dispatch({ type: "CATEGORY", payload: e.target.value })}>
                        <option value="">Choose a category</option>
                        {categories && categories.map((cat) => {
                            return ( <option key={cat._id} value={cat.category}>{cat.category}</option>)
                            })
                        }
                    </select>

                    { subs && 
                        <>
                            <label htmlFor="gig-subcategory">Sub-Category</label>
                            <select id="gig-subcategory" value={formState.subcategory}
                            onChange={(e) => dispatch({ type: "SUBCATEGORY", payload: e.target.value })}>
                                
                                { subs ? subs.map((sub) => {
                                    return (
                                        <option key={sub} value={sub}>{sub}</option>
                                    )
                                }) : null
                                }
                            </select>
                        </> 
                    }
                    <span>
                        <span>
                            <label htmlFor="gig-tag">Search Tags</label>
                            <input type="text" id="gig-tag" onChange={(e) => setTag(e.target.value )}
                            value={tag} placeholder="Provide search tags" />
                            <MdAddCircle className='add_tag' onClick={addTag} />
                        </span>
                        { formState.tags.length > 0 && <span className='mb3 db'>
                            { formState.tags.map((tag) => {
                                return (
                                    <li className='list-tag' key={tag}>{tag} <MdClose /> </li>
                                )
                            })}
                        </span>
                        }

                    </span>

                    

                    <label htmlFor="gig-desc">Describe your Gig</label>
                    <textarea type="text" id="gig-desc" value={formState.desc} 
                    onChange={(e) => dispatch({ type: "DESC", payload: e.target.value })} />

                    <button className='btn mt2'>Save & Continue</button>
                </form>
                }

                {/* PRICING FORM */}
                { step === 1 && 
                    <form className='gig_pricing' onSubmit={(e) => onFormSubmit(e)}>
                        <table className='gig_table'>
                        <tbody>
                                <tr>
                                    <td><h4>Packages</h4></td>
                                    <td> <h4>Basic</h4> </td>
                                    <td> <h4>Popular</h4> </td>
                                    <td> <h4>Premium</h4> </td>
                                </tr>

                                { pricelist && pricelist.map((list) => {
                                    if(list.type === 'text'){
                                        return (
                                            <tr key={list.name}>
                                                <td>{list.name}</td>
                                                <td> <select value={basicPrice[list.name]} onChange={(e) => basicDispatch({type: 'BASIC_ADD', payload:[list.name, e.target.value]})}> 
                                                    <option value="">Select</option> 
                                                    <option value="yes">Yes</option> 
                                                    <option value="no">No</option> 
                                                    </select> 
                                                </td>
                                                <td>  <select value={standardPrice[list.name]} onChange={(e) => standardDispatch({type: 'STANDARD_ADD', payload:[list.name, e.target.value]})}> 
                                                    <option value="">Select</option> 
                                                    <option value="yes">Yes</option> 
                                                    <option value="no">No</option> 
                                                    </select> 
                                                </td>
                                                <td>  <select value={premiumPrice[list.name]} onChange={(e) => premiumDispatch({type: 'PREMIUM_ADD', payload:[list.name, e.target.value]})}> 
                                                    <option value="">Select</option> 
                                                    <option value="yes">Yes</option> 
                                                    <option value="no">No</option> 
                                                    </select> 
                                                </td>
                                                
                                            </tr> 
                                        )
                                }else{
                                        return (
                                            <tr key={list.name}>
                                                <td>{list.name}</td>
                                                <td> <select value={basicPrice[list.name]} onChange={(e) => basicDispatch({type: 'BASIC_ADD', payload:[list.name, e.target.value]})}> 
                                                    <option value="">Select</option> 
                                                        
                                                        {range && range.map((el, index) => {
                                                            return <option key={index} value={el}>{el}</option> 
                                                        })}                                                    
                                                    </select> 
                                                </td>
                                                <td> <select value={standardPrice[list.name]} onChange={(e) => standardDispatch({type: 'STANDARD_ADD', payload:[list.name, e.target.value]})}> 
                                                    <option value="">Select</option> 
                                                        {range && range.map((el, index) => {
                                                            return <option key={index} value={el}>{el}</option> 
                                                        })}                                                    
                                                    </select> 
                                                </td>
                                                <td> <select value={premiumPrice[list.name]} onChange={(e) => premiumDispatch({type: 'PREMIUM_ADD', payload:[list.name, e.target.value]})}> 
                                                    <option value="">Select</option> 
                                                        {range && range.map((el, index) => {
                                                            return <option key={index} value={el}>{el}</option> 
                                                        })}                                                    
                                                    </select> 
                                                </td> 
                                            </tr> 
                                        )
                                    }
                                    }) 
                                }

                                <tr>
                                    <td>Delivery</td>
                                    <td> <select value={basicPrice.delivery} onChange={(e)=> basicDispatch({type:"BASIC_DELIVERY", payload: e.target.value})}>
                                            <option value="">Select</option>
                                            <option value="1">1 Days</option>
                                            <option value="2">2 Days</option>
                                            <option value="3">3 Days</option>
                                            <option value="4">4 Days</option>
                                            <option value="5">5 Days</option>
                                            <option value="6">6 Days</option>
                                            <option value="7">7 Days</option>
                                            <option value="8">8 Days</option>
                                            <option value="9">9 Days</option>
                                            <option value="10">10 Days</option>
                                        </select> 
                                    </td>
                                    <td>
                                    <select value={standardPrice.delivery} onChange={(e)=> standardDispatch({type:"STANDARD_DELIVERY", payload: e.target.value})}>
                                            <option value="">Select</option>
                                            <option value="1">1 Days</option>
                                            <option value="2">2 Days</option>
                                            <option value="3">3 Days</option>
                                            <option value="4">4 Days</option>
                                            <option value="5">5 Days</option>
                                            <option value="6">6 Days</option>
                                            <option value="7">7 Days</option>
                                            <option value="8">8 Days</option>
                                            <option value="9">9 Days</option>
                                            <option value="10">10 Days</option>
                                        </select> 
                                    </td>
                                    <td>
                                    <select value={premiumPrice.delivery} onChange={(e)=> premiumDispatch({type:"PREMIUM_DELIVERY", payload: e.target.value})}>
                                            <option value="">Select</option>
                                            <option value="1">1 Days</option>
                                            <option value="2">2 Days</option>
                                            <option value="3">3 Days</option>
                                            <option value="4">4 Days</option>
                                            <option value="5">5 Days</option>
                                            <option value="6">6 Days</option>
                                            <option value="7">7 Days</option>
                                            <option value="8">8 Days</option>
                                            <option value="9">9 Days</option>
                                            <option value="10">10 Days</option>
                                        </select> 
                                    </td>
                                </tr>
                                <tr>
                                    <td>Revision</td>
                                    <td> <select value={basicPrice.revision} onChange={(e)=> basicDispatch({type:"BASIC_REVISION", payload: e.target.value})}>
                                            <option value="">Select</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="unlimited">Unlimited</option>
                                        </select> 
                                    </td>
                                    <td>
                                    <select value={standardPrice.revision} onChange={(e)=> standardDispatch({type:"STANDARD_REVISION", payload: e.target.value})}>
                                            <option value="">Select</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="unlimited">Unlimited</option>
                                        </select> 
                                    </td>
                                    <td>
                                    <select value={premiumPrice.revision} onChange={(e)=> premiumDispatch({type:"PREMIUM_REVISION", payload: e.target.value})}>
                                            <option value="">Select</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="unlimited">Unlimited</option>
                                        </select> 
                                    </td>
                                </tr>
                                <tr >
                                    <td>Pricing</td>
                                    <td> 
                                        <span style={{display:'flex', gap:'1rem', alignItems : 'center', justifyItems: 'center'}} >
                                        <input value={basicPrice.price} type="number" step='5' min='0' placeholder='Pricing' onChange={(e)=> basicDispatch({type:"BASIC_PRICE", payload: e.target.value})} /> <p>GHC</p>
                                        </span> 
                                    </td>
                                    <td>
                                        <span style={{display:'flex', gap:'1rem', alignItems : 'center', justifyItems: 'center'}} >
                                        <input value={standardPrice.price} type="number" step='5' min='0' placeholder='Pricing' onChange={(e)=> standardDispatch({type:"STANDARD_PRICE", payload: e.target.value})} /> <p>GHC</p>
                                        </span> 
                                    </td>
                                    <td>
                                        <span style={{display:'flex', gap:'1rem', alignItems : 'center', justifyItems: 'center'}} >
                                        <input value={premiumPrice.price} type="number" step='5' min='0' placeholder='Pricing' onChange={(e)=> premiumDispatch({type:"PREMIUM_PRICE", payload: e.target.value})} /> <p>GHC</p>
                                        </span> 
                                    </td>
                                </tr>


                            </tbody>
                        </table>
                    
                        <button className='prevBtn btn mt2' style={{marginRight: '1rem'}} onClick={(e) => stepBack(e)}>Back</button>
                        <button className='btn mt2' >Save & Continue</button>
                    </form>
                } 
              
                {/* UPLOAD FORM */}
                {
                    step === 2 && 
                    <>
                    {props.modal && <Modal status={props.modal.status} /> }
                    <form className='gig_gallery' onSubmit={(e) => onFormSubmit(e)}>
                        <input ref={browse} type="file" name='gallery' accept='.jpg, .png' multiple onChange={(e)=> onImageSelect(e)}/>

                        <div className="gallery_preview" >
                            <IoMdImages className='gallery_preview_icon' />
                            <p>Drag and drop your file(s) here or</p>
                            <span onClick={() => browse.current.click()}>browse</span> 
                            <p>Max File Size: 0.5MB</p>
                        </div>

                        <div className="gallery_preview_list">
                            {upload.length > 0 && upload.map(file => {
                                const size = Math.round(file.size / 1000)
                                return (
                                    <li key={file.name}> <p>{file.name}</p> <p>{size}kb <MdClose onClick={()=>onImageDelete(file.name)} className='close' /></p> </li>
                                )
                            })}
                            
                           
                        </div>

                        <button className='prevBtn btn mt3' style={{marginRight: '1rem'}} onClick={(e) => stepBack(e)}>Back</button>
                        <button className={ disable ? 'btn mt2 disable' : 'btn mt2'} > Publish {disable ? <Loader widthHeight='15px' border='.2rem solid white' borderTop='.2rem solid grey' marginLeft='1rem' /> : null } </button>
                    </form>
                    </>
                }
                {/* CONGRATULATION */}
                {
                    step === 3 &&
                    <div className="gig_complete">
                        <BsCheck2Circle className='gig_complete_icon'/>
                        <h3>{title}</h3>
                        <p className='mb3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/> Dolor qui quo officiis inventore eveniet et harum commodi aperiam modi excepturi</p>
                        <button className={'btn mt2'} >Go to Dashboard</button>
                    </div>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return state;
}


export default connect(mapStateToProps, {errorModal, resetModal, createNewGig})(CreateGig)
