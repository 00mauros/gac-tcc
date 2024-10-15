import openIcon from "../../assets/icons/openActivityIcon.svg";
import { CustomButton } from "../../atoms/CustomButton";
import { useNavigate } from 'react-router-dom';
import trashIcon from "../../assets/icons/trash-icon.png";

import * as S from "./styles"
import * as T from "./types"

import { useEffect, useState } from "react";
import api from "../../services/api";
import Modal from "../modal";

interface ActivitiesProps {
    type: string
}

const ActivitiesTable = ({ type }: ActivitiesProps) => {
    const userId = sessionStorage.getItem("userId");
    const navigate = useNavigate();
    const [activities, setActivities] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [modalType, setModalType] = useState("confirmation");

    useEffect(() => {
        api.get(`/user/${userId}/activities`).then((response) => {
            setActivities(response.data)
            console.log("response", response.data);

        }).catch((error) => {
            console.log(error)
        })
    }, [])

    const handleDeleteActivity = (id: string) => {
        setOpenModal(false);
    }

    useEffect(() => {
        window.addEventListener("closeModal", (event: any) => {
            setOpenModal(event.detail.isOpenModal);
        })
    }, []);

    switch (type) {
        case "addActivity":
            return (
                <>
                    <S.Table maxHeight={false}>
                        <S.TableHeader>
                            <p>Categoria</p>
                            <p>Carga horária</p>
                            <p>Abrir</p>
                            <p>Remover</p>
                        </S.TableHeader>
                        {activities && activities.map((activity: T.ActivityTableItem) =>
                            <S.TableRow>
                                {openModal && 
                                    <Modal type={modalType} 
                                        handleDeleteActivity={() => handleDeleteActivity(activity.id)} 
                                        addActivityInitialState={activity} 
                                    />
                                }
                                <p>{activity.category}</p>
                                <p>{activity.workload}</p>
                                <img
                                    onClick={() => {
                                        setOpenModal(true);
                                        setModalType("confirmation");
                                    }}
                                    src={openIcon}
                                    alt="OpenIcon"
                                />
                                <img
                                    onClick={() => {
                                        setOpenModal(true);
                                        setModalType("addActivity");
                                    }}
                                    src={trashIcon}
                                    alt="trashIcon"
                                />
                            </S.TableRow>)}

                    </S.Table>

                    <S.SendButton>
                        <CustomButton
                            children="Enviar"
                            color="#1D1D1D"
                            hasborder={false}
                            onClick={() => { }}
                            hasIcon={true}
                            iconName="upload"
                        />
                    </S.SendButton>
                </>
            )
        case "pendingActivity":
            return (
                <>
                    <S.Table maxHeight={false}>
                        <S.TableHeader>
                            <p>Carga horária total</p>
                            <p>Status</p>
                        </S.TableHeader>
                        {activities && activities.map((activity: any) =>
                            <S.TableRow>
                                <p>{activity.workload}</p>
                                <S.Status status={activity.approval ? "approved" : "rejected"}>Aprovado</S.Status>
                            </S.TableRow>
                        )}
                    </S.Table>
                </>
            )
        case "evalueateActivity":
            return (
                <>
                    <S.Table maxHeight={false}>
                        <S.TableHeader>
                            <p>Nome do aluno(a)</p>
                            <p>Matrícula</p>
                            <p>Curso</p>
                            <p>Situação</p>
                            <p>Abrir</p>
                        </S.TableHeader>
                        <S.TableRow>
                            <p>Adrielzin rei dela</p>
                            <p>400222</p>
                            <p>Sistemas</p>
                            <S.Status status="approved">Avaliada</S.Status>
                            <p><img src={openIcon} alt="openIcon" /></p>
                        </S.TableRow>
                        <S.TableRow>
                            <p>Adrielzin rei dela</p>
                            <p>400222</p>
                            <p>Sistemas</p>
                            <S.Status status="approved">Avaliada</S.Status>
                            <p><img src={openIcon} alt="openIcon" /></p>
                        </S.TableRow>
                        <S.TableRow>
                            <p>Adrielzin rei dela</p>
                            <p>400222</p>
                            <p>Sistemas</p>
                            <S.Status status="approved">Avaliada</S.Status>
                            <p><img src={openIcon} alt="openIcon" /></p>
                        </S.TableRow>
                        <S.TableRow>
                            <p>Adrielzin rei dela</p>
                            <p>400222</p>
                            <p>Sistemas</p>
                            <S.Status status="approved">Avaliada</S.Status>
                            <p><img onClick={() => { navigate("/evaluation/view") }} src={openIcon} alt="openIcon" /></p>
                        </S.TableRow>
                    </S.Table>
                </>
            )
    }
}

export default ActivitiesTable;