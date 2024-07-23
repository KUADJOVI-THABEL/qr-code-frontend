// import React from 'react';
// import logo from './logo.svg';
// import './svg';

import './App.css';
import closeIcon from './close.svg';
import { BackChevronSVG } from './svg';
// import styled from 'styled-components';



/** svgs importations as Component */
import { ReactComponent as SVGComponent } from './svgicons/brand.svg';
import { ReactComponent as BarCode } from './svgicons/barcode-svgrepo-com.svg';
import { ReactComponent as BitCoin } from './svgicons/bitcoin-circle-svgrepo-com.svg';
import { ReactComponent as Email } from './svgicons/email-svgrepo-com.svg';
import { ReactComponent as Facebook } from './svgicons/facebook-svgrepo-com.svg';
import { ReactComponent as File } from './svgicons/file-minus-alt-svgrepo-com.svg';
import { ReactComponent as Card } from './svgicons/id-card-svgrepo-com.svg';
import { ReactComponent as ImageIcon } from './svgicons/images-967-svgrepo-com.svg';
import { ReactComponent as AppIcon } from './svgicons/logo-apple-appstore-svgrepo-com.svg';
import { ReactComponent as Mp3 } from './svgicons/mp3-file-type-svgrepo-com.svg';
import { ReactComponent as Pdf } from './svgicons/pdf-document-svgrepo-com.svg';
import { ReactComponent as Sms } from './svgicons/sms-svgrepo-com.svg';
import { ReactComponent as Twitter } from './svgicons/twitter-svgrepo-com.svg';
import { ReactComponent as Www } from './svgicons/www-presentation-svgrepo-com.svg';
import { ReactComponent as Wifi } from './svgicons/wifi-good-svgrepo-com.svg';

import React, { useState, useRef, FC, Dispatch, SetStateAction, useEffect, RefObject, Fragment } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { ChevronSVG } from './svg';

interface MenuProps {
  open: boolean;
  detailedMenuBoolean?: boolean;
  setDetailedMenuBoolean?: Dispatch<SetStateAction<boolean>>;

}

interface BurgerProps {
  open: boolean;
  onClicked?(): any; // how to make it optional?
  setOpen?: Dispatch<SetStateAction<boolean>>;
}


const StyledMenu = styled.nav<MenuProps>`
  display: ${({ open, detailedMenuBoolean }) => {
    console.log('detailedMenuBoolean', detailedMenuBoolean);
    console.log('open', open);
    if (open && detailedMenuBoolean) {
      return 'none';
    } else if (open && !detailedMenuBoolean) {
      return 'flex';
    } else if (!open) {
      return 'none';
    }
  }};
  flex-direction: column;
  justify-content: start;
  background: #F7F8F9;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  height: 80vh;
  padding: 0;
  position: absolute;
  top: 4rem;
  right: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 9999;
  box-shadow:0 12px 24px rgba(15, 22, 41, .16);

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
  margin: 0;
  display: flex;
  align-items: center;
  gap:5rem;
  justify-content: space-between;
  padding: 1rem 2rem;
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
    ul li:last-child {
    align-self: center;
  }
   
    .login {
      color: var(--btn-primary);
      font-size: 1.2rem;
      text-transform: uppercase;
      text-decoration: underline;
      text-align: center;
      
    }
      ul li:last-child {  
       padding: 1rem 3rem;}

    &.detailed-menu {
      display: ${({ open, detailedMenuBoolean }) => {
    console.log('detailedMenuBoolean 2', detailedMenuBoolean);
    console.log('open 2', open);
    if (open && detailedMenuBoolean) {
      return 'flex';
    } else {
      return 'none';
    }
  }
  }
}
  
 
`;

