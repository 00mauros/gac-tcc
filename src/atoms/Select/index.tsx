import * as S from "./styles";
import * as T from "./types";

const Select = ({ label, onChange }: T.SelectProps): JSX.Element => {
    return (
        <S.SelectContainer>
            <S.Label>{label}</S.Label>
            <S.Select
                onChange={onChange}
            >
                <option value="">Selecione</option>
            </S.Select>
        </S.SelectContainer>
    );
}

export default Select;