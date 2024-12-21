import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { EmptyMessage, Load, LoadCenter } from 'ui/styled';
import CustomTablePagination from 'components/CustomTablePagination';
import { CheckContainer, HeaderUserImage, RowContainer, WhiteBg } from './styled';
import Check from '../Check';

const StyledTableCell = styled(TableCell)(({ theme, noMax, border }) => ({
  [`&.${tableCellClasses.head}`]: {
    color: theme.palette.colors.white,
    backgroundColor: theme.palette.primary.main,
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 700,
    lineHeight: '28px',
    fontFamily: 'Urbanist',
    overflow: 'hidden',
    textOverflow: 'ellipsis',

  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: '28px',
    fontFamily: 'Plus Jakarta Sans',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '270px',
    whiteSpace: 'nowrap',
    // border: border && `1px solid ${theme.palette.colors.shadow}`,

  },
}));

const StyledTableBody = styled(TableBody)(({ theme, border }) => ({
  border: border && `1px solid ${theme.palette.colors.shadow}`,
  borderRadius: 8,
}));

export default function BasicTable({ columns, rows, loading, pagination, selectable, border }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [selected, setSelected] = React.useState([]);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const toggleAll = () => {
    setSelected(selected.length === rows.length ? [] : rows);
  };

  const isSelected = item => selected.map(m => m.id).includes(item.id);

  const toggleSelected = item => {
    setSelected(isSelected(item) ? selected.filter(f => f.id !== item.id) : [...selected, item]);
  };
  return (
    <TableContainer component={Paper} style={{ boxShadow: 'none' }}>
      <Table sx={{ minWidth: 700 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {selectable && (
              <StyledTableCell width={'40px'}>
                <WhiteBg>
                  <CheckContainer>
                    <Check nospace primary checked={selected.length === rows.length} onChange={toggleAll} />
                  </CheckContainer>
                </WhiteBg>
              </StyledTableCell>
            )}
            {
              columns?.map((item, key) =>
                <StyledTableCell key={key} align={key === 0 ? "left" : "center"} >{item.title}</StyledTableCell>
              )
            }
          </TableRow>
        </TableHead>
        <StyledTableBody border={border}>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow
              key={row.name}

            >
              {selectable && (
                <TableCell align="center">
                  <WhiteBg>
                    <CheckContainer>
                      <Check nospace primary checked={isSelected(row)} onChange={() => toggleSelected(row)} />
                    </CheckContainer>
                  </WhiteBg>
                </TableCell>
              )}
              {
                columns?.map((item, key) =>
                  <StyledTableCell key={key} align={key === 0 ? "left" : "center"} border={border}>
                    {item?.['renderCell'] ? item.renderCell({ row }) : row?.[item.ref]}
                  </StyledTableCell>
                )
              }
            </TableRow>
          ))}
        </StyledTableBody>
      </Table>
      {
        !loading ? <>
          {rows?.length ? null : <EmptyMessage>Nenhum registro encontrado</EmptyMessage>}
        </> :
          <LoadCenter>
            <Load />
          </LoadCenter>
      }
      {!pagination ? null :
        <>
          <CustomTablePagination
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
          />
        </>
      }
    </TableContainer>
  );
}