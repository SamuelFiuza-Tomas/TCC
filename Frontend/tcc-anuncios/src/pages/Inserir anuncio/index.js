import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import '../../components/Cabecalho/cabecalho.css'
import '../Login/style.css'

import Logo from '../../assets/image/Capturar.PNG'

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function InserirAnuncio(props){
    const [infos, setInfos] = useState(props.location.state);

    return(
        <div>
            <div className="cabecalho">
                <div>
                    <Link className="hihi" to="/" ><img class="logo" src={Logo} width="180" height="34px"/></Link>
                </div>
                <div className="barraPesquisa">
                    barra de pesquisa
                </div>
                <div className="meio">
                    MeusafvoritosMeuanunsiosMueperfil
                </div>
            </div>

            <h5>Responder</h5>
        </div>
    )
}