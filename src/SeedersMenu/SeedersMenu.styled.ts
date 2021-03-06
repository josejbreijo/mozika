import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";
import { mediaQuery } from "../utils/style";

export const ArrowIcon = styled(MdKeyboardArrowDown)`
  position: absolute;
  right: 3rem;
`;

export const SeedCounter = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 2rem 8rem;
    cursor: pointer;
    border: none;
    outline: none;
    color: #78619E;
    width: 200px;
    flex-shrink: 0;
    background-color: white;
    margin-left: auto;
    transition: color .3s;
    border-radius: 2rem;
    box-shadow: 2px 3px 4px 1px rgba(0,0,0,0.2);
}
`;

export const AlbumArt = styled.img`
  width: 10rem;
  min-width: 10rem;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  span {
    font-size: 3rem;
  }
`;

export const Row = styled.li`
  display: flex;
  padding: 2rem;
  list-style: none;
  align-items: center;
  ${AlbumArt} + ${Details} {
    margin-left: 2rem;
  }
`;

export const Dropdown = styled.ul`
  width: 100rem;
  padding: 0;
  margin-top: 1rem;
  background-color: white;
  border-radius: 2rem;
  padding: 0;
  box-shadow: 2px 3px 4px 1px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

export const BaseButton = styled.button`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  outline: none;
  --webkit-appearance: none;
  background-color: transparent;
  border: none;
`;

export const RemoveButton = styled(BaseButton)`
  margin-left: auto;
  &:hover {
    color: red;
  }
`;

export const RecommendationsButton = styled(BaseButton)`
  width: 100%;
  height: 13rem;
  background-color: #483a5d;
  font-weight: bold;
  color: white;
  transition: ease all 200ms;
  &:hover {
    background-color: #9a8eac;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1000;
  float: right;
  padding: 3rem;
  ${mediaQuery.tablet`
    padding: 0;
    width: 100%;
    ${SeedCounter} {
      margin: 4rem auto;
      border-radius: 6rem;
    }
    ${Dropdown} {
      width: 100%;
    }
  `};
`;
