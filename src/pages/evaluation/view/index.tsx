import downloadIcon from "../../../assets/icons/downloadIcon.svg"
import { CustomButton } from "../../../atoms/CustomButton/index.tsx";

import * as S from "./styles.ts"

const EvaluationView = () => {
    return (
        <S.Content>
            <S.PageTitle>Avaliar atividade(s) complementar</S.PageTitle>

            <S.FilterContainer>
                <p><b>Nome do aluno: </b>Adriel Rural da Cidade</p>
                <p><b>Matrícula: </b>001122233334</p>
                <p><b>Curso: </b>Sistemas de Informação</p>
            </S.FilterContainer>

            <S.HoursContainer>
                <p>Total de horas lançadas: 150 horas</p>
                <p>Total de horas avaliadas: 0 horas</p>
            </S.HoursContainer>

            {/* <S.ActivitiesContainer>
                <S.ActivityBoxContainer>
                    <S.ActivityDetails>
                        <S.DetailItem>Categoria da atividade: <S.DetailLink href="#">Palestra</S.DetailLink></S.DetailItem>
                        <S.DetailItem>Carga horária da atividade: <S.DetailLink href="#">75 horas</S.DetailLink></S.DetailItem>
                        <S.DetailItem>Início da atividade: 17/12/2023</S.DetailItem>
                        <S.DetailItem>Link do comprovante: <span style={{ color: '#A0A0A0' }}>não informado</span></S.DetailItem>
                        <S.DetailItem>Comprovante da atividade: <S.DetailLink href="#">comprovante.pdf <span><img src={downloadIcon} alt="downloadicon" /></span></S.DetailLink></S.DetailItem>
                    </S.ActivityDetails>
                    <S.CheckboxContainer>
                        <S.Checkbox />
                    </S.CheckboxContainer>
                </S.ActivityBoxContainer>

                <S.ActivityBoxContainer>
                    <S.ActivityDetails>
                        <S.DetailItem>Categoria da atividade: <S.DetailLink href="#">Palestra</S.DetailLink></S.DetailItem>
                        <S.DetailItem>Carga horária da atividade: <S.DetailLink href="#">75 horas</S.DetailLink></S.DetailItem>
                        <S.DetailItem>Início da atividade: 17/12/2023</S.DetailItem>
                        <S.DetailItem>Link do comprovante: <span style={{ color: '#A0A0A0' }}>não informado</span></S.DetailItem>
                        <S.DetailItem>Comprovante da atividade: <S.DetailLink href="#">comprovante.pdf <span><img src={downloadIcon} alt="downloadicon" /></span></S.DetailLink></S.DetailItem>
                    </S.ActivityDetails>
                    <S.CheckboxContainer>
                        <S.Checkbox />
                    </S.CheckboxContainer>
                </S.ActivityBoxContainer>
                <S.ActivityBoxContainer>
                    <S.ActivityDetails>
                        <S.DetailItem>Categoria da atividade: <S.DetailLink href="#">Palestra</S.DetailLink></S.DetailItem>
                        <S.DetailItem>Carga horária da atividade: <S.DetailLink href="#">75 horas</S.DetailLink></S.DetailItem>
                        <S.DetailItem>Início da atividade: 17/12/2023</S.DetailItem>
                        <S.DetailItem>Link do comprovante: <span style={{ color: '#A0A0A0' }}>não informado</span></S.DetailItem>
                        <S.DetailItem>Comprovante da atividade: <S.DetailLink href="#">comprovante.pdf <span><img src={downloadIcon} alt="downloadicon" /></span></S.DetailLink></S.DetailItem>
                    </S.ActivityDetails>
                    <S.CheckboxContainer>
                        <S.Checkbox />
                    </S.CheckboxContainer>
                </S.ActivityBoxContainer>
            </S.ActivitiesContainer> */}

            {/* <S.ButtonsSection>
                <CustomButton 
                    color="#1D1D1D"
                    hasborder={false}
                    children="Rejeitar"
                    onClick={() => {}}
                />
                <CustomButton 
                    color="#2D60FF"
                    hasborder={false}
                    children="Aprovar"
                    onClick={() => {}}
                />
            </S.ButtonsSection> */}

        </S.Content>
    );
}

export default EvaluationView;