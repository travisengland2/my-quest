import React from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { Typography } from "@mui/material";


export default function Create() {

    return (
        <Container>
            <Typography
                variant="h6"
                color="textSecondary"
                component="h2"
                gutterBottom
            >
                Create a New Quest
            </Typography>

            <Button
                onClick={() => console.log("you clicked me")}
                type="submit"
                color="secondary"
                variant="contained"
                endIcon={<KeyboardArrowRightIcon />}
            >
                submit
            </Button>
        </Container>
    );
}
