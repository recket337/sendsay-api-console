import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import settings from "./../../../assets/img/drag-element.svg";

type PropsType = {
  handleCopy?: (e: any) => void;
};

const StyledDropdown = styled.div`
  ul {
    position: absolute;
    top: 42px;
    z-index: 1000;

    background: #ffffff;
    border: 2px solid #e5e5e5;
    box-sizing: border-box;

    background: #ffffff;
    border: none;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 3px;
    li {
      padding: 15px;
      font-family: "SF Pro Text";

      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      list-style: none;
      &:hover {
        cursor: pointer;
      }
    }
    li:last-child {
      border-top: 1px solid rgba(0, 0, 0, 0.2);
    }
  }
`;

const Dropdown: FC<PropsType> = ({ handleCopy }) => {
  const ref = useRef<any>();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const onOptionClicked = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isOpen]);

  return (
    <StyledDropdown ref={ref}>
      <button onClick={toggle} className="settings">
        <img src={settings} />
      </button>
      {isOpen && (
        <ul>
          <li onClick={onOptionClicked}>Выполнить</li>
          <li
            onClick={(e) => {
              onOptionClicked();
              
            }}
          >
            Скопировать
          </li>
          <li onClick={onOptionClicked}>Удалить</li>
        </ul>
      )}
    </StyledDropdown>
  );
};

export default Dropdown;
