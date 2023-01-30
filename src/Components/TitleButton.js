import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";
import DoubleArrowSharpIcon from "@mui/icons-material/DoubleArrowSharp";

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
        backgroundColor: purple[700]
    }
}));

export default function TitleButton() {
    const [isShown, setIsShown] = React.useState(false);
    const [showBackButton, setShowBackButton] = React.useState(false);

    function showMainScreen() {
        setIsShown(true);
        setShowBackButton(true);
    }
    return (
        <Stack spacing={2} direction="row">
            <ColorButton
                variant="contained"
                endIcon={<DoubleArrowSharpIcon />}
                onClick={showMainScreen}
            >
                Continue
            </ColorButton>
        </Stack>
    );
}
