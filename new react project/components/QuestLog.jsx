import React, {useState, useEffect} from 'react'
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
  GridActionsCellItem,
} from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


function customCheckbox(theme) {
  return {
    '& .MuiCheckbox-root svg': {
      width: 16,
      height: 16,
      backgroundColor: 'transparent',
      border: `1px solid ${
        theme.palette.mode === 'light' ? '#d9d9d9' : 'rgb(67, 67, 67)'
      }`,
      borderRadius: 2,
    },
    '& .MuiCheckbox-root svg path': {
      display: 'none',
    },
    '& .MuiCheckbox-root.Mui-checked:not(.MuiCheckbox-indeterminate) svg': {
      backgroundColor: '#1890ff',
      borderColor: '#1890ff',
    },
    '& .MuiCheckbox-root.Mui-checked .MuiIconButton-label:after': {
      position: 'absolute',
      display: 'table',
      border: '2px solid #fff',
      borderTop: 0,
      borderLeft: 0,
      transform: 'rotate(45deg) translate(-50%,-50%)',
      opacity: 1,
      transition: 'all .2s cubic-bezier(.12,.4,.29,1.46) .1s',
      content: '""',
      top: '50%',
      left: '39%',
      width: 5.71428571,
      height: 9.14285714,
    },
    '& .MuiCheckbox-root.MuiCheckbox-indeterminate .MuiIconButton-label:after': {
      width: 8,
      height: 8,
      backgroundColor: '#1890ff',
      transform: 'none',
      top: '39%',
      border: 0,
    },
  };
}

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 0,
  color:
    theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.85)',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  WebkitFontSmoothing: 'auto',
  letterSpacing: 'normal',
  '& .MuiDataGrid-columnsContainer': {
    backgroundColor: theme.palette.mode === 'light' ? '#fafafa' : '#1d1d1d',
  },
  '& .MuiDataGrid-iconSeparator': {
    display: 'none',
  },
  '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
    borderRight: `1px solid ${
      theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
    }`,
  },
  '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
    borderBottom: `1px solid ${
      theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
    }`,
  },
  '& .MuiDataGrid-cell': {
    color:
      theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.65)',
  },
  '& .MuiPaginationItem-root': {
    borderRadius: 0,
  },
  ...customCheckbox(theme),
}));

function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  
  return (
    <Pagination
      color="primary"
      variant="outlined"
      shape="rounded"
      page={page + 1}
      count={pageCount}
      // @ts-expect-error
      renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
}


const columns = [
  {
    field: 'actions',
    type: 'actions',
    width: 120,
    getActions: (params) => [
      <GridActionsCellItem
        icon={<DoneIcon />}
        label="Finish" 
      />,
      <GridActionsCellItem
        icon={<EditIcon />}
        label="Edit" 
      />,
      <GridActionsCellItem
        icon={<DeleteIcon />}
        label="Delete" 
      />,
    ]
  },
  {
    field: 'points',
    headerName: 'Points',
    type: 'number',
    width: 100,
    headerAlign: 'center',
    align: 'center'
    
  },
  {
    field: 'name', 
    headerName: 'Name',
    type: 'string',
    width: 150
  },
  {
    field: 'date',
    headerName: 'Date Created',
    type: 'date',
    width: 100
  },
  {
    field: 'description',
    headerName: 'Description',
    type: 'string',
    width: 200
  },
  {
    field: 'category',
    headerName: 'Category',
    type: 'string'
  },


]

export default function QuestLog() {
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch("https://63ae0cc8ceaabafcf17221ae.mockapi.io/TaskForm")
      .then((data) => data.json())
      .then((data) => setTableData(data))
  })

  return (
    <div style={{ height: 400, width: '100%' }}>
    <StyledDataGrid
      rows={tableData}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      components={{
        Pagination: CustomPagination,
      }}
    />
  </div>
);
}

