import { CustomButton } from "../../atoms/CustomButton/index.tsx";
import Input from "../../atoms/Input/index.tsx";
import Select from "../../atoms/Select/index.tsx";
import ActivitiesTable from "../../molecules/activitiesTable/index.tsx";
import * as S from "./styles.ts"

const Evaluation = () => {
    return (
        <S.Content>
            <S.PageTitle>Filtrar Atividade(s)</S.PageTitle>

            <S.FilterContainer>
                <S.InputsFilter>
                    <Input
                        label="Nome do aluno(a)"
                        type="text"
                        placeholder="Nome"
                        onChange={() => { }}
                        light={true}
                    />
                    <Input
                        label="Matrícula"
                        type="text"
                        placeholder="Digite a matrícula do(a) aluno(a)"
                        onChange={() => { }}
                        light={true}
                    />
                    <Select
                        label="Curso"
                        onChange={() => { }}
                    />
                    <Select
                        label="Situação"
                        onChange={() => { }}
                    />
                </S.InputsFilter>
                <S.SearchButton>
                    <CustomButton
                        children="Buscar"
                        color="#2D60FF"
                        hasborder={false}
                        hasIcon={true}
                        iconName="search"
                        height="1.875rem"
                        onClick={() => { }}
                    />
                </S.SearchButton>
            </S.FilterContainer>

            <ActivitiesTable type="evalueateActivity" />
        </S.Content>
    );
}

export default Evaluation;