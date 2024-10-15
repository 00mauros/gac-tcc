import { useEffect, useState } from "react";
import * as S from "./styles.ts"
import { CustomButton } from "../../atoms/CustomButton/index.tsx";
import ActivitiesTable from "../../molecules/activitiesTable/index.tsx";
import Modal from "../../molecules/modal/index.tsx";

const Activities = () => {
    const [selected, setSelected] = useState(true);
    const [modal, setModal] = useState(false);

    useEffect(() => {
        window.addEventListener("closeModal", (event: any) => {
            setModal(event.detail.isOpenModal);
        })
    }, []);

    return (
        <S.Content>
            <S.HeaderOptions>
                <S.TextOptions selected={selected} onClick={() => setSelected(true)}>Cadastrar atividade(s)</S.TextOptions>
                <S.TextOptions selected={!selected} onClick={() => setSelected(false)}>Atividade(s) pendente(s)</S.TextOptions>
            </S.HeaderOptions>

            {selected &&
                <S.ButtonAndHoursContainer>
                    <CustomButton
                        children="Adicionar"
                        color="#2D60FF"
                        hasborder={false}
                        onClick={() => {setModal(true)}}
                        hasIcon={true}
                        iconName="plus"
                    />
                    <S.HoursText>Horas cadastradas: <b>0</b></S.HoursText>
                </S.ButtonAndHoursContainer>
            }

            <ActivitiesTable type={selected ? "addActivity" : "pendingActivity"} />
            {modal && <Modal type="addActivity"/>}
        </S.Content>
    );
}

export default Activities;