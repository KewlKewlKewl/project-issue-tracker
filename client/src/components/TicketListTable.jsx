import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './TicketTable.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './TableHeader.scss';
import ProgressBar from './ProgressBar';
import { Tasks, Teams, Tickets, Comments} from "./testdata";
import axios from 'axios';
import {useState, useEffect} from 'react';

export default function TicketListTable(props) {

  const {ticketsInfo, selectedId} = props;

  const [selectedTicket, setSelectedTicket] = useState("");
  const [selectedProject, setSelectedProject] = useState("")
  
  return (
    <TableContainer style={{ overflow: "hidden" }} >
      <Table className="projecttable" sx={{ height: 0}} aria-label="simple table">
    
        <TableHead>
          <TableRow className="tabletit">
       
            <TableCell className="tabletitle">Title</TableCell>
            <TableCell className="tabletitle">Description</TableCell>
            <TableCell className="tabletitle">Author</TableCell>
            <TableCell className="tabletitle"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Tickets.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell onClick={(event) => selectedId(row.id)} component="th" scope="row">
                {row.title}
              </TableCell>
 
              <TableCell onClick={() => selectedId(row.id)}>{row.description}</TableCell>
              <TableCell onClick={() => selectedId(row.id)}>{row.author}</TableCell>
              <TableCell onClick={() => console.log('Clicked Vert')}><MoreVertIcon /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// e.preventDefault();
// e.stopPropagation();
