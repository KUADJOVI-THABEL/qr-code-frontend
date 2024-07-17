// import React from 'react';
// import logo from './logo.svg';
// import './svg';

import './App.css';
import closeIcon from './close.svg';
import SVGComponent from './svg';
// import styled from 'styled-components';

import React, { useState, useRef, FC, Dispatch, SetStateAction, useEffect, RefObject, Fragment } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

interface MenuProps {
  open: boolean;
}

interface BurgerProps {
  open: boolean;
  onClicked?(): any; // how to make it optional?

  setOpen?: Dispatch<SetStateAction<boolean>>;
}

const StyledMenu = styled.nav<MenuProps>`
  display: flex;
  flex-direction: column;
  justify-content: start;
  background: #F7F8F9;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  height: 100vh;
  padding: 0;

  position: absolute;
  top: 4rem;
  right: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 99;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;

  }
  ul li:not(:last-child) {
  padding: 0;
  margin: 0;
  padding: 1rem 3rem;
  border-bottom: 1px solid #E1E1E1;
  width: 100%;
  text-align: left;
  }
  ul li:not(:last-child):hover{
    background: #E1E1E1;
    border-bottom: 2px solid var(--btn-primary);
    }
  a {
    text-transform: uppercase;
    color: #0D0C1D;
    text-decoration: none;
    color: var(--btn-primary);
    transition: color 0.3s linear;
    text-align: left;
    font-size: 1.5rem;
    &:hover {
      color: #343078;
    }
  }
    .login {
      color: var(--btn-primary);
      font-size: 1rem;
      
    }
      ul li:last-child {
       padding: 1rem 3rem;}
`;

const Menu: FC<MenuProps> = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <ul>
        <li>
          <a href="/">
            Product
          </a>
        </li>
        <li>
          <a href="/">
            Resource
          </a>
        </li>
        <li>
          <a href="/">
            Support
          </a>
        </li>
        <li>
          <a href="/">
            About Us
          </a>
        </li>
        <li>
          <a href="/">
            Blog
          </a>
        </li>
        <li>
          <a href="/" className='login'>
            Login
          </a>
        </li>
      </ul>
         </StyledMenu>
  );
};

const StyledBurger = styled.button<BurgerProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }
  // when open is true, add the close icon 
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => open ? 'black' : 'var(--btn-primary)'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    display: ${({ open }) => open ? 'none' : 'block'};


  }
    .close-icon {
      display: ${({ open }) => open ? 'block' : 'none'};
    }
}
`;

const Burger: FC<BurgerProps> = ({ open, setOpen }) => {

  function handleClick() {
    if (setOpen)
      setOpen(!open);
  }
  return (
    <>
      <StyledBurger open={open} onClick={handleClick}>
        <div />
        <div />
        <div />
        <img src={closeIcon} alt="X" className='close-icon' />
      </StyledBurger>

    </>

  );
};





const useOnClickOutside = (ref: RefObject<HTMLDivElement>, handler: (event: MouseEvent | TouchEvent) => void) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//        <nav>
//         <ul>
//           <li>
//             <a href="/">
//             <SVGComponent></SVGComponent>
//             </a>
//           </li>
//           <li>
//             <a href="/" className='btn'>sign up</a>
//           </li>
//         </ul>
//        </nav>
//       </header>
//     </div>
//   );
// }

const App: FC = () => {
  const [open, setOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <a href="/">
                <SVGComponent></SVGComponent>
              </a>
            </li>
            <li>
              <a href="/" className='btn'>sign up</a>
              <div ref={node}>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} />
              </div>
            </li>
          </ul>
        </nav>
      </header>

    </div>
  );
}

export default App;
