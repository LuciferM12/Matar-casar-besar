import styled from "styled-components"
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { IoIosCloseCircle } from "react-icons/io";

const Overlay = styled.div`
    background-color: rgba(0,0,0,0.7);
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
`
const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 100px;
    padding: 0px;
    border: 0;
    width: 300px;
    box-sizing: border-box;
    height: 200px;
    background-color: #0D0D0D;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    z-index: 3;
    color: wheat;
    p{
        padding: 0 10px;
    }
`
const FormularioAbrir = styled.form`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: flex-start;
    height: fit-content;
    padding: 5px;
    button {
        background: transparent;
        color: white;
        border: none;
    }
`

const BotonIcono = styled.button`
    
    display: flex;
    align-items: flex-end;
    justify-content: center;
    font-size: 2em;
    cursor: pointer;

`

const ModalZoom = () => {
    const { abierto, setAbierto } = useContext(GlobalContext);
    const cerrarModal = () => {
        setAbierto(!abierto)
    }

    return <>
        {abierto && <>
            <Overlay />
            <DialogEstilizado open={true} onClose={() => cerrarModal()}>
                <FormularioAbrir method="dialog">
                    <BotonIcono formMethod="dialog">
                        <IoIosCloseCircle />
                    </BotonIcono>
                </FormularioAbrir>
                <h1>Reglas</h1>
                <p>De las tres actrices que aparecen a continuación, seleccione a quien mataría, besaría y se casaría.</p>
            </DialogEstilizado>
        </>
        }

    </>
}

export default ModalZoom