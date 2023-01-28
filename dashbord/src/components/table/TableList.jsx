import './table.scss'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
const TableList = () => {
  const rows = [
    {
      id: 777,
      product: 'playstation5',
      img:
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600',
      customer: 'Hossam',
      date: '1 march',
      amount: 456,
      method: 'cash on delivery',
      status: 'Approved',
    },
    {
      id: 777,
      product: 'playstation5',
      img:
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600',
      customer: 'Hossam',
      date: '1 march',
      amount: 456,
      method: 'cash on delivery',
      status: 'pending',
    },
    {
      id: 777,
      product: 'playstation5',
      img:
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600',
      customer: 'Hossam',
      date: '1 march',
      amount: 456,
      method: 'cash on delivery',
      status: 'Approved',
    },
    {
      id: 777,
      product: 'playstation5',
      img:
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600',
      customer: 'Hossam',
      date: '1 march',
      amount: 456,
      method: 'cash on delivery',
      status: 'pending',
    },
    {
      id: 777,
      product: 'playstation5',
      img:
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600',
      customer: 'Hossam',
      date: '1 march',
      amount: 456,
      method: 'cash on delivery',
      status: 'Approved',
    },
    {
      id: 777,
      product: 'playstation5',
      img:
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600',
      customer: 'Hossam',
      date: '1 march',
      amount: 456,
      method: 'cash on delivery',
      status: 'pending',
    },
    {
      id: 777,
      product: 'playstation5',
      img:
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600',
      customer: 'Hossam',
      date: '1 march',
      amount: 456,
      method: 'cash on delivery',
      status: 'Approved',
    },
  ]
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="TableCell">tracking id</TableCell>
            <TableCell className="TableCell">product</TableCell>
            <TableCell className="TableCell">customer</TableCell>
            <TableCell className="TableCell">date</TableCell>
            <TableCell className="TableCell">Amount</TableCell>

            <TableCell className="TableCell">payment Method</TableCell>
            <TableCell className="TableCell">status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="TableCell">{row.id}</TableCell>
              <TableCell className="TableCell">
                <div className="cellWrapper d-flex align-items-center">
                  <img
                    src={row.img}
                    alt=""
                    height={32}
                    width={32}
                    className="image me-3 rounded-circle"
                  />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="TableCell">{row.customer}</TableCell>
              <TableCell className="TableCell">{row.date}</TableCell>
              <TableCell className="TableCell">{row.amount}</TableCell>
              <TableCell className="TableCell">{row.method}</TableCell>
              <TableCell className="TableCell">
                <span className={`status p-3 rounded-pill Approved  ${row.status}`}>{row.status}</span>
                <span className={`status p-3 rounded-pill Approved  ${row.status}`}></span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableList;
