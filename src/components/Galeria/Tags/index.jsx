import styled from "styled-components";
import tags from "./tags.json";

const TagsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    margin-top: 56px;
    margin-bottom: 40px;
`;

const TagTitulo = styled.h3`
    color: #D9D9D9;
    font-size: 24px;
    font-weight: 400;
    font-family: "GandhiSansRegular";
    margin: 0;
`;

const Tag = styled.button`
    color: #FFF;
    font-size: 24px;
    font-weight: 400;
    font-family: "GandhiSansRegular";
    background-color: rgba(217, 217, 217, 0.3);
    transition: background-color 0.3s ease;
    padding: 12px;
    box-sizing: border-box;
    border: 2px solid transparent;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
        border-color: #C98CF1;
    }
`;

const Div = styled.div`
    display: flex;
    gap: 24px;
    justify-content: end;
`;

const Tags = ({ setTag }) => {

    return (
        <TagsContainer>
            <TagTitulo>Busque por tags:</TagTitulo>
            <Div>
                {tags.map(tag => <Tag key={tag.id} onClick={() => setTag(tag.tag)}>{tag.titulo}</Tag>)}
            </Div>
        </TagsContainer>
    )
}

export default Tags;
