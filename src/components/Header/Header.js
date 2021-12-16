import { TrendingUp } from "@mui/icons-material";
import { AppBar, Stack, Typography } from "@mui/material";

const Header = () => (
    <AppBar position="static">
        <Stack direction="row" alignItems="center" justifyContent="center" p={1} spacing={1}>
            <Typography variant="h6">
                Follow My Mood
            </Typography>

            <TrendingUp />
        </Stack>
    </AppBar>
);

export default Header;