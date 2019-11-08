import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const FileUpload = () => (
  <Container>
    <label htmlFor="resume">
      <p>Upload Resume</p>
      <input type="file" id="resume" name="file" />
    </label>
  </Container>
);

export default FileUpload;
