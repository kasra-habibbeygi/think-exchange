/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-unreachable */
/* eslint-disable indent */
import React from 'react';

//components
import CustomButton from '../form-group/CustomButton';

//style
import { TableTemplateStyles } from './TableTemplate.styles';

//mui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TableTemplate = ({ TableHeader, children }) => {
    return (
        <>
            <TableTemplateStyles>
                <TableContainer component={Paper}>
                    <Table stickyHeader aria-label='sticky table'>
                        <TableHead>
                            <TableRow>
                                {TableHeader?.map((item, index) => (
                                    <TableCell key={index}>{item}</TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>{children}</TableBody>
                    </Table>
                </TableContainer>
            </TableTemplateStyles>
        </>
    );
};

export default TableTemplate;
