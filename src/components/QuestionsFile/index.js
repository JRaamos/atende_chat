import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { UploadContainer, UploadContainerIcon, UploadInstructionsLabel, StyledSVG, StyledCircle, TrashIcon, UploadIcon, PdfContainer, TrashContainer } from './styled';
import Button from 'components/Form/Button';
import { toast } from 'react-toastify';
import UploadFile from 'components/Form/UploadFile';

import { Icon, Title } from 'ui/styled';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function QuestionsFile() {
  const [preview, setPreview] = useState(null);
  const [numPages, setNumPages] = useState(0);
  const [fileType, setFileType] = useState('');

  const validateFile = (file) => {
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const isValid = validTypes.includes(file.type);
    if (!isValid) {
      toast.error('Apenas arquivos PDF, DOC ou DOCX são permitidos!');
      return false;
    }
    setFileType(file.type); // Salva o tipo do arquivo
    return isValid;
  };

  const onPreview = (fileUrl) => {
    setPreview(fileUrl);
  };

  const removePreview = () => {
    setPreview(null);
    setNumPages(0);
    setFileType('');
  };

  const renderFilePreview = () => {
    if (fileType === 'application/pdf') {
      return (
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
      );
    } else {
      const fileName = preview.split('/').pop();
      return (
        <PdfContainer>
          <TrashContainer>
            <Icon icon='trash' onClick={removePreview} />
          </TrashContainer>
          <Title small>{fileName}</Title>
        </PdfContainer>
      );
    }
  };

  return (
    <>
      <UploadFile
        accept=".pdf, .doc, .docx"
        validate={validateFile}
        onPreview={onPreview}
        onChange={(file) => console.log('Arquivo carregado:', file)}
      >
        <UploadContainer>
          {preview ? (
            renderFilePreview()
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