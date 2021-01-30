import React, { useEffect, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Button, Paper, Tooltip, Typography } from '@material-ui/core';
import { SINoImage } from 'src/components';
import TimerIcon from '@material-ui/icons/Timer';
import DeleteIcon from '@material-ui/icons/Delete';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import NightmareTabs from './nightmare-tabs';

//タイマー保持
let colo_countdown_timer: NodeJS.Timeout,
    mare_countdown_timer: NodeJS.Timeout,
    ready_countdown_timer: NodeJS.Timeout,
    ready_tick_timer: NodeJS.Timeout,
    mare_tick_timer : NodeJS.Timeout;
//メア時間保持
let mareTime = [0, 0];
//タイマー測定開始時間保持
let ready = new Date();

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '5px',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'center',
      alignItems: 'stretch',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },
      '& h2': {
        fontSize: '1.8rem',
        margin: '10px auto',
        width: '100%',
      },
      '& .MuiToggleButton-root': {
        padding: '2px',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          filter: 'invert(5%)',
        },
        '&.Mui-selected': {
          backgroundColor: 'rgba(0, 0, 0, 0.24)',
          filter: 'invert(20%)',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.28)',
            filter: 'invert(25%)',
          },
        },
      },
    },
    flex: {
      display: 'flex',
    },
    timerPanel: {
      margin: '0 5px',
    },
    historyPanel: {
      margin: '0 5px',
      position: 'relative',
    },

    timerTable: {
      width: 'fit-content',
      margin: '0 auto',
    },
    timerLabelCell: {
      flexGrow: 2,
      height: '3rem',
      padding: '1px 5px',
      background: '#FF7F50',
      color: '#FFFFFF',
      textAlign: 'center',
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    timerIconCell: {
      border: 'solid 1px lightgray',
      width: '6rem',
      height: '6rem',
    },
    timeDisplayCell: {
      border: 'solid 1px lightgray',
      width: '10.5rem',
      padding: '0px 10px',
      textAlign: 'center',
      fontSize: '2rem',
      fontWeight: 'bold',
    },

    settingTriggerTable: {
      width: '80%',
      margin: '0 auto',
    },
    settingStartPanel: {
      width: '95%',
      margin: '0 auto',
    },
    settingnightmarePanel: {
      margin: '0 auto',
    },
    settingOptionalTable: {
      display: 'flex',
      flexDirection: 'row',
      width: '85%',
      margin: '0 auto',
      '& .MuiButton-root': {
        minWidth: 'auto', 
        width: '40px',
        height: '40px',
        padding: '0px',
        margin: '3px',
        fontSize: '1.6rem',
      },
    },    
    settingClearPanel: {
      margin: '0 0 0 auto',
      '& .MuiButton-root': {
        width: '10rem',
      },
    },
    settingTable: {
      '& > *': {
        marginBottom: theme.spacing(1),
      },
    },

    timerButton: {
      width: '100%',
      minWidth: '100px',
      height: '5rem',
      fontSize: '1.8rem',
    },
    nightmareButtonIcon: {
      width: '4rem',
      height: '4rem',
    },
  }),
);

const TimerTable = (props: any) => {
  const classes = useStyles();

  return(
    <>
      <h2>コロシアム残り時間</h2>

      <Paper square className={classes.timerTable}>
        <div className={classes.flex}>
          <Paper variant="outlined" square className={classes.timerLabelCell}>全体時間</Paper>
          <Paper variant="outlined" square className={classes.timeDisplayCell}>{props.coloCountText}</Paper>
        </div>
        <div className={classes.flex}>
          <Paper variant="outlined" square className={classes.timerIconCell}></Paper>
          <div>
            <div className={classes.flex}>
              <Paper variant="outlined" square className={classes.timerLabelCell}>発動</Paper>
              <Paper variant="outlined" square className={classes.timeDisplayCell}>00:00:00</Paper>
            </div>
            <div className={classes.flex}>
              <Paper variant="outlined" square className={classes.timerLabelCell}>終了</Paper>
              <Paper variant="outlined" square className={classes.timeDisplayCell}>__:__:__</Paper>
            </div>
          </div>
        </div>
      </Paper>
    </>
  )
};

