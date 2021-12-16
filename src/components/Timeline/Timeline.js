import { AccessTime, Add, Edit, PlusOne, PunchClock } from "@mui/icons-material";
import { Box, Button, Divider, IconButton, Stack, Typography } from "@mui/material";
import Measurement from "./Measurement";

const measurements = [
    {name: "Mood", type: "numerical", range: [1,6], value: 4},
    {name: "Anxiety", type: "numerical", range: [1,3], value: 0},
]

const Timeline = () => (
    <Stack>
        <Box padding={2}>
            graph
        </Box>

        <Divider />

        <Stack padding={2} spacing={2}>
            <Stack direction="row" alignItems="center">
                <Typography variant="h6">{(new Date()).toUTCString()}</Typography>
                <IconButton variant=""><AccessTime /></IconButton>
                <IconButton variant=""><Edit /></IconButton>
                <IconButton variant=""><Add /></IconButton>
            </Stack>

            <Stack direction="row" spacing={2}>
                {measurements.map(measurement => (
                    <Measurement measurement={measurement} />
                ))}
            </Stack>

            <Button variant="contained">Add new measurement</Button>
        </Stack>
        <Box padding={2}>
            <Typography variant="h6">Date and time</Typography>

            <Stack direction="row" spacing={2}>
                {measurements.map(measurement => (
                    <Measurement measurement={measurement} />
                ))}
            </Stack>

            <Button variant="contained">Add new measurement</Button>
        </Box>

    </Stack>
);

export default Timeline;