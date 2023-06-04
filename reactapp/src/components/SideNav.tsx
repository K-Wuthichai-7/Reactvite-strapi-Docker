import { Avatar, Box, Typography, } from "@mui/material"
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar"
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined'
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined'
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined'
import { Link } from "react-router-dom"
import { DASHBOARD_PATH, PRODUCT_PATH, REPORT_PATH, SETTING_PATH } from "../config/constants"
import { useState } from "react"

const SideNav = () => {

    // useProSidebar
    const { collapsed, toggleSidebar } = useProSidebar()

    // Local state for active menuitem

    const [activeMenuitem, setactiveMenuitem] = useState('Dashboard')

    //method for handle click on menu item

    const handleMenuClick = (menu: string) => {
        setactiveMenuitem(menu)
        toggleSidebar()
    }



    return (
        <Sidebar
            style={{ height: "100%", top: 'auto' }}
            breakPoint="md"
            backgroundColor={'white'}
        >
            <Box sx={styles.avatarContainer}>
                <Avatar sx={styles.avatar} alt="Masoud" src="/assets/get.jpg" />
                {!collapsed ? <Typography variant="body2" sx={styles.yourChannel}>Wutthichai </Typography> : null}
                {!collapsed ? <Typography variant="body2">Administrator</Typography> : null}
            </Box>

            <Menu
                menuItemStyles={{
                    button: ({ active }) => {
                        return {
                            backgroundColor: active ? '#eeeeee' : 'transparent'
                        }
                    }
                }}>
                <MenuItem
                    active={activeMenuitem === DASHBOARD_PATH}
                    component={<Link to={DASHBOARD_PATH} />}
                    icon={<DashboardOutlinedIcon />}
                    onClick={() => handleMenuClick(DASHBOARD_PATH)}>
                    <Typography variant="body2">Dashboard</Typography>
                </MenuItem>
                <MenuItem
                    active={activeMenuitem === PRODUCT_PATH}
                    component={<Link to={PRODUCT_PATH} />}
                    icon={<SourceOutlinedIcon />}
                    onClick={() => handleMenuClick(PRODUCT_PATH)}>
                    <Typography variant="body2">Product </Typography>
                </MenuItem>
                <MenuItem
                    active={activeMenuitem === REPORT_PATH}
                    component={<Link to={REPORT_PATH} />}
                    icon={<AnalyticsOutlinedIcon />}
                    onClick={() => handleMenuClick(REPORT_PATH)}>
                    <Typography variant="body2">Report </Typography>
                </MenuItem>
                <MenuItem
                    active={activeMenuitem === SETTING_PATH}
                    component={<Link to={SETTING_PATH} />}
                    icon={<StyleOutlinedIcon />}
                    onClick={() => handleMenuClick(SETTING_PATH)}>
                    <Typography variant="body2">Setting </Typography>
                </MenuItem >
            </Menu >
        </Sidebar >
    )
}

const styles = {
    avatarContainer: {
        display: "flex",
        alignItems: "center",
        flexDirection: 'column',
        my: 5
    },
    avatar: {
        width: '40%',
        height: 'auto'


    },
    yourChannel: {
        mt: 1
    }
}

export default SideNav