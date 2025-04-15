import styled from "styled-components";

const ItemListaEstillizado = styled.li`
    font-size: 24px;
    font-family: ${ props => props.$ativo ? "GandhiSansBold" : "GandhiSansRegular" };
    color: ${ props => props.$ativo ? "#7B78E5" : "#D9D9D9" };
    line-height: 28px;
    margin-bottom: 32px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 24px;
`;

const ItemNavegacao = ({ children, iconeAtivo, iconeInativo, ativo = false }) => {
    return (
        <ItemListaEstillizado $ativo={ativo}>
            <img src={ativo ? iconeAtivo : iconeInativo} alt="" />
            {children}
        </ItemListaEstillizado>
    )
}

export default ItemNavegacao;
