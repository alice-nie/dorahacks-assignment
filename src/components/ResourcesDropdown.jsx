import '../stylesheets/ResourcesDropdown.css'

function ResourcesDropdown() {
    
    return (
        <div 
            id="resourcesDropdownMenu" 
            role="menu"
            aria-label="Resources dropdown"
            tab-index={-1}
        >
            {/* Tools section */}
            <div className="resourceBlock">
                <p class="resourceTitle semibold">TOOLS</p>
                
                <ul>
                    <li role="menuitem">
                        <a href="" tabIndex={0}>Pomodoro timer</a>
                    </li>
                    <li role="menuitem">
                        <a href="" tabIndex={0}>Study rooms</a>
                    </li>
                    <li role="menuitem">
                        <a href="" tabIndex={0}>Flash cards</a>
                    </li>
                    <li role="menuitem">
                        <a href="" tabIndex={0}>Calculator</a>
                    </li>
                    <li role="menuitem">
                        <a href="" tabIndex={0}>Habit tracker</a>
                    </li>
                </ul>
            </div>

            {/* Printables section */}
            <div className="resourceBlock">
                <p class="resourceTitle semibold">PRINTABLES</p>
                
                <ul>
                    <li role="menuitem">
                        <a href="" tabIndex={0}>Bullet Journal Template</a>
                    </li>
                    <li role="menuitem">
                        <a href="" tabIndex={0}>Eisenhower Matrix</a>
                    </li>
                    <li role="menuitem">
                        <a href="" tabIndex={0}>Ivy Lee Method</a>
                    </li>
                </ul>
            </div>

            {/* More on Buds section */}
            <div className="resourceBlock">
                <p class="resourceTitle semibold">MORE ON BUDS</p>
                
                <ul>
                    <li role="menuitem">
                        <a href="" tabIndex={0}>FAQs</a>
                    </li>
                    <li role="menuitem">
                        <a href="" tabIndex={0}>Blog</a>
                    </li>
                    <li role="menuitem">
                        <a href="" tabIndex={0}>Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ResourcesDropdown