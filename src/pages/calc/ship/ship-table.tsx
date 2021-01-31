import React, { useEffect, useState } from "react";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import { Button, Divider, Snackbar, TextField } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        '& .MuiFormLabel-root': {
          fontSize: '1.8rem',
        },
        '& .MuiInput-root': {
          width: '12rem',
          fontSize: '1.8rem',
        },          
      },
      '& .MuiAlert-root': {
        fontSize: '1.4rem',
      },
      '& .MuiTableCell-root': {
        fontSize: '1.6rem',
      },
    },
    paper: {
    //  minWidth: 650,
    },
    inputTabel: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    button: {
      margin: theme.spacing(1),
      padding: '0px 1.2rem',
      height: '4rem',
      width: '9rem',
      [theme.breakpoints.up('sm')]: {
        transform: "translate(0, 1rem)",
      },
    },
    test: {
      overflowX: "auto",
      [theme.breakpoints.down('xs')]: {
        width: `calc(100vw - 4vw)`,
      },
    },
    table: {
      whiteSpace: "nowrap"
    },
  }),
);

//各種列に特性付け（
//-Tableのalignの設定
//-Sortable
//
//特定セルの文字色
//
//state更新時に以前のソートでソート

interface SortableTableProps {
  inochi1: number,
  inochi2: number,
}

interface stateProps {
  rows: {}[],
  order: "desc" | "asc",
  key: string,
}

const SortableTable = (props: SortableTableProps) => {
  const data = generateInochiData(props.inochi1, props.inochi2);
  const classes = useStyles();
  const columns = Object.keys(data[0]);

  const [state, setState] = useState<stateProps>({
    rows: data,
    order: "desc",   // 降順ソート中("desc") or 昇順ソート中("asc")
    key: columns[0]  // ソート中の列名
  });

  useEffect(() => {
    setState(state => ({ ...state, rows: generateInochiData(props.inochi1, props.inochi2) }));
  }, [props.inochi1, props.inochi2]);

  function generateInochiData(inochi1: number, inochi2: number) {
    var data = [];
    var result = '';
    
    var losingInochi: number,
        shipedInochi1: number,
        shipedInochi2: number,
        detail: string;
    for (let i = 0.15; i < 0.31; i += 0.01) {
      losingInochi = Math.ceil(inochi2*i);

      shipedInochi1 = inochi1 + losingInochi;
      shipedInochi2 = inochi2 - losingInochi;
    
      detail = ' ';
      if (Math.floor(shipedInochi1*0.7) < shipedInochi2) detail = '返し確定劣勢';
      if (Math.floor(shipedInochi1*0.4) > shipedInochi2) detail = '返し確定優勢';

      data.push({
        '%': Math.floor(i*100),
        自陣イノチ: shipedInochi1.toLocaleString(),
        敵陣イノチ: shipedInochi2.toLocaleString(),
        備考: detail,
      });
    
      if (shipedInochi1 < shipedInochi2){
        result = `<span class='fontBold'>${(30 - Math.floor(i*100))/16*100}%(${30 - Math.floor(i*100)}/16)</span>で勝利！`;
      }
    }  
    return data;
  }

  function handleClickSortColumn(column: string) {
    // 選択中の列をもう一回クリックしたときは降順/昇順を切り替える。選択中ではない列をクリックしたときはまず降順でソートする。
    const isDesc = column === state.key && state.order === "desc";
    const nextOrder = isDesc ? "asc" : "desc";
    const sortRule = { asc: [1, -1], desc: [-1, 1] };
    const sortedRows = state.rows.slice().sort((a: any, b: any) => {
      if (a[column] > b[column]) {
        return sortRule[nextOrder][0];
      } else if (a[column] < b[column]) {
        return sortRule[nextOrder][1];
      } else {
        return 0;
      }
    });

    setState({
      rows: sortedRows,
      order: nextOrder,
      key: column
    });
  }

  return (
    <Table size="medium" className={classes.table}>
      <TableHead>
        <TableRow>
          {columns.map((column, colIndex) => (
            <TableCell
              align={"right"}
              key={`table-header-col-${colIndex}`}
              sortDirection={state.key === column ? state.order : false}
            >
              <TableSortLabel
                active={state.key === column}
                direction={state.order}
                onClick={() => handleClickSortColumn(column)}
              >
                {column}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {state.rows.map((row: { [x: string]: React.ReactNode; }, rowIndex) => (
          <TableRow hover key={`table-row-row-${rowIndex}`}>
            {Object.keys(row).map((key, colIndex) => (
              <TableCell
                align={"right"}
                key={`table-row-${rowIndex}-col-${colIndex}`}
              >
                {row[key]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ShipTable = ()  => {
  const classes = useStyles();
  const [inochi1, setInochi1] = useState('0');
  const [inochi2, setInochi2] = useState('0');
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    setInochi1('0');
    setInochi2('0');
  };

  const handleClose = (reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div className={classes.inputTabel}>
          <TextField
            id="inochi-first"
            label="自陣イノチ"
            type="number"
            value={inochi1}
            onChange={(event) => setInochi1(event.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              min: 0,
              step: 10000,
            }}
          />
          <TextField
            id="inochi-second"
            label="敵陣イノチ"
            type="number"
            value={inochi2}
            onChange={(event) => setInochi2(event.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              min: 0,
              step: 10000,
            }}
            required
          />
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<DeleteIcon />}
            onClick={() => handleClick()}
          >
            Delete
          </Button>
          <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={() => handleClose()}
          >
            <Alert onClose={() => handleClose()} severity="success">
              Deleted Successfully
            </Alert>
          </Snackbar>
        </div>
        <Divider />
        <div className={classes.test}>
          <SortableTable
            inochi1={+inochi1}
            inochi2={+inochi2}
          />
        </div>
      </Paper>
    </div>
  );
}

export default ShipTable;