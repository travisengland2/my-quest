import * as React from "react";
import Button from "@mui/material/Button";

export default function BackButton() {
    const [isShown, setIsShown] = React.useState(false);
    const [showBackButton, setShowBackButton] = React.useState(false);

    function hideMainScreen() {
        setIsShown(false);
        setShowBackButton(false);
    }
    return (
        <Button variant="text" onClick={hideMainScreen}>
            Text
        </Button>
    );
}
