import React, { useEffect, useState } from "react";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Hidden, IconButton, Switch, TextField, Typography } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import DeleteIcon from '@material-ui/icons/Delete';
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        '& .MuiFormLabel-root': {
          fontSize: '1.8rem',
        },
        '& .MuiInput-root': {
          fontSize: '1.6rem',
        },
      },
    },
    card: {
      margin: `${theme.spacing(1)}px 0`,
      padding: theme.spacing(1),
      '& .MuiCardHeader-root': {
        padding: `0 ${theme.spacing(1)}px`,
      },
      '& .MuiCardActions-root': {
        padding: 0,
        '& > *': {
          margin: `0 ${theme.spacing(1)}px`,
        },
      },
      '& .MuiAvatar-root': {
        width: '3rem',
        height: '3rem',
        marginLeft: `-${theme.spacing(1)}px`,
        marginTop: `-${theme.spacing(1)}px`,
      },
      '& .MuiCardHeader-content': {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop: `-${theme.spacing(1)}px`,
        '& > *': {
          padding: theme.spacing(1),
        }
      },
    },
    comboHeader: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        padding: theme.spacing(1),
      }
    },
    comboList: {

    },
    validAvatar: {
      backgroundColor: green[400],
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

    
    endAction: {
      marginLeft: 'auto !important',
    },
  }),
);

interface cardProps {
  valid: boolean,
  loop: number,
  combo5: number,
  combo10: number,
  sp50: number,
  sp100: number,
}

interface comboListProps {
  children?: React.ReactNode;
  className?: string,
  comboCards: any,
  setComboCards: any,
  addCard: any,
  deleteCard: any,
  handleTextFieldChanges: any,
  handleSwitchChanges: any,
}

const ComboList = (props: comboListProps) => {
  const classes = useStyles();
  
  return(
    <>
      {props.comboCards.map((card: cardProps, index: number) => (
        <Card className={classes.card} key={index}>
          <CardHeader
            disableTypography={true}
            avatar={
              <Avatar
                aria-label="combo"
                className={card.valid ? classes.validAvatar : ''}
              >
                {index+1}
              </Avatar>
            }
            action={
              <Switch
                edge="end"
                onChange={() => props.handleSwitchChanges(card)}
                checked={card.valid}
                inputProps={{ 'aria-label': 'switch-combo' }}
              />
            }
            subheader={
              <>
                <Typography>
                  コンボ小計: {(card.combo5 * 6 + card.combo10 * 11 + card.sp50*1 + card.sp100*1) * card.loop}
                </Typography>
                <Typography>
                  ターン数: {((card.combo5*1 + card.combo10*1 + card.sp50*1 + card.sp100*1) * card.loop + card.loop*1)} ({4 * ((card.combo5*1 + card.combo10*1 + card.sp50*1 + card.sp100*1) * card.loop + card.loop*1)}s)
                </Typography>
                <Typography>
                  本数: {card.combo5*1 + card.combo10*1 + card.sp50*1 + card.sp100*1}
                </Typography>
              </>
            }
          />
          <CardActions disableSpacing={true}>
            <TextField
              id={`loop-${index}`}
              label="周回数"
              type="number"
              value={card.loop}
              onChange={(event) => props.handleTextFieldChanges(event, card)}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                min: 1,
                max: 20,
                step: 1,
              }}
            />
            <TextField
              id={`combo5-${index}`}
              label="コンボ+5"
              type="number"
              value={card.combo5}
              onChange={(event) => props.handleTextFieldChanges(event, card)}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                min: 0,
                max: 20,
                step: 1,
              }}
            />
            <TextField
              id={`combo10-${index}`}
              label="コンボ+10"
              type="number"
              value={card.combo10}
              onChange={(event) => props.handleTextFieldChanges(event, card)}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                min: 0,
                max: 20,
                step: 1,
              }}
            />
            <TextField
              id={`sp50-${index}`}
              label="SP+50"
              type="number"
              value={card.sp50}
              onChange={(event) => props.handleTextFieldChanges(event, card)}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                min: 0,
                max: 20,
                step: 1,
              }}
            />
            <TextField
              id={`sp100-${index}`}
              label="SP+100"
              type="number"
              value={card.sp100}
              onChange={(event) => props.handleTextFieldChanges(event, card)}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                min: 0,
                max: 20,
                step: 1,
              }}
            />
            <div className={classes.endAction}>
              <Hidden smUp implementation="css">
                <IconButton
                  aria-label="複製"
                  onClick={() => props.addCard([card.combo5, card.combo10, card.sp50, card.sp100, card.loop])}
                >
                  <LibraryAddIcon />
                </IconButton>
                <IconButton
                  aria-label="削除"
                  onClick={() => props.deleteCard(card)}
                >
                  <DeleteIcon />
                </IconButton>
              </Hidden>
              <Hidden xsDown implementation="css">
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<LibraryAddIcon />}
                  onClick={() => props.addCard([card.combo5, card.combo10, card.sp50, card.sp100, card.loop])}
                >
                  複製
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<DeleteIcon />}
                  onClick={() => props.deleteCard(card)}
                >
                  削除
                </Button>
              </Hidden>
            </div>
          </CardActions>
        </Card>
      ))}
    </>
  )
};

