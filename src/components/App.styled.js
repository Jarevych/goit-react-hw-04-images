import styled from 'styled-components';

export const StyledAppContainer = styled.div`
header {
    background-color: rgb(34, 75, 153);
  }
  .searchbutton {
    position: absolute;
    height: 38px;
    background: none;
    border: none;
  }
  button:active {
    background-color: #2d19e2;
  }
  form {
    margin: 0 auto;
    display: flex;
  }
  input {
    height: 38px;
    font-size: 20px;
    padding-left: 24px;
    position: absolute;
    width: 400px;
    border-radius: 10px;
    border: none;
  }
  ul {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }
  li {
    display: flex;
  }
  .spinner {
    display: flex;
    margin: 0 auto;
  }
  .loadbtn {
    color: white;
    background-color: blue;
    border: 1px solid blue;
    border-radius: 10px;
    font-size: 24px;
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  
    margin: 0 auto;
  }
  .overlayDiv {
    position: relative;
  }
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    opacity: 0; 
    transition: opacity 0.8s ease;
  }
  .modal {
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    max-width: 100%; 
    max-height: 100%; 
    overflow: auto;
    opacity: 0; 
    transition: transform 0.15s ease 0s, opacity 0.15s ease 0s;
  }
  .modal.visible {
    opacity: 1; 
  }
  .overlay.visible {
    opacity: 1; 
  }
`;