import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';


const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#1976d2',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#1976d2',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#0d47a1',
        },
        '&:hover fieldset': {
            borderColor: '#2196f3',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#1976d2',
        },
    },
});

const CssFormControl = styled(FormControl)({
    '& label.Mui-focused': {
        color: '#1976d2',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#1976d2',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#0d47a1',
        },
        '&:hover fieldset': {
            borderColor: '#2196f3',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#1976d2',
        },
    },
});

const QuestPoints = styled(TextField)({
    '& label.Mui-focused': {
        color: '#1976d2',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#1976d2',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#0d47a1',
        },
        '&:hover fieldset': {
            borderColor: '#2196f3',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#1976d2',
        },
    },
});

const ColorButton = styled(Button)({
    backgroundColor: '#2196f3', '&:hover': { backgroundColor: '#1976d2' },
},
);

export default function SubmitForm() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [points, setPoints] = useState('');


    const handleSubmit = e => {
        e.preventDefault();

        const formData = {
            name: name,
            description: description,
            category: category,
            points: points
        };

        fetch('https://63ae0cc8ceaabafcf17221ae.mockapi.io/TaskForm', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                setName('');
                setDescription('');
                setCategory('');
                setPoints('');
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };
    const formFilledOut = name && description && category && points;

    return (
        <form onSubmit={handleSubmit} className="input-form">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Typography variant="h5" gutterBottom sx={{ ml: 1, color: '#1976d2' }}>
                    A New Quest
                </Typography>
                <CssTextField
                    label="Quest Title"
                    id="custom-css-outlined-input"
                    type="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    sx={{ m: 1 }}
                />
                <CssTextField
                    id="outlined-multiline-flexible"
                    label="Quest Description"
                    multiline
                    maxRows={4}
                    type="text"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    sx={{ m: 1, mb: 2 }}
                />
                <CssFormControl sx={{ m: 1, mb: 2 }}>
                    <InputLabel id="demo-simple-select-label">Quest Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                        input={<OutlinedInput label="Quest Category" />}
                    >
                        <MenuItem value="Daily Quest">Daily Quest</MenuItem>
                        <MenuItem value="Main Quest">Main Quest</MenuItem>
                        <MenuItem value="Side Quest">Side Quest</MenuItem>
                        ))
                    </Select>
                </CssFormControl>
                <QuestPoints
                    label="Quest Points"
                    id="outlined-number"
                    min="1"
                    max="100"
                    type="number"
                    value={points}
                    onChange={e => setPoints(e.target.value)}
                    sx={{ m: 1, mb: 2 }}
                />
                <ColorButton
                    sx={{ m: 1, color: 'white', mb: 2 }}
                    onSubmit={handleSubmit}
                    variant="contained"
                    type="submit"
                    endIcon={<LibraryAddIcon />}
                    disabled={!formFilledOut}
                >
                    Create Task
                </ColorButton>

            </Box>
        </form>
    )
};
