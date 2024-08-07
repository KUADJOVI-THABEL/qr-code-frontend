// import React from 'react';
// import logo from './logo.svg';
// import './svg';

import './App.css';
import closeIcon from './close.svg';
import { BackChevronSVG } from './svg';
import { StyledLabel, StyledRadio } from "./components/inputs/InputStyles";
import RadioButton from "./components/inputs/RadioButton";
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
import { ReactComponent as ArrowCycle } from './svgicons/arrow-cycle-svgrepo-com.svg';

import BusinessCard from "./imgs/business-card-for-sample_large.png";
import Flyer from "./imgs/flyer-for-sample_large.png";
import Brochure from "./imgs/brochure-for-sample_large.png"

import React, { useState, useRef, FC, Dispatch, SetStateAction, useEffect, RefObject } from 'react';
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


function UrlForm() {

  return (
    <div>
      <form>
        <div>
          <textarea placeholder='Enter your website or site' name='url-name' rows={1}></textarea>
        </div>

      </form>
    </div>
  );
}
function TextForm() {
  return (
    <div>
      <form>
        <textarea placeholder='Enter your text'></textarea>
      </form>
    </div>
  );
}

function EmailForm() {
  return (
    <div>
      <form>
        <div>
          <p className='form-header'>Email QR CODE</p>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type='email' placeholder='Enter your email' id='email' />
        </div>
        <div>
          <label htmlFor="subject">Subject </label>
          <input type='text' placeholder='Enter your subject' id="subject" />
        </div>
        <div>
          <label htmlFor="msg">Message</label>
          <textarea placeholder='Enter your message' className="border-textarea"></textarea>
        </div>
      </form>
    </div>
  );
}

function SmsForm() {
  return (
    <div>
      <form>
        <div>
          <p className='form-header'>SMS QR CODE</p>
        </div>
        <div>
          <label htmlFor="phone_number">Number</label>
          <input type='text' placeholder='Your phone number' id='phone_number' />
        </div>
        <div>
          <label htmlFor="msg">Message</label>
          <textarea placeholder='Enter your message' className="border-textarea"></textarea>
        </div>
      </form>
    </div>)
}

function WifiForm() {
  const [selectedValue, setSelectedValue] = useState<String>("");

  function radioGroupHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setSelectedValue(event.target.value);
  }

  useEffect(() => {
    console.log(selectedValue);
  }, [selectedValue]);

  return (
    <div>
      <form>
        <div>
          <p className='form-header'>WIFI QR CODE</p>
        </div>
        <div>
          <label htmlFor="ssid">Network Name</label>
          <input type='text' placeholder='SSID' id='ssid' />
        </div>
        <div>

          <label className="form-control">
            <input type="checkbox" name="checkbox" />
            <span>Hidden
              <div className="tooltip">
                <span className="tooltiptext">Is this a hidden Wifi network ?</span>
                <div className="tooltip-spacing">
                  <div className="tooltip-bg1"></div>
                  <div className="tooltip-bg2"></div>
                  <div className="tooltip-text">?</div>

                </div>

              </div>
            </span>
          </label>


        </div>
        <div>
          <label htmlFor="pwd">Password</label>
          <input type='text' id='pwd' />
        </div>
        {/* <div className='RadioButtons'>
          <div>
            <label htmlFor="encryption">Encryption</label>
          </div>

          <div>
            <input type="radio" id="none" name="encryption" value="None" />
            <label htmlFor="none">None</label>
          </div>
          <div>
            <input type="radio" id="wpa" name="encryption" value="WPA/WPA2" />
            <label htmlFor="wpa">WPA/WPA2</label>
          </div>
          <div>
            <input type="radio" id="wpe" name="encryption" value="WPE" />
            <label htmlFor="wpe">WPE</label>

          </div> */}
        <div className='RadioButtons'>
          <div>
            <label htmlFor="encryption">Encryption

              <div className="tooltip">
                <span className="tooltiptext">The type of security protocol on your network</span>
                <div className="tooltip-spacing">
                  <div className="tooltip-bg1"></div>
                  <div className="tooltip-bg2"></div>
                  <div className="tooltip-text">?</div>

                </div>

              </div>

            </label>
          </div>
          <div className='RadioWrapper'>
            <RadioButton
              value={"None"}
              label={"None"}
              key={"noneID"}
              id={"noneID"}
              name={"encryption"}
              disabled={false}
              defaultChecked={true}
              onChange={radioGroupHandler}
            />
            <RadioButton
              value={"WPA/WPA2"}
              label={"WPA/WPA2"}
              key={"WPAID"}
              id={"WPAID"}
              name={"encryption"}
              disabled={false}
              defaultChecked={false}
              onChange={radioGroupHandler}
            />
            <RadioButton
              value={"WEP"}
              label={"WEP"}
              key={"WEPD"}
              id={"WEPID"}
              name={"encryption"}
              disabled={false}
              defaultChecked={false}
              onChange={radioGroupHandler}
            />
          </div>
        </div>
      </form>
    </div>)
}

