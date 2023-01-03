import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "./Avustralya.css"
// import { Toast } from "react-toastify"; 
import axios from "axios";

const Avustralya = () => {
    const [data, setData] = useState([]);

    const loadData = async () =>{
        const response = await axios.get("http://localhost:8080/api/get/avustralya");
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);
    return (
        <div style={{marginTop: "130px"}}>
            <table className='styled-table'>
                <thead>
                    <tr>
                        <th style={{textAlign : "center"}}>tur</th>
                        <th style={{textAlign : "center"}}>isim</th>
                        <th style={{textAlign : "center"}}>resim</th>
                        <th style={{textAlign : "center"}}>tehlike</th>
                        <th style={{textAlign : "center"}}>aciklama</th>
                        {/* <th style={{textAlign : "center"}}>Fazla Bilgiler</th> */}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr key = {item.id}>
                                <th scope='row'>{index+1}</th>
                                <td>{item.isim}</td>
                                <td><img src={item.resim}></img></td>
                                <td><img src={item.tehlike}></img></td>
                                <td>{item.aciklama}</td>
                                {/* <td>
                                    <Link to={"/View/1"}>
                                    <button className='btn btn-View'>Göster</button>
                                    </Link>
                                </td> */}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Avustralya;