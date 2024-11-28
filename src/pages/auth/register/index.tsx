import { CustomButton } from "../../../atoms/CustomButton";
import Input from "../../../atoms/Input";
import * as S from "./styles"
import * as H from "./helpers"
import { useNavigate } from "react-router-dom";
import userIcon from '../../../assets/icons/circle-user-icon.svg';
import { useEffect, useState } from "react";
import api from "../../../services/api";
import Select from "../../../atoms/Select";

const Register = () => {
    const navigate = useNavigate();
    const [courses, setCourses] = useState()
    const [form, setForm] = useState({
        name: "",
        email: "",
        registration: "",
        courses: ["Sistemas"],
        password: "",
        confirmPassword: "",
        isAdmin: false,
        permissions: ["dashboard", "activities", "profile"],
    })



    useEffect(() => {
        api.get('/user/allCourses').then((response) => {
            setCourses(response.data)
        })
            .catch(() => {
            })
    }, [])

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (form.password === form.confirmPassword) {
            api.post('/user', form).then(() => {
                H.handleAlert('success', 'Conta criada com sucesso')
                setTimeout(() => {
                    navigate('/login')
                }, 2000);
            })
                .catch(() => {
                    H.handleAlert('error', 'Erro ao criar conta')
                })
        } else {
            H.handleAlert('error', 'As senhas precisam ser iguais')
        }
    }

    return (
        <S.Form onSubmit={handleSubmit}>
            <S.Title>
                <img src={userIcon} alt="userIcon" />
                Criar conta
            </S.Title>

            <S.InputsWrapper>
                <Input
                    label="Nome"
                    type="text"
                    placeholder="Nome"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <Input
                    label="Email"
                    type="email"
                    placeholder="exemple@example.com"
                    onChange={(e) => setForm({ ...form, email: e.target.value })}

                />
                <Input
                    label="Matrícula"
                    type="text"
                    placeholder="Matrícula"
                    onChange={(e) => setForm({ ...form, registration: e.target.value })}

                />
                <Select
                    label="Curso"
                    onChange={(e) => setForm({ ...form, courses: [e.target.value] })}
                    options={courses ? courses : []}
                    value={form.courses[0]}
                />

                <Input
                    label="Senha"
                    type="password"
                    placeholder="Senha"
                    onChange={(e) => setForm({ ...form, password: e.target.value })}

                />
                <Input
                    label="Confirmar senha"
                    type="password"
                    placeholder="Confirmar senha"
                    onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}

                />
            </S.InputsWrapper>

            <S.ButtonsWrapper>
                <CustomButton
                    children="Salvar"
                    onClick={() => handleSubmit}
                    color="#2D60FF"
                    hasborder={false}
                    type="submit"
                />
                <CustomButton
                    children="Voltar"
                    onClick={() => navigate('/login')}
                    color="#1D1D1D"
                    hasborder={false}
                />
            </S.ButtonsWrapper>
        </S.Form>
    )
}

export default Register;