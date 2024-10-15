import { CustomButton } from "../../atoms/CustomButton";
import FileInput from "../../atoms/FileInput";
import Input from "../../atoms/Input";
import Select from "../../atoms/Select";
import TextArea from "../../atoms/TextArea";
import CloseIcon from "../../assets/icons/closeIcon.png"
import AlertIcon from "../../assets/icons/alertIcon.png"

import * as S from "./styles"
import api from "../../services/api";
import { useState } from "react";

interface ActivitiesProps {
    type: string
    handleDeleteActivity?: () => void;
    addActivityInitialState?: {}
}

const Modal = ({ type, handleDeleteActivity }: ActivitiesProps) => {
    const userId = sessionStorage.getItem("userId");
    const [activityValues, setActivityValues] = useState({
        approval: false,
        file: "",
        workload: "",
        proof: "",
        startDate: "",
        description: "",
        comments: [],
    })
    const [courseName, setCourseName] = useState("")

    const handleClose = () => {
        dispatchEvent(
            new CustomEvent("closeModal", {
                detail: { isOpenModal: false },
            })
        )
    }

    const handleValues = (value: string, field: string) => {
        setActivityValues({
            ...activityValues,
            [field]: value
        })
    }

    const handleSubmitActivity = () => {
        api.post(`/user/${userId}/activities`, activityValues).then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const handleCourse = () => {
        api.post(`/user/${userId}/course`, courseName).then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    switch (type) {
        case "addActivity":
            return (
                <>
                    <S.Blur />
                    <S.Container>
                        <S.SideBarIcon src={CloseIcon} alt="close-modal-icon" onClick={handleClose} />
                        <S.Title>Cadastrar Atividade Complementar</S.Title>

                        <Select onChange={() => { }} label="Categoria da Atividade:" />

                        <Input
                            label="Carga Horária da Atividade (em horas)"
                            type="text"
                            placeholder="0.0"
                            light={true}
                            onChange={(e) => handleValues(e.target.value, "workload")}
                        />

                        <FileInput />

                        <Input
                            label="Link do Comprovante (opcional):"
                            type="text"
                            placeholder="https://example.com.br"
                            light={true}
                            onChange={(e) => handleValues(e.target.value, "proof")}
                        />

                        <Input
                            label="Data do início da atividade:"
                            type="date"
                            placeholder=""
                            light={true}
                            onChange={(e) => handleValues(e.target.value, "startDate")}
                        />

                        <TextArea
                            label="Descreva brevemente a atividade:"
                            placeholder=""
                            onChange={(e) => handleValues(e.target.value, "description")}
                        />

                        <S.SaveButton>
                            <CustomButton
                                children="Salvar"
                                color="#2D60FF"
                                hasborder={false}
                                onClick={handleSubmitActivity}
                            />
                        </S.SaveButton>
                    </S.Container>
                </>
            )
        case "addMeasurer":
            return (
                <>
                    <S.Blur />
                    <S.Container>
                        <S.SideBarIcon src={CloseIcon} alt="close-modal-icon" onClick={handleClose} />
                        <S.Title>Cadastrar novo avaliador</S.Title>

                        <Input
                            label="Nome: *"
                            type="text"
                            placeholder=""
                            light={true}
                            onChange={() => { }}
                        />

                        <Input
                            label="E-mail: *"
                            type="email"
                            placeholder="example@example.com"
                            light={true}
                            onChange={() => { }}
                        />

                        <Input
                            label="Matrícula: *"
                            type="text"
                            placeholder=""
                            light={true}
                            onChange={() => { }}
                        />

                        <S.ButtonsOption>
                            <CustomButton
                                children="Fechar"
                                color="#000000"
                                hasborder={false}
                                onClick={handleClose}
                            />
                            <CustomButton
                                children="Salvar"
                                color="#2D60FF"
                                hasborder={false}
                                onClick={() => { }}
                            />
                        </S.ButtonsOption>
                    </S.Container>
                </>
            )
        case "addCourse":
            return (
                <>
                    <S.Blur />
                    <S.Container>
                        <S.SideBarIcon src={CloseIcon} alt="close-modal-icon" onClick={handleClose} />
                        <S.Title>Cadastrar novo curso</S.Title>

                        <Input
                            label="Nome: *"
                            type="text"
                            placeholder=""
                            light={true}
                            onChange={(event) => setCourseName(event.target.value)}
                        />

                        <S.ButtonsOption>
                            <CustomButton
                                children="Fechar"
                                color="#000000"
                                hasborder={false}
                                onClick={handleClose}
                            />
                            <CustomButton
                                children="Salvar"
                                color="#2D60FF"
                                hasborder={false}
                                onClick={handleCourse}
                            />
                        </S.ButtonsOption>
                    </S.Container>
                </>
            )
        case "addCategory":
            return (
                <>
                    <S.Blur />
                    <S.Container>
                        <S.SideBarIcon src={CloseIcon} alt="close-modal-icon" onClick={handleClose} />
                        <S.Title>Cadastrar nova Categoria</S.Title>

                        <Input
                            label="Nome: *"
                            type="text"
                            placeholder=""
                            light={true}
                            onChange={() => { }}
                        />

                        <S.ButtonsOption>
                            <CustomButton
                                children="Fechar"
                                color="#000000"
                                hasborder={false}
                                onClick={handleClose}
                            />
                            <CustomButton
                                children="Salvar"
                                color="#2D60FF"
                                hasborder={false}
                                onClick={() => { }}
                            />
                        </S.ButtonsOption>
                    </S.Container>
                </>
            )
        case "confirmation":
                return (
                    <>
                        <S.Blur />
                        <S.Container>
                            <div className="modal-header">
                                <S.Title>Deseja excluir essa atividade?</S.Title>
                                <S.SideBarIcon src={AlertIcon} alt="close-modal-icon" />
                            </div>

                            <p>Esta ação é irreversível. Se continuar, não será possível desfazer essa operação.</p>
    
                            <S.ButtonsOption>
                                <CustomButton
                                    children="Fechar"
                                    color="#000000"
                                    hasborder={false}
                                    onClick={handleClose}
                                />
                                <CustomButton
                                    children="Continuar"
                                    color="#2D60FF"
                                    hasborder={false}
                                    onClick={handleDeleteActivity}
                                />
                            </S.ButtonsOption>
                        </S.Container>
                    </>
                )
    }
}

export default Modal;