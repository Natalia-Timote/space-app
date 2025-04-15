import styled from "styled-components";

const TituloEstilizado = styled.h1`
    position: relative;
    padding-left: 64px;
    align-self: center;
    font-size: 40px;
    font-family: "GandhiSansRegular";
    font-weight: 300;
    color: #FFF;
    width: 300px;
`;

const TituloBanner = ({ children }) => {
    return (    
            <TituloEstilizado>
                {children}
            </TituloEstilizado>
    )
}

export default TituloBanner;
