/* References:
https://www.youtube.com/watch?v=T2MhVxJxsL0&ab_channel=BrianDesign 
https://www.w3schools.com/howto/howto_js_topnav.asp */

// style
import '../stylesheets/NavBar.css'
// images & icons
import logo from '../assets/buds-logo.png'
import IconWorldEn from '../assets/IconWorldEn.svg'
import IconWorldCn from '../assets/IconWorldCn.svg'
import IconWorldEnG from '../assets/IconWorldEnGreen.svg'
import IconWorldCnG from '../assets/IconWorldCnGreen.svg'
import IconWorldEnW from '../assets/IconWorldEnWhite.svg'
import IconWorldCnW from '../assets/IconWorldCnWhite.svg'
import { IconMoonFilled, IconSunFilled, IconChevronUp, IconMenu2, IconX} from '@tabler/icons-react'
// components
import ProductDropdown from './ProductDropdown.jsx'
import ResourcesDropdown from './ResourcesDropdown.jsx'
import Search from './Search.jsx'
import MobileLanguage from './MobileLanguage.jsx'
import NightMode from './NightMode.jsx'
import { useState } from 'react'

// navigation bar
function NavBar({ mode, changeMode }) {

    const [language, setLanguage] = useState(false)
    const changeLanguage = () => setLanguage(!language)

    const [hoverLang, setHoverLang] = useState(false)
    const changeHover = () => setHoverLang(!hoverLang)

    const [productDropdown, setProductDropdown] = useState(false)
    const productHover = () => { window.innerWidth >= 1280 && setProductDropdown(true)}
    const productHoverLeave = () => {window.innerWidth >= 1280 && setProductDropdown(false)}
    const productClick = (event) => { event.preventDefault();
                                        window.innerWidth < 1280 && setProductDropdown(!productDropdown)};

    const [resourcesDropdown, setResourcesDropdown]= useState(false)
    const resourcesHover = () => { window.innerWidth >= 1280 && setResourcesDropdown(true)}
    const resourcesHoverLeave = () => {window.innerWidth >= 1280 && setResourcesDropdown(false)}
    const resourcesClick = (event) => { event.preventDefault();
                                        window.innerWidth < 1280 && setResourcesDropdown(!resourcesDropdown)};

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    
    
    return (

        <nav aria-label="Main Navigation">

            {/* Main Navigation Menu */}
            <div className = "leftContainer">
                
                {/* Mobile Navigation Menu */}
                <div 
                    className="mobileHeader" 
                    onClick={handleClick}
                >
                    {click ? <IconX className="icon" aria-label="Close menu"/> 
                        : <IconMenu2 className="icon" aria-label="Open menu"/>}
                    
                    <a href="/" aria-label="Home">
                        <img src={ logo } alt="Buds logo" className="logo"/>
                    </a>

                    <Search />
                </div>
                
                {/* Desktop Logo */}
                <a href="/" aria-label="Home">
                    <img src={ logo } alt="Buds logo" className="logo"/>
                </a>

                {/* Navigation Links */}
                <div className = {click ? "navLinkContainer active" : "navLinkContainer"}>
                    <ul>

                        {/* Navigation Item: Product */}
                        <li 
                            onMouseEnter={productHover} 
                            onMouseLeave={productHoverLeave} 
                            onClick={productClick}
                        >
                            <a 
                                href="" 
                                aria-expanded={productDropdown} 
                                aria-controls="productDropdownMenu"
                            >
                                Product
                                <IconChevronUp 
                                    size={20} 
                                    strokeWidth={2.5} 
                                    className={productDropdown ? "chevronOpen" : "chevronClosed"} 
                                />
                            </a>
                            {productDropdown && <ProductDropdown />}
                        </li>

                        {/* Navigation Item: Resources */}
                        <li 
                            onMouseEnter={resourcesHover} 
                            onMouseLeave={resourcesHoverLeave} 
                            onClick={resourcesClick}
                        >
                            <a 
                                href="" 
                                aria-expanded={resourcesDropdown} 
                                aria-controls="resourcesDropdownMenu"
                            >
                                Resources
                                <IconChevronUp 
                                    size={20} 
                                    strokeWidth={2.5} 
                                    className={resourcesDropdown ? "chevronOpen" : "chevronClosed"}
                                />
                            </a>
                            {resourcesDropdown && <ResourcesDropdown />}
                        </li>

                        {/* Navigation Item: Demo */}
                        <li><a href="">Demo</a></li>

                        {/* Navigation Item: Pricing */}
                        <li><a href="">Pricing</a></li>
                    </ul>

                    {/* Additional options adjusted for mobile */}
                    <div className="mobileOptions" >
                        <div className="toggleOptions" >
                            <MobileLanguage />
                            <NightMode mode={mode} changeMode={changeMode}/>
                        </div>
                        <button>Download Now</button>
                    </div>
                </div>

            </div>

            {/* Additional options for website */}
            <div className = "rightContainer">
                <div id = "searchPaddingOffset">

                    <Search />
                   
                    <div onClick={changeMode}> 
                        { mode ? <IconSunFilled className="icon" aria-label="Switch to light mode"/> 
                            : <IconMoonFilled className="icon" aria-label="Switch to dark mode"/>  }
                    </div>
                </div>
                <div 
                    onMouseEnter={changeHover} 
                    onMouseLeave={changeHover} 
                    onClick={changeLanguage}
                > 
                    {/* convoluted due to custom svg in assets; unoptimized */}
                    <img 
                        src= { mode ? (
                                language ? ( 
                                    hoverLang ? IconWorldCnG : IconWorldCnW
                                ) : (
                                    hoverLang ? IconWorldEnG : IconWorldEnW
                                )
                            ) : (
                                language ? ( 
                                    hoverLang ? IconWorldCnG : IconWorldCn
                                ) : (
                                    hoverLang ? IconWorldEnG : IconWorldEn
                                )

                            )  
                        } 
                        aria-label={language ? "Switch to Chinese" : "Switch to English"}
                        alt={language ? "Chinese Language Icon" : "English Language Icon"}
                    />
                </div>

                {/* CTA */}
                <button>Get Buds free</button>

            </div>
        </nav>
    )
}

export default NavBar