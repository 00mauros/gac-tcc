import { ReactNode } from "react";
import SatoroGojo from "../../assets/imgs/satoroGojo.png"

import * as S from "./styles"

interface LoginTemplateProps {
    children: ReactNode;
}

const LoginTemplate: React.FC<LoginTemplateProps> = ({ children }) => {
    return (
        <S.Container>
            <S.Content>{children}</S.Content>
            <S.SatoroGojo src={SatoroGojo} />
        </S.Container>
    );
}

export default LoginTemplate;