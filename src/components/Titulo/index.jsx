import styled from "styled-components";

const Titulo = styled.h2`
    color: #7B7BE6;
    font-size: 32px;
    text-align: ${ props => props.$alinhamennto ? props.$alinhamennto : "left" };
`;

export default Titulo;
