import { IconSunFilled } from '@tabler/icons-react'
import '../stylesheets/NightMode.css'
import '../stylesheets/MobileLanguage.css' //for mobileOptContainer

// night mode toggle in sidebar menu for mobile view
function NightMode( { mode, changeMode } ) {

    return (

        <div className="mobileOptContainer">
            <div className="mobileOptTitle">
                <IconSunFilled className = "iconSun" aria-hidden="true"/>
                <p id="nightModeLabel">Night Mode</p>
            </div>
            <div className="modeToggle">
                <label htmlFor="nightModeToggle" className="srOnly">
                    Toggle Night Mode
                </label>
                <label className="switch">
                <input 
                    type="checkbox" 
                    id="nightModeToggle"
                    checked={mode} 
                    onChange={changeMode}
                    role="switch"
                    aria-checked={mode}
                    aria-labelledby="nightModeLabel"
                ></input>
                <span className="slider round"></span>
                </label>
           </div>
        </div>    
    )
}

export default NightMode