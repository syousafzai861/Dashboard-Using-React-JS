import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./Table.css"
// import { color } from '@mui/system';

function createData(name, trackingId, date, status) {
    return { name, trackingId, date, status };
}

const rows = [
    createData('Frozen yoghurt', 1599877, "2 March 2022", "Approved"),
    createData(' Chicken Tikka', 1599877, "8 March 2022", "Approved"),
    createData('platter ', 1599877, "4 March 2022", "Approved"),
    createData('Biryani', 1599877, "5 March 2022", "Pending"),
    createData('koyla karahi', 1599877, "7 March 2022", "Pending"),
    createData(' karahi', 1599877, "7 March 2022", "Delivered"),
];

const makeStyles = (status) => {
    if (status === "Approved") {
        return {
            background: "rgb(145 254 159 /49%)",
            color: "green"
        }
    }
    else if (status === "Pending") {
        return {
            background: "#ffadad8f",
            color: "red"
        }
    }
    else {
        return {
            background: "#59bfff",
            color: "white"
        }
    }
}

export default function BasicTable() {
    return (
        <div className="Table">
            <h3>Recent Orders</h3>
            <TableContainer component={Paper}
                style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
            >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>PRODUCT</TableCell>
                            <TableCell align="left">NAME</TableCell>
                            <TableCell align="left">TRACKING ID</TableCell>
                            <TableCell align="left">DATE</TableCell>
                            <TableCell align="left">STATUS</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="left">{row.name}</TableCell>
                                <TableCell align="left">{row.trackingId}</TableCell>
                                <TableCell align="left">{row.date}</TableCell>
                                <TableCell align="left">
                                    <span className='status' style={makeStyles(row.status)}>{row.status}</span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}