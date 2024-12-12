import { IconWorld } from '@tabler/icons-react'
import '../stylesheets/MobileLanguage.css'

// language select option in sidebar menu for mobile view
function MobileLanguage() {
    
    return (
        <div className="mobileOptContainer"  >
            <div className="mobileOptTitle">
                <IconWorld className = "iconWorld" aria-hidden="true"/>
                <p id="languageLabel">Language</p>
            </div>
            <div className="langToggle">
            <label htmlFor="languageSelect" className="srOnly">
                Select Language
            </label>
                <select id="languageSelect" aria-labelledby="languageLabel">
                    <option value="en">En</option>
                    <option value="zh">中文</option>
                </select>
           </div>
        </div>    
    )
}

export default MobileLanguage