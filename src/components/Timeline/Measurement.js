import { Button, Card, Stack, Typography } from "@mui/material";

const Value = ({text, contained}) => (
    // <Card>
    //     <Stack alignItems="center" sx={{pt:1,pb:1}}>
    //         <Typography variant="h6">
    //             {text}
    //         </Typography>
    //     </Stack>
    // </Card>
    <Button variant={contained ? "contained" : "outlined"}>
        <Stack alignItems="center" sx={{pt:1,pb:1}}>
            <Typography variant="h6">
                {text}
            </Typography>
        </Stack>
    </Button>
);

const Measurement = ({measurement}) => (
    <Stack spacing={1}>
        <Typography>{measurement.name}</Typography>
        {[...Array(measurement.range[1]).keys()].reverse().map(item => (
            <Value text={item} contained={item===measurement.value} />
        ))}
    </Stack>
);

export default Measurement;