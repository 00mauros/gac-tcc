import React, { useState } from "react";
import * as S from "./styles";

const FileInput: React.FC = () => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div>
      <S.Label>Anexar arquivo (.pdf ou .docx):</S.Label>
      <S.FileInputContainer>
        <S.HiddenInput
          type="file"
          onChange={handleFileChange}
          accept=".pdf,.docx"
          id="file-upload"
        />
        <label htmlFor="file-upload">
          <S.FileName>{fileName || "Selecionar arquivo"}</S.FileName>
        </label>
      </S.FileInputContainer>
    </div>
  );
};

export default FileInput;