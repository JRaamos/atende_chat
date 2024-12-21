import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { UploadContainer, UploadContainerIcon, UploadInstructionsLabel, StyledSVG, StyledCircle, TrashIcon, UploadIcon, PdfContainer, TrashContainer } from './styled';
import Button from 'components/Form/Button';
import { toast } from 'react-toastify';
import UploadFile from 'components/Form/UploadFile';

import { Icon } from 'ui/styled';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function QuestionsFile() {
  const [preview, setPreview] = useState(null);
  const [numPages, setNumPages] = useState(0);

  const validateFile = (file) => {
    const isValid = file.type === 'application/pdf';
    if (!isValid) {
      toast.error('Apenas arquivos PDF são permitidos!');
      return false;
    }
    return isValid;
  };

  const onPreview = (fileUrl) => {
    setPreview(fileUrl);
  };

  const removePreview = () => {
    setPreview(null);
    setNumPages(0);
  };

  return (
    <>
      <UploadFile
        accept=".pdf"
        validate={validateFile}
        onPreview={onPreview}
        onChange={(file) => console.log('Arquivo carregado:', file)}
      >
        <UploadContainer>
          {preview ? (
            <PdfContainer>
              <TrashContainer>
                <Icon icon='trash' onClick={removePreview} />
              </TrashContainer>
              <Document
                file={preview}
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
              >
                <Page pageNumber={1} width={100} />
              </Document>
            </PdfContainer>
          ) : (
            <>
              <UploadContainerIcon>
                <StyledSVG>
                  <StyledCircle />
                </StyledSVG>
                <UploadIcon src="/icons/chevron-up.svg" />
              </UploadContainerIcon>
              <Button outline small nospace color="primary">
                Procurar arquivo
              </Button>
            </>
          )}
        </UploadContainer>
      </UploadFile>
    </>
  );
}