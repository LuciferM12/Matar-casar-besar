import styled from "styled-components";

const PrincipalEstilizado = styled.main`
    min-height: 100vh;
    color: white;
    display: flex;
    justify-content: center;
    padding: 50px 100px;
    box-sizing: border-box;
`

const Inicio = () => {
    return(
        <PrincipalEstilizado>
            <h3>Selecciona tu decisión</h3>
        </PrincipalEstilizado>
    )
}

export default Inicio;