import styled from "styled-components";
import Seleccion from "../../components/Seleccion"
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import ModalZoom from "../../components/ModalZoom";

const PrincipalEstilizado = styled.main`
    min-height: 100vh;
    color: white;
    display: flex;
    align-items: center;
    padding: 50px 100px;
    box-sizing: border-box;
    flex-wrap: wrap;
    flex-direction: column;
    font-size: 1.5em;
    @media (max-width: 480px){
        padding: 50px  0;
    }
`

const BotonEstilizado = styled.button`
    margin-top: 70px;
    padding: 10px;
    background-color:#f04343;
    color: white;
    border: none;
    font-size: .9em;
    transition: .3s ease-in;
    &:hover{
        background-color: #ad2323;
    }
`

const Inicio = () => {
    const { volverAGenerar } = useContext(GlobalContext);
    return (
        <>
            <PrincipalEstilizado>
                <h3>Selecciona tu decisión</h3>
                <Seleccion>
                </Seleccion>
                <BotonEstilizado onClick={(e) => volverAGenerar()} >Generar nuevo</BotonEstilizado>
            </PrincipalEstilizado>
            <ModalZoom />
        </>
    )
}

export default Inicio;