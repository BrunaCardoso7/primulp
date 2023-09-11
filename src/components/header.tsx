"use client"
import { BsWhatsapp } from 'react-icons/bs';
import { styled } from "styled-components"
interface HeaderProps{

}

const TagHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FE0000;
    width: 100vw;
   
`
const Conteiner = styled.div`
    max-width: 80vw; 
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 300px;
`
const Logo = styled.a`
    display: flex;
    flex-direction: column;
    font-size: 2.2rem;
    line-height: 19px;
    padding: 18px;
    color: #FFFFFF;
    font-weight: 700;
    cursor: pointer;
    span{
        font-size: .9rem;
    }
`
const NavBar = styled.nav`
    display: flex;
    gap: 50px;
    font-size: 1.2rem;
    align-items: center;
    a{
        color: #FFFFFF;
    }
    a:hover{
        color: #FFFF00;
    }
`
const Button = styled.button`
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-size: 1.2rem;
    border: none;
    width: 200px;
    padding: 5px 10px;
    background-color: #43DF2A;
    border-radius: 10px;
    cursor: pointer;
    &:hover{
        background-color: #32CD32;
    }
`

export function Header (props: HeaderProps){
    return(
        <TagHeader>
            <Conteiner>
                <Logo>Primus<span>MOTORES</span></Logo>
                <NavBar>
                    <a href="">Home</a>
                    <a href="">Localização</a>
                    <a href="">Catálogo</a>
                    <Button><BsWhatsapp />Fale Conosco</Button>
                </NavBar>
            </Conteiner>
        </TagHeader>
    )
}