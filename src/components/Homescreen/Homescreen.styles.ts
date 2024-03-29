import styled from "styled-components";

type NoButtonProps = {
  leftPosition: number;
  topPosition: number;
};

type ButtonProps = {
  fontSize: number;
  height: number;
  visibility: string;
};

export const Wrapper = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;

  h1,
  body {
    font-family: "Roboto", sans-serif;
    font-weight: 200;
    font-style: normal;
    margin: 20px;
  }
`;

export const Button = styled.button<ButtonProps>`
  width: 10em;
  height: ${(props) => props.height}px;
  margin: 10px;
  margin-top: 20px;
  font-size: ${(props) => props.fontSize}px;
  cursor: pointer;
  visibility: ${(props) => props.visibility};
`;

export const NoButton = styled.button<NoButtonProps>`
  position: absolute;

  top: ${(props) => props.topPosition}px;
  left: ${(props) => props.leftPosition}px;
  width: 10em;
  height: 70px;
  margin: 10px;
  z-index: 999;
  font-size: 20px;
`;

export const WinContainer = styled.div`
  margin: 10px;
  margin-top: 30px;
  margin-bottom: 20px;
  position: relative;
  left: 50%;
  transform: translate(-55%, 0%);

  display: flex;
  align-items: center;
  justify-content: center;

  width: 25em;
  padding: 20px;
  height: 160px;
`;