function BitCoinForm() {

  const [selectedValue, setSelectedValue] = useState<String>("");

  function radioGroupHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setSelectedValue(event.target.value);
  }

  useEffect(() => {
    console.log(selectedValue);
  }, [selectedValue]);
  return (
    <div>
      <form>
        <div>
          <p className='form-header'>Bitcoin QR CODE</p>
        </div>
        <div className='RadioButtons'>
          <div>
            <label htmlFor="cryptocurrency">Cryptocurrency
            </label>
          </div>
          <div className='RadioWrapper'>
            <RadioButton
              value={"Bitcoin"}
              label={"Bitcoin"}
              key={"BitcoinID"}
              id={"BitcoinID"}
              name={"cryptocurrency"}
              disabled={false}
              defaultChecked={true}
              onChange={radioGroupHandler}
            />
            <RadioButton
              value={"BitcoinCash"}
              label={"Bitcoin Cash"}
              key={"BitcoinCashID"}
              id={"BitcoinCashID"}
              name={"cryptocurrency"}
              disabled={false}
              defaultChecked={true}
              onChange={radioGroupHandler}
            />
            <RadioButton
              value={"Ether"}
              label={"Ether"}
              key={"EtherID"}
              id={"EtherID"}
              name={"cryptocurrency"}
              disabled={false}
              defaultChecked={true}
              onChange={radioGroupHandler}
            />
            <RadioButton
              value={"Litecoin"}
              label={"Litecoin"}
              key={"LitecounID"}
              id={"LitecoinID"}
              name={"cryptocurrency"}
              disabled={false}
              defaultChecked={true}
              onChange={radioGroupHandler}
            />

            <RadioButton
              value={"Dash"}
              label={"Dash"}
              key={"DashID"}
              id={"DashID"}
              name={"cryptocurrency"}
              disabled={false}
              defaultChecked={true}
              onChange={radioGroupHandler}
            />


          </div>
        </div>

        <div>
          <label htmlFor="amount">Amount</label>
          <input type='text' id='amount' />
        </div>

        <div>
          <label htmlFor="receiver">Receiver</label>
          <input type='text' id='receiver' placeholder='' />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <input type='text' id='amount' placeholder='optionnal' />
        </div>
      </form>
    </div>
  )
}

function TwiterForm() {
  let value = "";
  const limit = 280;
  const [selectedValue, setSelectedValue] = useState<String>("ProfileLink");
  const [content, setContent] = React.useState(value.slice(0, limit));

  const setFormattedContent = React.useCallback(
    (text: string) => {
      setContent(text.slice(0, limit));
    },
    [limit]
  );


  function handleRadioButton(event: React.ChangeEvent<HTMLInputElement>) {
    console.log("hey changed ", event.target.value)
    setSelectedValue(event.target.value);
  }



  return (
    <div>
      <form>
        <div>
          <p className='form-header'>Twitter</p>
        </div>
        <div className='RadioButtons'>
          <div>
            <label htmlFor="twitter_option">Choose an option
            </label>
          </div>
          <div className='RadioWrapper'>
            <RadioButton
              value={"ProfileLink"}
              label={"Link to your profile"}
              key={"ProfileLinkID"}
              id={"ProfileLinkID"}
              name={"twitter_option"}
              disabled={false}
              defaultChecked={true}
              onChange={handleRadioButton}
            />
            <RadioButton
              value={"Posttweet"}
              label={"Post a tweet"}
              key={"PostTweetID"}
              id={"PostTweetID"}
              name={"twitter_option"}
              disabled={false}
              defaultChecked={false}
              onChange={handleRadioButton}
            />
          </div>
        </div>

        {
          selectedValue == "ProfileLink" ? (
            <div>
              <label htmlFor="username">Your username</label>
              <input type='text' placeholder='@username' id='username' />
            </div>
          ) : (<div>
            <label htmlFor="tweet">Text</label>
            <textarea placeholder='Compose your tweet' className="border-textarea tweet"
              onChange={(event) => setFormattedContent(event.target.value)}
              value={content}
            ></textarea>
            <span>
              {content.length}/{limit}
            </span>
          </div>)
        }


      </form>
    </div>)
}

