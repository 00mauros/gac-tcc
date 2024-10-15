import { styled } from "styled-components";

export const Table = styled.section<{ maxHeight: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 493px;
  overflow-y: ${(props) => (props.maxHeight ? "scroll" : "hidden")};

  @media screen and (min-width: 600px) {
    font-size: 18px;
  }
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3.125rem;
  margin-bottom: 0.625rem;
  font-weight: 600;
  padding: 0 10px;
`;

export const TableRow = styled.section`
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  border: 1px solid #343c6a;
  padding: 13px 23px;
  border-radius: 5px;

  img {
    cursor: pointer;
  }
`;
export const Status = styled.p<{ status: string }>`
  font-weight: 400;
  color: ${(props) => (props.status === "approved" ? "#2D60FFC9" : props.status === "rejected" ? "#FF0000" : "hidden")};;
`;

export const SendButton = styled.div`
  display: flex;
  width: 8.1056rem;
  margin: 2rem auto 0 auto;
  
  @media screen and (min-width: 600px) {
    position: absolute;
    bottom: 70px;
    right: 70px;
  }
`;
