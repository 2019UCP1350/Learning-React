import React,{useState,useEffect,useReducer} from 'react';
import api from "../Api/api";

const Page=()=>{
    const [apna,setApna]=useState('I am Manvir');
    const [name,setName]=useState("i AM");
    const [emal,setEmal]=useState("i");
    useEffect(async ()=>{
        try{
            const res= await api.get('/');
            setApna(res.data.biography);
        }catch(err){
            console.log(err);
        }
    },[]);
    return <div style={{color:"red"}}>
        {apna}
        <br></br>
        <input placeholder={'name'} onChange={ ({target})=>{ setName(target.value) } } value={name}></input>
        <br></br>
        <input placeholder={'email'} onChange={ ({target})=>{ setEmal(target.value) } } value={emal}></input>
        <br></br>
        <button>submit</button>
        {name}
        {emal}
    </div>
}
export default Page;