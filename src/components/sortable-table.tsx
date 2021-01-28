import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";
import { Divider, TextField } from "@material-ui/core";

const useStyles = makeStyles({
  // rootのcssは列数が増えて画面の横幅が窮屈になった時にもヘッダー行のテキストを横書きでキープして横スクロールするために追加していますが、幅が狭い時に縦書きにしたい場合には不要です
  root: {
    overflowX: "auto",
    whiteSpace: "nowrap"
  },
  table: {
    tableLayout: "fixed" //これがないとソートする列を選んだ瞬間にその列の幅が広がってレイアウトが崩れる
  }
});

//ソートの可否
//コンポーネントの分割

export default function SortableTable(className: string) {
  const [inochi1, setInochi1] = React.useState('');
  const [inochi2, setInochi2] = React.useState('');
  const data = generateInochiData(+(inochi1), +(inochi2));
  const changeInochi = (type: number, value: React.SetStateAction<string>) => {
    if (type == 1){
      setInochi1(value);
      inputChange(+value, +inochi2);
    } else {
      setInochi2(value);
      inputChange(+inochi1, +value);
    }
  }

  const classes = useStyles();
  const columns = Object.keys(data[0]);

  const [state, setState] = useState({
    rows: data,
    order: "desc",   // 降順ソート中("desc") or 昇順ソート中("asc")
    key: columns[0]  // ソート中の列名
  });

  function handleClickSortColumn(column: any) {
    // 選択中の列をもう一回クリックしたときは降順/昇順を切り替える。選択中ではない列をクリックしたときはまず降順でソートする。
    const isDesc = column === state.key && state.order === "desc";
    const nextOrder = isDesc ? "asc" : "desc";
    const sortRule = { asc: [1, -1], desc: [-1, 1] };
    const sortedRows = state.rows.slice().sort((a, b) => {
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

  function inputChange(inochi1: number, inochi2: number) {
    var test = [{}];
    var result = '';
    
    var losingInochi, shipedInochi1, shipedInochi2, detail;
    for (let i = 0.15; i < 0.31; i += 0.01) {
      losingInochi = Math.ceil(inochi2*i);

      shipedInochi1 = inochi1 + losingInochi;
      shipedInochi2 = inochi2 - losingInochi;
    
      detail = '';
      if (Math.floor(shipedInochi1*0.7) < shipedInochi2) detail = '返し確定劣勢';
      if (Math.floor(shipedInochi1*0.4) > shipedInochi2) detail = '返し確定優勢';

      test.push({
        '%': Math.floor(i*100),
        自陣イノチ: shipedInochi1.toLocaleString(),
        敵陣イノチ: shipedInochi2.toLocaleString(),
        備考: detail,
      });
    
      if (shipedInochi1 < shipedInochi2){
        result = `<span class='fontBold'>${(30 - Math.floor(i*100))/16*100}%(${30 - Math.floor(i*100)}/16)</span>で勝利！`;
      }
    }  
    setState(state => ({ ...state, rows: test }));
  }

  function generateInochiData(inochi1: number, inochi2: number) {
    var data = [];
    var result = '';
    
    var losingInochi, shipedInochi1, shipedInochi2, detail;
    for (let i = 0.15; i < 0.31; i += 0.01) {
      losingInochi = Math.ceil(inochi2*i);

      shipedInochi1 = inochi1 + losingInochi;
      shipedInochi2 = inochi2 - losingInochi;
    
      detail = '';
      if (Math.floor(shipedInochi1*0.7) < shipedInochi2) detail = '返し確定<wbr>劣勢';
      if (Math.floor(shipedInochi1*0.4) > shipedInochi2) detail = '返し確定<wbr>優勢';

      data.push({
        '%': Math.floor(i*100),
        自陣イノチ: shipedInochi1,
        敵陣イノチ: shipedInochi2,
        備考: detail,
      });
    
      if (shipedInochi1 < shipedInochi2){
        result = `<span class='fontBold'>${(30 - Math.floor(i*100))/16*100}%(${30 - Math.floor(i*100)}/16)</span>で勝利！`;
      }
    }  
    return data;
  }

  return (
    <div className={className}>
      <Paper className={classes.root}>
        <TextField
          id="inochi-first"
          label="自陣イノチ"
          type="number"
          onChange={(event) => changeInochi(1, event.target.value)}
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
          onChange={(event) => changeInochi(2, event.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            min: 0,
            step: 10000,
          }}
          required
        />
        <Divider />
        <Table size="medium" className={classes.table}>
          <TableHead>
            <TableRow>
              {columns.map((column, colIndex) => (
                <TableCell
                  align={isNaN(state.rows[0][column]) || colIndex == 0 ? "left" : "right"}
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
            {[...state.rows].map((row: { [x: string]: React.ReactNode; }, rowIndex: any) => (
              <TableRow hover key={`table-row-row-${rowIndex}`}>
                {Object.keys(row).map((key, colIndex) => (
                  <TableCell
                    align={isNaN(row[key]) || colIndex == 0  ? "left" : "right"}
                    key={`table-row-${rowIndex}-col-${colIndex}`}
                  >
                    {row[key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

SortableTable.propTypes = {
  //data: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string,
};