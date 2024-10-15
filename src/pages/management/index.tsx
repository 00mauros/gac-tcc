import { useEffect, useState } from "react";
import { CustomButton } from "../../atoms/CustomButton/index.tsx";
import Modal from "../../molecules/modal/index.tsx";
import Trash from "../../assets/icons/trash-icon.png";

import * as S from "./styles.ts";
import api from "../../services/api.ts";

const Management = () => {
    const userId = sessionStorage.getItem("userId");
    const [selected, setSelected] = useState(0);
    const [modal, setModal] = useState(false);
    const [courses, setCourses] = useState<any>();

    useEffect(() => {
        window.addEventListener("closeModal", (event: any) => {
            setModal(event.detail.isOpenModal);
        })
    }, []);

    const handleModalType = () => {
        switch (selected) {
            case 0:
                return "addMeasurer";
            case 1:
                return "addCourse";
            case 2:
                return "addCategory";
            default:
                return "addMeasurer";
        }
    }

    useEffect(() => {
        api.get(`/user/${userId}/course`).then((response) => {
            console.log(response.data)
            setCourses(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [selected]);

    const handleDeleteCourse = (id: any) => {
        api.delete(`/user/${userId}/course/${id}`).then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <S.Content>
            <S.HeaderOptions>
                <S.TextOptions selected={selected === 0} onClick={() => setSelected(0)}>Gerenciar Avaliador(a)</S.TextOptions>
                <S.TextOptions selected={selected === 1} onClick={() => setSelected(1)}>Gerenciar Curso(s)</S.TextOptions>
                <S.TextOptions selected={selected === 2} onClick={() => setSelected(2)}>Gerenciar Categoria da(s) Atividade(s)</S.TextOptions>
            </S.HeaderOptions>

            <S.ButtonAndHoursContainer>
                <CustomButton
                    children="Adicionar"
                    color="#2D60FF"
                    hasborder={false}
                    onClick={() => { setModal(true) }}
                    hasIcon={true}
                    iconName="plus"
                />
            </S.ButtonAndHoursContainer>
            {modal && <Modal type={handleModalType()} />}
            {selected === 0 &&
                <S.CustomTable>
                    <thead>
                        <tr>
                            <th>Nome do avaliador</th>
                            <th>E-mail</th>
                            <th>Matrícula</th>
                            <th>Abrir</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mauros Reis FIlho</td>
                            <td>mauros@teste.com</td>
                            <td>40028922</td>
                            <td>✅</td>
                            <td>🗑️</td>
                        </tr>
                        <tr>
                            <td>Mauros Reis FIlho</td>
                            <td>mauros@teste.com</td>
                            <td>40028922</td>
                            <td>✅</td>
                            <td>🗑️</td>
                        </tr>
                    </tbody>
                </S.CustomTable>
            }

            {selected === 1 &&
                <S.CustomTable>
                    <thead>
                        <tr>
                            <th>Nome do curso</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course: any) => (
                            <tr>
                                <td>{course?.courseName}</td>
                                <td><img onClick={() => handleDeleteCourse(course?.id)} src={Trash} alt="trash-icon" /></td>
                            </tr>
                        ))
                        }
                        {courses.length === 0 && <p>Nenhum curso encontrado</p>}
                    </tbody>
                </S.CustomTable>
            }
            {selected === 2 &&
                <S.CustomTable>
                    <thead>
                        <tr>
                            <th>Nome da categoria</th>
                            <th>Abrir</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Categoria 1 </td>
                            <td>✅</td>
                            <td>🗑️</td>
                        </tr>
                        <tr>
                            <td>Categoria 2 </td>
                            <td>✅</td>
                            <td>🗑️</td>
                        </tr>
                    </tbody>
                </S.CustomTable>
            }
        </S.Content>
    );
}

export default Management;