const MaretimerTable = (props: any) => {
  const classes = useStyles();

  return(
    <>
      <h2>タイマー</h2>
      <Paper square className={classes.timerTable}>
        <div className={classes.flex}>
          <Paper variant="outlined" square className={classes.timerLabelCell}>発動時間</Paper>
          <Paper variant="outlined" square className={classes.timeDisplayCell}>{props.readyCountText}</Paper>
        </div>
        <div className={classes.flex}>
          <Paper variant="outlined" square className={classes.timerLabelCell}>終了時間</Paper>
          <Paper variant="outlined" square className={classes.timeDisplayCell}>{props.mareCountText}</Paper>
        </div>
      </Paper>
    </>
  )
};

const TimerSettingTable = (props: any) => {
  const classes = useStyles();

  return(
    <>
      <h2>タイマー設定</h2>
      <div className={classes.settingTable}>
        <div className={classes.settingTriggerTable}>
          <ToggleButtonGroup value={props.triggers} onChange={props.handleTriggers} aria-label="text formatting">
            <ToggleButton value="short" aria-label="3rdユノ">
              <Tooltip title={<Typography variant="h6">3rdユノ</Typography>} arrow>
                <SINoImage className={classes.nightmareButtonIcon} data-id='5975' />
              </Tooltip>
            </ToggleButton>
            <ToggleButton value="90s" aria-label="ギガース">
              <Tooltip title={<Typography variant="h6">ギガース</Typography>} arrow>
                <SINoImage className={classes.nightmareButtonIcon} data-id='6324' />
              </Tooltip>
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <div className={classes.settingStartPanel}>
          <Button
            variant="contained"
            color="primary"
            className={classes.timerButton}
            startIcon={<TimerIcon />}
            onClick={() => props.handleStartButton()}
            disabled={props.startButtonDisabled}
          >
            ナイトメア準備
          </Button>
        </div>
        <div className={classes.settingOptionalTable}>
          <div>
            <Tooltip title={
                <>
                  <Typography variant="h6">逆刻</Typography>
                  <Typography>選択ナイトメアを準備開始まで巻き戻す。</Typography>
                </>
              } arrow>
              <span>
                <Button variant="contained" disabled={props.optButtonDisabled}>
                  <SINoImage className={classes.nightmareButtonIcon} data-id='6416' />
                </Button>
              </span>
            </Tooltip>
            <Tooltip title={
              <>
                <Typography variant="h6">順刻</Typography>
                <Typography>選択ナイトメアを20秒早める。</Typography>
              </>
            } arrow>
              <span>
                <Button variant="contained" disabled={props.optButtonDisabled}>
                  <SINoImage className={classes.nightmareButtonIcon} data-id='2672' />
                </Button>
              </span>
            </Tooltip>
            <Tooltip title={
              <>
                <Typography variant="h6">微調整</Typography>
                <Typography>1秒の入力遅延を調整する。</Typography>
              </>
            } arrow>
              <span>
                <Button variant="contained" disabled={props.optButtonDisabled}>
                  -1
                </Button>
              </span>
            </Tooltip>
          </div>
          <div className={classes.settingClearPanel}>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<DeleteIcon />}
              onClick={() => props.handleClearButton()}
            >
              クリア
            </Button>
          </div>
        </div>
        <div className={classes.settingnightmarePanel}>
          <NightmareTabs
            handleNightmareButton={props.handleNightmareButton}
          />
        </div>
      </div>
    </>
  )
};

