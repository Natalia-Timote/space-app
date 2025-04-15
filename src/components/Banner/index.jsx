import styled from "styled-components";
import TituloBanner from "../TituloEstilizado";

const BannerContainer = styled.div`
    img {
        position: absolute;
        border-radius: 20px;
        width: 1156px;
        height: 328px;
    }
`;

const Banner = () => {
    return (
        <BannerContainer>
            <img src="src/assets/banner.png" alt="Imagem da Terra vista de cima." />
            <TituloBanner>
                A galeria mais completa de fotos do espaço!
            </TituloBanner>
        </BannerContainer>
    )

}

export default Banner;
