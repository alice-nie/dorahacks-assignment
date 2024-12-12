import '../stylesheets/ProductDropdown.css'
import { IconListCheck, IconBellFilled, IconGiftFilled} from '@tabler/icons-react'

// dropdown for Product
function ProductDropdown() {
    
    return (
        <div 
            id="productDropdownMenu" 
            role="menu"
            aria-label="Product dropdown"
            tabIndex={-1}
        >

            {/* Create Tasks */}
            <div 
                className="itemContainer createTasks"
                role="menuitem"
                tabIndex={0}
            >
                <IconListCheck size={40} className="blue" aria-hidden="true"/>
                <div className="itemContentContainer">
                    <p className="itemTitle bold">
                        Create Tasks
                    </p>
                    <p className="itemBody light">
                        make to-do lists and joint tasks with friends
                    </p>
                </div>
            </div>

            {/* Send Reminders */}
            <div 
                className="itemContainer sendReminders"
                role="menuitem"
                tabIndex={0}
            >
                <IconBellFilled size={40} className="purple" aria-hidden="true"/>
                <div className="itemContentContainer">
                    <p className="itemTitle bold">
                        Send Reminders
                    </p>
                    <p className="itemBody light">
                        keep each other accountable through pings
                    </p>
                </div>
            </div>

            {/* Get Rewards */}
            <div 
                className="itemContainer getRewards"
                role="menuitem"
                tabIndex={0}
            >
                <IconGiftFilled size={40} className="pink" aria-hidden={0}/>
                <div className="itemContentContainer">
                    <p className="itemTitle bold">
                        Get Rewards
                    </p>
                    <p className="itemBody light">
                        Set real-life rewards or get in-game currency
                    </p>
                </div>
            </div>
        </div>

        
    )
}

export default ProductDropdown