const DetailedMenu: FC<MenuProps> = ({ open, detailedMenuBoolean, setDetailedMenuBoolean }) => {
  console.log('Detaled menu is rendered ');
  return (
    <StyledMenu open={open} className='detailed-menu' detailedMenuBoolean={detailedMenuBoolean} >
      <ul className='ListDesc'>
        <li className='ElementDescriptor  '>
          <p>
            <span className='headerSpan' onClick={() => { if (setDetailedMenuBoolean) setDetailedMenuBoolean(false) }}>
              <BackChevronSVG></BackChevronSVG>
              <p>back</p>
            </span>
            <span className='headerSpanTitle'>Products</span>
          </p>
        </li>
        <li className='ElementDescriptor'>
          <p>Pro Features</p>
          <p>Create QR codes your audiances want to Scan</p>
        </li>
        <li className='ElementDescriptor'>
          <p>Pro Features</p>
          <p>Create QR codes your audiances want to Scan</p>
        </li>
        <li className='ElementDescriptor'>
          <p>Pro Features</p>
          <p>Create QR codes your audiances want to Scan</p>
        </li>
      </ul>

    </StyledMenu>
  );
}
const Menu: FC<MenuProps> = ({ open, setDetailedMenuBoolean, detailedMenuBoolean }) => {
  const handleClick = () => {
    console.log('click');
    if (setDetailedMenuBoolean)
      // if false
      setDetailedMenuBoolean(true);
  }
  return (
    <StyledMenu open={open}>
      <ul>
        <li onClick={handleClick}>
          <a>
            Product
          </a>
          <ChevronSVG></ChevronSVG>
        </li>
        <li>
          <a>
            Resource
          </a>
          <ChevronSVG></ChevronSVG>
        </li>
        <li>
          <a >
            Support
          </a>
          <ChevronSVG></ChevronSVG>
        </li>
        <li>
          <a>
            About Us
          </a>
          <ChevronSVG></ChevronSVG>
        </li>
        <li>
          <a>
            Blog
          </a>
          <ChevronSVG></ChevronSVG>
        </li>
        <li>
          <a className='login'>
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

function UrlForm() {

  return (
    <div>
      <form>
        <input type='text' placeholder='url'></input>
        <button>Generate</button>
      </form>
    </div>
  );
}
function TextForm() {
  return (
    <div>
      <form>
        <textarea placeholder='text'></textarea>
        <button>Generate</button>
      </form>
    </div>
  );
}
const App: FC = () => {
  const [open, setOpen] = useState(false);
  const [detailedMenuBoolean, setDetailedMenuBoolean] = useState(false);
  const [icontype, setIconType] = useState('url');
  const node = useRef<HTMLDivElement>(null);
  const nodeForDetailedMenu = useRef<HTMLDivElement>(null);
  /* my approch is to set a ref for each 


  */
  useOnClickOutside(node, () => { if (!detailedMenuBoolean) setOpen(false) });
  useOnClickOutside(nodeForDetailedMenu, () => { setDetailedMenuBoolean(false); setOpen(false) });
  const icons: { [index: string]: JSX.Element } = {
    'WWW': UrlForm(),
    'Text': TextForm(),
  }
  const indexIcons: { [index: number]: string } = {
    1: 'Barcode',
    2: 'Bitcoin',
    3: 'Email',
    4: 'Facebook',
    5: 'Text',
    6: 'V-Card',
    7: 'Image',
    8: 'App Stores',
    9: 'Mp3',
    10: 'Pdf',
    11: 'SMS',
    12: 'Twitter',
    13: 'WWW',
    14: 'Wifi',
  }
  const iconsKeys = Object.keys(icons);
  function ColorateIcon(index: number) {
    console.log('ColorateIcon');
    return () => {
      removeActiveClass();
      console.log('ColorateIcon 2');
      console.log('index', index);
      // icons[index].style.color = 
      const div_icon_text = document.getElementsByClassName('icon-text')[index-1] as HTMLElement;
      const iconChoosed = indexIcons[index];
      setIconType(iconChoosed);
      if (!div_icon_text)
        return
      div_icon_text.classList.add('active');
      console.log('div_icon_text', div_icon_text);
    }
  } // to be implemented

  // remove active class from all elements
  // add active class to the clicked
  function removeActiveClass() {
    const elements = document.getElementsByClassName('icon-text');
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i] as HTMLElement;
      element.classList.remove('active');
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>
              <a href="/">
                <SVGComponent className='logo-svg'></SVGComponent>
              </a>
            </li>
            <li>
              <a href="/" className='btn'>sign up</a>
              <div ref={node}>
                <Burger open={open} setOpen={setOpen} />
                <Menu open={open} setDetailedMenuBoolean={setDetailedMenuBoolean} detailedMenuBoolean={detailedMenuBoolean} />
              </div>
            </li>
          </ul>
          <DetailedMenu open={open} detailedMenuBoolean={detailedMenuBoolean} setDetailedMenuBoolean={setDetailedMenuBoolean} ></  DetailedMenu>
        </nav>
      </header>
      <main >

        <div className="svgs">
          <div className='icon-text' onClick={ColorateIcon(1)}>
            <BarCode />
            <span>Barcode</span>
          </div>
          <div className='icon-text'  onClick={ColorateIcon(2)}>
            <BitCoin />
            <span>Bitcoin</span>
          </div>
          <div className='icon-text'  onClick={ColorateIcon(3)}>
            <Email />
            <span>Email</span>
          </div>
          <div className='icon-text'  onClick={ColorateIcon(4)}>
            <Facebook />
            <span>Facebook</span>
          </div>
          <div className='icon-text'  onClick={ColorateIcon(5)}>
            <File />
            <span>Text</span>
          </div>
          <div className='icon-text'  onClick={ColorateIcon(6)}>
            <Card />
            <span>V-Card</span>
          </div>
          <div className='icon-text'  onClick={ColorateIcon(7)}>
            <ImageIcon />
            <span>Image</span>
          </div>
          <div className='icon-text'  onClick={ColorateIcon(8)}>
            <AppIcon />
            <span>App Stores</span>
          </div>
          <div className='icon-text'  onClick={ColorateIcon(9)}>
            <Mp3 />
            <span>Mp3</span>
          </div>
          <div className='icon-text'  onClick={ColorateIcon(10)}>
            <Pdf />
            <span>Pdf</span>
          </div>
          <div className='icon-text'  onClick={ColorateIcon(11)}>
            <Sms />
            <span>SMS</span>
          </div>
          <div className='icon-text'  onClick={ColorateIcon(12)}>
            <Twitter />
            <span>Twitter</span>
          </div>
          <div className='icon-text'  onClick={ColorateIcon(13)}>
            <Www />
            <span>WWW</span>
          </div>
          <div className='icon-text'  onClick={ColorateIcon(14)}>
            <Wifi />
            <span>Wifi</span>
          </div>

        </div>
        <div>
          {
            iconsKeys.includes(icontype) && icons[icontype]
          }
        </div>
      </main>
    </div>
  );
}

export default App;