function VcarCodeForm() {
  return (
    <div>
      <form>
        <div>
          <p className='form-header'>vCard QR Code</p>
        </div>
        <div>
          <label htmlFor="phone_number">Your name:</label>
          <div className='group-input'>
            <input type='text' placeholder='Your phone number' id='phone_number' />
            <input type='text' placeholder='Your phone number' id='phone_number' />
          </div>
        </div>

        <div>
          <label htmlFor="phone_number">Contact:</label>
          <input type='text' placeholder='Your phone number' id='phone_number' />
          <div className='group-input'>
            <input type='text' placeholder='Phone' id='phone_number' />
            <input type='text' placeholder='Fax' id='phone_number' />
          </div>
        </div>


        <div>
          <label htmlFor="phone_number">Email:</label>
          <input type='text' placeholder='Your phone number' id='phone_number' />
        </div>


        <div>
          <label htmlFor="phone_number">Company:</label>
          <div className='group-input'>
            <input type='text' placeholder='Company' id='phone_number' />
            <input type='text' placeholder='Your job' id='phone_number' />
          </div>
        </div>

        <div>
          <label htmlFor="phone_number">Street:</label>
          <input type='text' placeholder='Your phone number' id='phone_number' />
        </div>

        <div>
          <label htmlFor="phone_number">City:</label>
          <div className='group-input'>
            <input type='text' placeholder='Company' id='phone_number' />
            <input type='text' placeholder='ZIP' id='phone_number' />
          </div>
        </div>

        <div>
          <label htmlFor="phone_number">State:</label>
          <input type='text' placeholder='Your phone number' id='phone_number' />
        </div>

        <div>
          <label htmlFor="phone_number">Country:</label>
          <input type='text' placeholder='Your phone number' id='phone_number' />
        </div>

        <div>
          <label htmlFor="phone_number">Website:</label>
          <input type='text' placeholder='www.your-website.com' id='phone_number' />
        </div>
      </form>
    </div>
  )

}

function FacebookForm() {
  return (
    <div>
      <form>
        <div>
          <p className='form-header'>Facebook QR Code</p>
        </div>
        <div>
          <p>
            Promote your Facebook page to get more likes and followers.
          </p>
        </div>
        <div>
          <button className='btn signup-free'>
            <span>Sign up for free</span>
            <ChevronSVG></ChevronSVG>
          </button>

        </div>

      </form>
    </div>)
}

function BarcodeForm() {
  return (
    <div>
      <form>
        <div>
          <p className='form-header'>Barcode QR Code</p>
        </div>
        <div>
          <p>
            Looking to boost customer engagement with feature-rich product packaging and replace regular barcodes at the point of sale? Make your packaging smarter with 2D Barcodes.</p>
        </div>
        <div>
          <button className='btn signup-free'>
            <span>Sign up for free</span>
            <ChevronSVG></ChevronSVG>
          </button>

        </div>

      </form>
    </div>)
}

function ImageForm() {
  return (
    <div>
      <form>
        <div>
          <p className='form-header'>Image Gallery QR Code</p>
        </div>
        <div>
          <p>
            Share a series of images about your products, company or events.
          </p>
        </div>
        <div>
          <button className='btn signup-free'>
            <span>Sign up for free</span>
            <ChevronSVG></ChevronSVG>
          </button>

        </div>

      </form>
    </div>)
}

function AppStoresForm() {
  return (
    <div>
      <form>
        <div>
          <p className='form-header'>App Store QR Code</p>
        </div>
        <div>
          <p>
            Link your app in Apple App Store, Google Play Store, or Amazon Appstore on one page.
          </p>
        </div>
        <div>
          <button className='btn signup-free'>
            <span>Sign up for free</span>
            <ChevronSVG></ChevronSVG>
          </button>

        </div>

      </form>
    </div>)
}

function Mp3Form() {
  return (
    <div>
      <form>
        <div>
          <p className='form-header'>MP3 QR Code</p>
        </div>
        <div>
          <p>
            Share your music, audio books or podcasts inside a customizable mobile player.
          </p>
        </div>
        <div>
          <button className='btn signup-free'>
            <span>Sign up for free</span>
            <ChevronSVG></ChevronSVG>
          </button>

        </div>

      </form>
    </div>)
}

