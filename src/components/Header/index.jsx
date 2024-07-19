import styled from "styled-components";
import Logo from "./logo.png"
import { IoIosAlert } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const HeaderEstilizado = styled.header`
    width: 100%;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
    box-sizing: border-box;
    color: white;
    font-size: 2em;
    img{
        width: 150px;
    }
    div{
        :nth-child(n){
            cursor: pointer;
        }
        display: flex;
        gap: 20px;
    }
    @media (max-width: 480px){
        padding: 0;
    }
    a{
        text-decoration: none;
        color: inherit;
        transition: .3s ease-in;
        &:hover{
            color: #f04343;
        }
    }

`

const Header = () => {
    return (
        <HeaderEstilizado>
            <img src={Logo} alt="logo" />
            <div>
                <IoIosAlert />
                <a href="https://github.com/LuciferM12"><FaGithub /></a>
            </div>
        </HeaderEstilizado>
    )

}

export default Header