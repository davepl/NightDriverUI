import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    name: string,
    size: number,
    used: number,
    free: number,
    min:  number,
  ) 
  {
    return { name, size, used, free, min };
  }

export default function MemoryTable(data) 
{
    var rows = [
        createData("Heap",   data.rows["HEAP_SIZE"],  data.rows["HEAP_SIZE"]  - data.rows["HEAP_FREE"],  data.rows["HEAP_FREE"],  data.rows["HEAP_MIN"]),
        createData("DMARam", data.rows["DMA_SIZE"],   data.rows["DMA_SIZE"]   - data.rows["DMA_FREE"],   data.rows["DMA_FREE"],   data.rows["DMA_MIN"]),
        createData("PSRam",  data.rows["PSRAM_SIZE"], data.rows["PSRAM_SIZE"] - data.rows["PSRAM_FREE"], data.rows["PSRAM_FREE"], data.rows["PSRAM_MIN"]),
    ];

    return (
      <TableContainer component={Paper} sx={{maxWidth: 650 }}>
        <Table sx={{ minWidth: 650}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Memory Type</TableCell>
              <TableCell align="right">Total Size&nbsp;(K)</TableCell>
              <TableCell align="right">Bytes Used&nbsp;(K)</TableCell>
              <TableCell align="right">Bytes Free&nbsp;(K)</TableCell>
              <TableCell align="right">Min Block&nbsp;(K)</TableCell>
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
                <TableCell align="right">{Math.floor(row.size / 1024)}</TableCell>
                <TableCell align="right">{Math.floor(row.used / 1024)}</TableCell>
                <TableCell align="right">{Math.floor(row.free / 1024)}</TableCell>
                <TableCell align="right">{Math.floor(row.min  / 1024)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}
