import { CustomButton } from "../../../atoms/CustomButton";
import Input from "../../../atoms/Input";
import * as S from "./styles"
import { useNavigate } from "react-router-dom";
import userIcon from '../../../assets/icons/circle-user-icon.svg';

const Register = () => {
    const navigate = useNavigate();

    const handleSubmit = (event: any) => {
        event.preventDefault();
    }
    return (
        <S.Form onSubmit={handleSubmit}>
            <S.Title>
                <img src={userIcon} alt="userIcon" />
                Criar conta
            </S.Title>

            <S.InputsWrapper>
                <Input
                    label="Email"
                    type="email"
                    placeholder="exemple@example.com"
                    onChange={() => { }}
                />
                <Input
                    label="Matrícula"
                    type="text"
                    placeholder="Matrícula"
                    onChange={() => { }}
                />
                <Input
                    label="Curso"
                    type="text"
                    placeholder="Curso"
                    onChange={() => { }}
                />
                <Input
                    label="Senha"
                    type="password"
                    placeholder="Senha"
                    onChange={() => { }}
                />
                <Input
                    label="Confirmar senha"
                    type="password"
                    placeholder="Confirmar senha"
                    onChange={() => { }}
                />
            </S.InputsWrapper>

            <S.ButtonsWrapper>
                <CustomButton
                    children="Salvar"
                    onClick={() => { }}
                    color="#2D60FF"
                    hasborder={false}
                    type="submit"
                />
                <CustomButton
                    children="Voltar"
                    onClick={() => { navigate('/login') }}
                    color="#1D1D1D"
                    hasborder={false}
                />
            </S.ButtonsWrapper>
        </S.Form>
    )
}

export default Register;