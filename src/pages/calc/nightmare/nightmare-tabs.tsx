import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Box, Tabs, Tab, Typography, Paper, Tooltip, Button } from '@material-ui/core';
import { SINoImage } from 'src/components';
import { useDataNightmare } from 'src/hooks';

interface TabPanelProps {
  children?: React.ReactNode;
  className?: string,
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, className, value, index, ...other } = props;

  return (
    <div
      className={className}
      role='tabpanel'
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={2}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

interface TimerButtonIconProps {
  className?: string,
  id: string,
  handleNightmareButton?: (e: React.MouseEvent<HTMLElement>) => void,
}

const TimerButtonIcon = (props: TimerButtonIconProps) => {
  const { className, id, handleNightmareButton } = props;
  const nightmareData = useDataNightmare();
  
  const result = nightmareData.filter((e: any) => {
    return e.icon.indexOf(id) !== -1;
  });

  return (
    <>
      {result.map((e: any) => {
        return (
          <Tooltip
            key={id}
            title={
              <>
                <Typography variant="h6">{e.name}</Typography>
                <Typography>{e.cskill}</Typography>
                <Typography>準備時間: {e.ready}</Typography>
                <Typography>効果時間: {e.activate}</Typography>
                <Typography>{e.cskilltxt}</Typography>
              </>
            }
            arrow
          >
            <span>
              <Button
                key={id}
                variant="contained"
                className={className}
                onClick={(e) => handleNightmareButton(e)}
                data-ready={e.ready}
                data-activate={e.activate}
              >
                <SINoImage
                  key={id}
                  className={className}
                  data-id={id}
                />
              </Button>
            </span>
          </Tooltip>
        )
      })}
    </>
  )
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '22rem',
    '& .MuiTab-wrapper': {
      fontSize: '1.6rem',
    },
    '& .MuiBox-root': {
      overflow: 'auto',
    }
  },
  tabs: {
    width: '16rem',
    borderRight: `1px solid ${theme.palette.divider}`,
    [theme.breakpoints.down('xs')]: {
      width: '8rem',
    },
  },
  tabPanels: {
    flex: 'auto',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    minWidth: `calc(5rem + ${theme.spacing(2)}px * 2 + 12px)`,
    maxWidth: `calc(100vw - 8rem - ${theme.spacing(3)}px * 2 - 4vw - 20px)`,
    borderRight: `1px solid ${theme.palette.divider}`,
    [theme.breakpoints.down('xs')]: {
      minWidth: `calc(5rem + ${theme.spacing(2)}px * 2)`,
      maxWidth: `calc(100vw - 8rem - ${theme.spacing(3)}px * 2 - 4vw - 20px - 2px)`,
      
    },
  },
  nightmareButtonIcon: {
    width: '4rem',
    height: '4rem',
  },
  nightmareIcon: {
    minWidth: '5rem',
    width: '5rem',
    height: '5rem',
    padding: '0px',
  },
}
));

const NightmareTabs = (props: any) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root} variant="outlined">
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="NightmareTabs"
        className={classes.tabs}
      >
        <Tab label="スキル強化" {...a11yProps(0)} />
        <Tab label="スキル弱化" {...a11yProps(1)} />
        <Tab label="その他" {...a11yProps(2)} />
        <Tab label="SP関連" {...a11yProps(3)} />
        <Tab label="バフ" {...a11yProps(4)} />
        <Tab label="デバフ" {...a11yProps(5)} />
      </Tabs>
        {/* スキル強化 */}
      <TabPanel className={classes.tabPanels} value={value} index={0}>
        <Typography>
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='458' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='2437' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='480' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='4411' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='517' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='3742' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='1663' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='1048' />
        </Typography>
        <Typography>
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='1882' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='4613' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='1593' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='1431' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='2613' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='4854' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='5018' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='5244' />
        </Typography>
        <Typography>
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='5048' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='6129' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='4615' />
        </Typography>
        <Typography>
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='6678' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='6979' />
        </Typography>
        <Typography>
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='4050' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='3836' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='1010' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='1371' />
        </Typography>
      </TabPanel>
        {/* スキル弱化 */}
      <TabPanel className={classes.tabPanels} value={value} index={1}>
        <Typography>
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='556' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='640' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='1052' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='5709' />
        </Typography>
        <Typography>
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='1441' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='1591' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='5609' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='1417' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='1126' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='1316' />
        </Typography>
      </TabPanel>
        {/* その他 */}
      <TabPanel className={classes.tabPanels} value={value} index={2}>
        <Typography>
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='3140' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='6065' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='4856' />
        </Typography>
        <Typography>
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='6416' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='4413' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='2523' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='2672' />
        </Typography>
        <Typography>
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='5975' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='6324' />
        </Typography>
      </TabPanel>
        {/* SP関連 */}
      <TabPanel className={classes.tabPanels} value={value} index={3}>
        <Typography>
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='6903' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='3394' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='4619' />
        </Typography>
        <Typography>
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='558' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='1172' />
        </Typography>
      </TabPanel>
        {/* バフ */}
      <TabPanel className={classes.tabPanels} value={value} index={4}>
        <Typography>
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='2119' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='2373' />
        </Typography>
        <Typography>
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='6342' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='980' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='1647' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='1108' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='1930' />
        </Typography>
        <Typography>
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='1625' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='2784' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='1812' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='2858' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='2335' />
        </Typography>
      </TabPanel>
        {/* デバフ */}
      <TabPanel className={classes.tabPanels} value={value} index={5}>
        <Typography>
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='2199' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='3946' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='4591' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='1892' />
        </Typography>
        <Typography>
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='1573' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='1138' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='1451' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='1563' />
          <TimerButtonIcon className={classes.nightmareIcon} handleNightmareButton={props.handleNightmareButton} id='1497' />
        </Typography>
      </TabPanel>
    </Paper>
  );
}

export default NightmareTabs;