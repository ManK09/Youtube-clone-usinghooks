import React,{useState} from 'react'
import Api from './Api'
const Search = (props) =>{

    const [searchitem,setSearchitem]=useState("")
    const handleChange= (e)=>{
        setSearchitem(e.target.value)
        //console.log(searchitem)
    }


    const  handleSubmit= async (e)=>{
        e.preventDefault()
        props.onSearch(searchitem)
    }
    return(
    <div style={{marginLeft:30}}>
    <h1>Hello</h1>
    <input type="text"
    name="searchitem"
    value={searchitem}
    placeholder="Search a video" 
    style={{height:30,paddingLeft:10,width:500}} 
    onChange={handleChange} />

    <button style={{height:36,width:100,backgroundColor:'grey',fontWeight:'bold'}}
    type="submit"
    onClick={handleSubmit}>
    Submit</button>
    </div>
    )
}

export default Search