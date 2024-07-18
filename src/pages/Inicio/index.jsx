import styled from "styled-components";
import Seleccion from "../../components/Seleccion"

const PrincipalEstilizado = styled.main`
    min-height: 100vh;
    color: white;
    display: flex;
    align-items: center;
    padding: 50px 100px;
    box-sizing: border-box;
    flex-wrap: wrap;
    flex-direction: column;
`

const Inicio = () => {
    return(
        <PrincipalEstilizado>
            <h3>Selecciona tu decisión</h3>
            <Seleccion>

            </Seleccion>
        </PrincipalEstilizado>
    )
}

export default Inicio;