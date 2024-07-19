import styled from "styled-components";
import { GiBigDiamondRing } from "react-icons/gi";
import { GiCurvyKnife } from "react-icons/gi";
import { FaKissWinkHeart } from "react-icons/fa";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const CartaEstilizada = styled.div`
    min-height: 500px;
    width: 300px;
    display: flex;
    flex-direction: column;
    background: transparent;
    border-radius: 10px;
    color: #e29393;
    transition: .2s ease-in;
`;

const ImagenContenedor = styled.div`
    width: 100%;
    height: 400px;
    perspective: 1000px;
`;

const ImagenInterior = styled.div`
    width: 100%;
    height: 100%;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    position: relative;
    &:hover {
        transform: rotateY(180deg);
    }
`;

const Cara = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 10px;
`;

const CaraFrontal = styled(Cara)``;

const CaraTrasera = styled(Cara)`
    background: #F2293A;
    color: white;
    transform: rotateY(180deg);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ImagenEstilizada = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: -4px 5px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: -4px 5px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: -4px 5px 5px 0px rgba(0,0,0,0.75);
`;

const Botones = styled.button`
    font-size: 1.2em;
    color: ${props => (props.$active ? '#f04343' : 'white')};
    width: 30%;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    font-size: ${props => (props.$active ? '50px' : '30px')};
    gap: 5px;
    transition: .3s ease-in;
    
    &:hover {
        cursor: pointer;
        transform: ${props => (!props.$active && 'scale(1.2)')};
    }
`;

const Barra = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`;

const Card = ({ imagen, titulo, valor }) => {
    const {casar, setCasar, besar, setBesar, matar, setMatar} = useContext(GlobalContext)

    const manejarEstado = (accion) =>{
        if(accion ==="casar"){
            setCasar(valor)
            if(besar === valor)
                setBesar(null)
            if(matar === valor)
                setMatar(null)
        }else{
            if(accion === "matar" ){
                setMatar(valor)
                if(besar === valor)
                    setBesar(null)
                if(casar === valor)
                    setCasar(null)
            }
            else{
                setBesar(valor)
                if(casar === valor)
                    setCasar(null)
                if(matar === valor)
                    setMatar(null)
            }
        }
    }


    return (
        <CartaEstilizada>
            <ImagenContenedor>
                <ImagenInterior>
                    <CaraFrontal>
                        <ImagenEstilizada src={imagen} alt={titulo} />
                    </CaraFrontal>
                    <CaraTrasera>
                        <h2>{titulo}</h2>
                    </CaraTrasera>
                </ImagenInterior>
            </ImagenContenedor>
            <Barra>
                <Botones $active={valor === besar } onClick={() =>manejarEstado("besar")}><FaKissWinkHeart /></Botones>
                <Botones $active={valor === casar } onClick={() =>manejarEstado("casar")}><GiBigDiamondRing /></Botones>
                <Botones $active={valor === matar } onClick={() =>manejarEstado("matar")}><GiCurvyKnife /></Botones>
            </Barra>
        </CartaEstilizada>
    );
};

export default Card;