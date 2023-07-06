import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import NotificationIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import ProfileImage from '../../../assets/images/profile.jpeg';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import SearchIcon from '@mui/icons-material/Search';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

export default function TopBar({ open }) {
    return (
        <Box
            position="absolute"
            sx={{
                width: "100%",
                height: "100%"
            }}
            open={open}
        >
            <Toolbar sx={{ pr: "24px" }}>
                <Stack
                    direction='now'
                    spacing={1}
                    sx={{
                        flexGrow: 1,
                        marginLeft: 40
                    }}>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{
                            fontWeight: "600",
                            marginTop: 0.5
                        }}>
                        Wasp
                    </Typography>
                    <IconButton color="inherit">
                        <ThumbUpIcon />
                    </IconButton>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                </Stack>
                <Stack
                    direction="row"
                    spacing={2}>
                    <IconButton color="inherit">
                        <FlagIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <SettingsIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationIcon />
                        </Badge>
                    </IconButton>
                    <Avatar alt="profile" src={ProfileImage} />
                </Stack>
            </Toolbar>
        </Box>
    )
}