function PdfForm() {
  return (
    <div>
      <form>
        <div>
          <p className='form-header'>PDF QR Code</p>
        </div>
        <div>
          <p>
            Display brochure, magazine, catalog, ebook, or any other PDF files.       </p>
        </div>
        <div>
          <button className='btn signup-free'>
            <span>Sign up for free</span>
            <ChevronSVG></ChevronSVG>
          </button>

        </div>

      </form>
    </div>)
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
    'Email': EmailForm(),
    'SMS': SmsForm(),
    'Wifi': WifiForm(),
    'Bitcoin': BitCoinForm(),
    'Twitter': TwiterForm(),
    'V-Card': VcarCodeForm(),
    // other not ready for now
    'Facebook': FacebookForm(),
    'Barcode': BarcodeForm(),
    'Image': ImageForm(),
    'App Stores': AppStoresForm(),
    'Mp3': Mp3Form(),
    'Pdf': PdfForm()

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
      const div_icon_text = document.getElementsByClassName('icon-text')[index - 1] as HTMLElement;
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
        <div className='UserForms'>
          <div className="svgs">
            <div className='icon-text' onClick={ColorateIcon(1)}>
              <BarCode />
              <span>Barcode</span>
            </div>
            <div className='icon-text' onClick={ColorateIcon(2)}>
              <BitCoin />
              <span>Bitcoin</span>
            </div>
            <div className='icon-text' onClick={ColorateIcon(3)}>
              <Email />
              <span>Email</span>
            </div>
            <div className='icon-text' onClick={ColorateIcon(4)}>
              <Facebook />
              <span>Facebook</span>
            </div>
            <div className='icon-text' onClick={ColorateIcon(5)}>
              <File />
              <span>Text</span>
            </div>
            <div className='icon-text' onClick={ColorateIcon(6)}>
              <Card />
              <span>V-Card</span>
            </div>
            <div className='icon-text' onClick={ColorateIcon(7)}>
              <ImageIcon />
              <span>Image</span>
            </div>
            <div className='icon-text' onClick={ColorateIcon(8)}>
              <AppIcon />
              <span>App Stores</span>
            </div>
            <div className='icon-text' onClick={ColorateIcon(9)}>
              <Mp3 />
              <span>Mp3</span>
            </div>
            <div className='icon-text' onClick={ColorateIcon(10)}>
              <Pdf />
              <span>Pdf</span>
            </div>
            <div className='icon-text' onClick={ColorateIcon(11)}>
              <Sms />
              <span>SMS</span>
            </div>
            <div className='icon-text' onClick={ColorateIcon(12)}>
              <Twitter />
              <span>Twitter</span>
            </div>
            <div className='icon-text' onClick={ColorateIcon(13)}>
              <Www />
              <span>WWW</span>
            </div>
            <div className='icon-text' onClick={ColorateIcon(14)}>
              <Wifi />
              <span>Wifi</span>
            </div>

          </div>
          <div className='FormElement'>
            {
              iconsKeys.includes(icontype) ? icons[icontype] : icons['WWW']
            }
            <div className='btnContainer'>
              <button className='btn gen'>
                <ArrowCycle></ArrowCycle>
                <span>Generate QR code</span>
              </button>
            </div>

          </div>
        </div>
        <div className='new-feature'>
          <span className='btn new'>New</span>
          <p>QR Code creation built into your application</p>
          <p>
            <a href="#" className='link'>Use our API</a>
          </p>
        </div>
        <div className="pro-tips">
          <div>
            <span className='btn'>PRO TIP</span>
            <p className='title'>Scroll down to see  <span> creative QR Codes ideas</span>
            </p>
          </div>
          <div className="imgs-cards">
            <div className="img">
              <a href="">
                <img src={BusinessCard} alt="BusinessCard" />
                <span>Business Cards</span>
              </a>
            </div>
            <div className="img">
              <a href="">
                <img src={Flyer} alt="BusinessCard" />
                <span>Flyer</span>
              </a>
            </div>
            <div className="img">
              <a href="">
                <img src={Brochure} alt="BusinessCard" />
                <span>Brochure</span>
              </a>
            </div>
            <div className="img">
              <div className='check-more'>
              <p>Check out more <span className='blue'>creative</span> <span className='qrcode'>QR Code </span>
              <br />exemples </p>
              <div className='link-wrapper'>
              <a href="#" >View more
              <ChevronSVG></ChevronSVG>             </a>
              </div>
              
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
