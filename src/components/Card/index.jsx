import styled from "styled-components";
import { GiBigDiamondRing } from "react-icons/gi";
import { GiCurvyKnife } from "react-icons/gi";
import { FaKissWinkHeart } from "react-icons/fa";

const CartaEstilizada = styled.div`
    min-height: 500px;
    width: 300px;
    display: flex;
    flex-direction: column;
    background: transparent;
    border-radius: 10px;
    color: #e29393;
    transition: .2s ease-in;
    
 `

const ImagenEstilizada = styled.img`
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: -4px 5px 5px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: -4px 5px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: -4px 5px 5px 0px rgba(0,0,0,0.75);
`

const Botones = styled.button`
    font-size: 1.2em;
    color: white;
    width: 30%;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px ;
    font-size: 30px;
    gap: 5px;
    transition: .3s ease-in;
    &:hover{
        cursor: pointer;
        transform: scale(1.2);
    }
`

const Barra = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`

const Card = ({ imagen, titulo }) => {
    return (
        <CartaEstilizada>
            <ImagenEstilizada src={imagen} alt={titulo} />
            <Barra>
                <Botones> <FaKissWinkHeart /> </Botones>
                <Botones> <GiBigDiamondRing /> </Botones>
                <Botones> <GiCurvyKnife /> </Botones>
            </Barra>
        </CartaEstilizada>
    )

}

export default Card