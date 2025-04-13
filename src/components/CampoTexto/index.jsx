import styled from "styled-components";
import search from "/icones/search.png";

const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;
`;

const InputEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 8px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 24px;
    line-height: 20px;
`;

const IconeLupa = styled.img`
    position: absolute;
    top: 8px;
    right: 8px;
    width: 40px;
    height: 40px;
`;

const CampoTexto = (props) => {
    return (
        <ContainerEstilizado>
            <InputEstilizado placeholder="O que você procura?" {...props} />
            <IconeLupa src={search} alt="Ícone de lupa" />
        </ContainerEstilizado>
    )
}

export default CampoTexto;