const INITIAL_CARD = {
  valid: true,
  loop: 1,
  combo5: 16,
  combo10: 2,
  sp50: 0,
  sp100: 2,
};

const ComboTable = () => {
  const classes = useStyles();
  const [comboCards, setComboCards] = useState([INITIAL_CARD]);
  

  const handleTextFieldChanges = (e, card: cardProps) => {
    const rawId = e.target.id;
    const id = rawId.slice(0, rawId.indexOf('-'));
    
    setComboCards(comboCards.filter(x => {
      if (x === card) x[id] = e.target.value;
      return x;
    }));
  }
  
  
  const addCard = (init?: number[]) => {
    setComboCards([...comboCards, {
      valid: true,
      loop: init ? init[4] : 1,
      combo5: init ? init[0] : 16,
      combo10: init ? init[1] : 2,
      sp50: init ? init[2] : 0,
      sp100: init ? init[3] : 2,
    }]);
  }

  const deleteCard = (card: cardProps) => {
    setComboCards(comboCards.filter(x => x !== card));
  }

  const handleSwitchChanges = (card: cardProps) => {
    setComboCards(comboCards.filter(x => {
      if (x === card) x.valid = !x.valid;
      return x;
    }));
  }

  const comboBonus = (combo: number) => {
    let bonus = 100000;
    const a = combo - 200;
    if (a < 0) return (bonus += combo * 70) / 100000;
    const b = a - 300;
    if (b < 0) return (bonus += 200 * 70 + a * 50) / 100000;
    return (bonus += 200 * 70 + 300 * 50 + b * 35) / 100000;
  }

  const ComboSum = comboCards.reduce((pre, x) => pre + (x.combo5 * 6 + x.combo10 * 11 + x.sp50*1 + x.sp100*1) * x.loop, 0);
  
  return(
    <>
      <div className={classes.root}>
        <div className={classes.comboHeader}>
          <Typography>コンボ総数: {ComboSum}</Typography>
          <Typography>コンボ人数: {comboCards.length}</Typography>
          <Typography>コンボ倍率: {comboBonus(ComboSum)}</Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddCircleIcon />}
            onClick={() => addCard()}
          >
            追加
          </Button>
        </div>
        <div className={classes.comboList}>
          <ComboList
            comboCards={comboCards}
            setComboCards={setComboCards}
            handleSwitchChanges={handleSwitchChanges}
            handleTextFieldChanges={handleTextFieldChanges}
            deleteCard={deleteCard}
            addCard={addCard}
          />
        </div>
      </div>
    </>
  )
};

export default ComboTable;