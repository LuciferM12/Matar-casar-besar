import styled from "styled-components";
import Card from "../Card";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const SeleccionEstilizada = styled.section`
    width: 90%;
    display: flex;
    margin-top: 50px;
    justify-content: space-evenly;
    flex-wrap: wrap;

`

const Seleccion = () => {
    const { data } = useContext(GlobalContext);
    return (
        <SeleccionEstilizada>
            {
                data.map((dat, index) => {
                    return (
                        <Card titulo={dat.nombre} imagen={dat.imagen} key={index} valor={index} edad={dat.edad}/>
                    )
                })
            }
        </SeleccionEstilizada>
    )
}

export default Seleccion