const NightmareTimerTable = (props: any) => {
  const classes = useStyles();

  const nowZeroDate = () => {
    const now = new Date();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);
    return now;
  }
  
  let test = nowZeroDate();
      
  //コロシアム残り時間
  const [coloCount, setColoCount] = useState(new Date());
  //発動残り時間
  const [readyCount, setReadyCount] = useState(nowZeroDate());
  //効果残り時間
  const [mareCount, setMareCount] = useState(nowZeroDate());
  //タイマーが起動しているかの判定
  const [startActivate, setStartActivate] = useState(false);

  //発動・効果タイミング
  const [coloMareTime, setColoMareTime] = useState(['00:00:00', '00:00:00']);

  //スタートボタン押下時間
  //const [ready, setReady] = useState(new Date());
  //ナイトメア時間情報 @param [mareReady, mareActivate]
  //const [mareTime, setMareTime] = useState<number[]>(() => [0, 0]);

  //トリガーボタン情報
  const [triggers, setTriggers] = useState<string[]>([]);
  const handleTriggers = (event: React.MouseEvent<HTMLElement>, newTriggers: string[]) => {
    setTriggers(newTriggers);
  };

  //ボタンDisabled
  const [startButtonDisabled, setStartButtonDisabled] = useState(false);
  const [optButtonDisabled, setOptButtonDisabled] = useState(true);

  /*
  useEffect(() => {
    const startTime = getCloseColoTime();
    colo_countdown_timer = setInterval(() =>
                        setColoCount(() => colo_countdown(startTime))
                        , 50);
    return () => clearInterval(colo_countdown_timer);
  }, []);
  */

  useEffect(() => {
    const startTime = getCloseColoTime();
    colo_countdown_timer = setTimeout(setColoCount.bind(null, colo_countdown(startTime)), 50);
    return () => {
      clearTimeout(colo_countdown_timer);
    };
  }, [coloCount]);

  const getCloseColoTime = () => {
    var now = new Date();
    var time = Number(now.getHours() + "" + ("0" + now.getMinutes()).slice(-2));

    if (colo_countdown_timer != null) clearInterval(colo_countdown_timer);
    var startTime;
    if (time <= 820) {
      startTime = "8:00";
    } else if (time <= 1250) {
      startTime = "12:30";
    } else if (time <= 1820) {
      startTime = "18:00";
    } else if (time <= 1920) {
      startTime = "19:00";
    } else if (time <= 2020) {
      startTime = "20:00";
    } else if (time <= 2120) {
      startTime = "21:00";
    } else if (time <= 2220) {
      startTime = "22:00";
    } else if (time <= 2320) {
      startTime = "23:00";
    } else {
      startTime = "24:00";
    }
    return getTimeDate(startTime + ":00:00");
  }
  
  const getTimeText = (date: Date) => {
    let hh, mm, ss, dd;
    hh = ("0" + date.getHours()).slice(-2);
    mm = ("0" + date.getMinutes()).slice(-2);
    ss = ("0" + date.getSeconds()).slice(-2);
    dd =  (date.getMilliseconds() + "0").slice(0, 2);
    return hh + ":" + mm + ":" + ss + ":" + dd;
  }

  const getTimeDate = (dateValue: string) => {
    const dateArray = dateValue.split(":");

    const date = new Date();
    date.setHours(Number(dateArray[0]));
    date.setMinutes(Number(dateArray[1]));
    date.setSeconds(Number(dateArray[2]));
    date.setMilliseconds(Number(dateArray[3]));

    return date;
  }

  //endDateまでの時間
  const getCountdownDate = (endDate: Date) => {
    const now = nowZeroDate();
    now.setTime(now.getTime() + endDate.getTime() - new Date().getTime());
  
    return now;
  }

  const getEndDate = (endtime: number, date: Date) => {
    const now = new Date(date);
    now.setSeconds(date.getSeconds() + endtime);

    return now;
  }

  //コロシアム残り時間
  const colo_countdown = (date: Date) => {
    const endDate = getEndDate(1200, date);
    const count = getCountdownDate(endDate);

    if (count.getDate() != new Date().getDate()) {
      clearTimeout(colo_countdown_timer);
      return nowZeroDate();
    }
    return count;
  }

  const tick_tock = () => {
    //$("#audio1").get(0).play();
  }

  let ready_countdown_bgcolorflg = false;
  let mare_countdown_bgcolorflg = false;

  const flashBackground = (bgcolor: string, outtime: number) => {
    /*
    $("BODY").animate({ backgroundColor: bgcolor }, 50, function() {
      $(this).animate({ backgroundColor: "#ffffff" }, outtime);
    });
    */
  }

  //readyカウントダウン
  const ready_countdown = () => {
    var endDate = getEndDate(mareTime[0], ready);
    var count = getCountdownDate(endDate);

    
    if (count.getDate() != new Date().getDate()) {
      clearInterval(ready_countdown_timer);
      setReadyCount(() => nowZeroDate());
      
      //flashBackground(start_bgcolor, 500);
      //ready_countdown_bgcolorflg = false;
      
      //clearInterval(ready_tick_timer);
      //$("#audio2").get(0).play();
    } else {
      setReadyCount(count);

      var m, s;
      m = count.getMinutes() * 60;
      s = count.getSeconds();
      if (m + s == 10 && ready_countdown_bgcolorflg == false) {
        //flashBackground(start_bgcolor, 50);
        ready_countdown_bgcolorflg = true;
        
        tick_tock();
        //ready_tick_timer = setInterval(tick_tock, 1000);
      }
    }
  };

  //メアカウントダウン
  const mare_countdown = () => {
    var endDate = getEndDate(mareTime[0] + mareTime[1], ready);
    var count = getCountdownDate(endDate);

    if (count.getDate() != new Date().getDate()) {
      setStartButtonDisabled(false);
      setOptButtonDisabled(true);
      setTriggers([]);

      clearInterval(mare_countdown_timer);
      setMareCount(() => nowZeroDate());

      //flashBackground(mare_bgcolor, 500);
      //mare_countdown_bgcolorflg = false;
      
      //clearInterval(mare_tick_timer);
      //$("#audio2").get(0).play();
    } else {
      setMareCount(count);

      var m, s;
      m = count.getMinutes() * 60;
      s = count.getSeconds();
      if (m + s == 10 && mare_countdown_bgcolorflg == false) {
        //flashBackground(mare_bgcolor, 50);
        mare_countdown_bgcolorflg = true;
        
        tick_tock();
        //mare_tick_timer = setInterval(tick_tock, 1000);
      }
    }
  };

  const handleStartButton = () => {
    setStartActivate(true);
    //last_time_act = last_time;

    //setReady(now);
    ready = new Date();
    
    tick_tock();

    if (ready_countdown_timer != null) clearInterval(ready_countdown_timer);
    if (mare_countdown_timer != null) clearInterval(mare_countdown_timer);

    setStartButtonDisabled(true);
    setOptButtonDisabled(false);
  }

  const handleClearButton = () => {
    const initTime = nowZeroDate();
    setReadyCount(initTime);
    setMareCount(initTime);
    //setReady(initTime);
    //setMareTime([0, 0]);
    ready = new Date();
    mareTime = [0, 0];
    setStartActivate(false);

    if (ready_countdown_timer != null) clearInterval(ready_countdown_timer);
    if (mare_countdown_timer != null) clearInterval(mare_countdown_timer);
    
    setStartButtonDisabled(false);
    setOptButtonDisabled(true);
    setTriggers([]);
  }

  const handleNightmareButton = (e: React.MouseEvent<HTMLElement>) => {
    if (startActivate === false)  ready = new Date;
    setStartActivate(true);

    const mareReady = triggers.indexOf('90s') !== -1 ? 90 :
                      triggers.indexOf('short') !== -1 ? 5 :
                      e.currentTarget.dataset.ready === undefined ? 0 : +e.currentTarget.dataset.ready;
    const mareActivate = e.currentTarget.dataset.activate === undefined ? 0 : +e.currentTarget.dataset.activate;

    //setMareTime([mareReady, mareActivate]);
    mareTime = [mareReady, mareActivate];
    
    if (ready_countdown_timer != null) clearInterval(ready_countdown_timer);
    if (mare_countdown_timer != null) clearInterval(mare_countdown_timer);

    ready_countdown_timer = setInterval(ready_countdown, 100);
    mare_countdown_timer = setInterval(mare_countdown, 100);
    
    setStartButtonDisabled(true);
    setOptButtonDisabled(false);

    /*  発動・効果タイミング
    var countText_now = getTimeText(getEndDate(-1, last_time_act));
    var countText_ready = getTimeText(getEndDate(ready * -1 - 1, last_time_act));
    var countText_end = getTimeText(getEndDate((ready + activate) * -1 - 1, last_time_act));

    $("#next_icon").attr("src", "https://sinoalice.game-db.tw/images/card/CardS" + $(this).data("id") + ".png");
    $("#next_ready").html(countText_ready);
    $("#next_end").html(countText_end);
    */
  }

  return(
    <>
      <Paper className={classes.root}>
        <div className={classes.timerPanel}>
          <TimerTable
            coloCountText={getTimeText(coloCount).slice(0,8)}
          />
          <MaretimerTable
            readyCountText={getTimeText(readyCount).slice(0,8)}
            mareCountText={getTimeText(mareCount).slice(0,8)}
          />
          <TimerSettingTable
            triggers={triggers}
            handleTriggers={handleTriggers}
            optButtonDisabled={optButtonDisabled}
            startButtonDisabled={startButtonDisabled}
            handleStartButton={handleStartButton}
            handleClearButton={handleClearButton}
            handleNightmareButton={handleNightmareButton}
          />
        </div>
        <div className={classes.historyPanel}>
          <h2>発動履歴</h2>

        </div>
      </Paper>
    </>
  )
};

//スマホのとき、Tabを召喚しhistoryを投げつける
//timeline表示→出力（タイムテーブルで扱えるurl形式）

export default NightmareTimerTable;