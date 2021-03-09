import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, createStyles, Theme, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import SubMenu from "../SubMenu/SubMenu";
import SportsSoccerOutlinedIcon from '@material-ui/icons/SportsSoccerOutlined';

import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { translationBr } from "../../lang/translation";
import { Badge, Chip, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        customGrid: {
            paddingLeft: 70,
            paddingRight: 0,
            textAlign: 'left',
        },
        iconTitle: {
            fontSize: 50,
            float: "left"
        },
        customTitle: {
            padding: 30,
            marginBottom: 50
        },
        floatLeft: {
            float: "left",
            paddingTop: 4
        },
        floatRight: {
            float: "right",
            textAlign: "center"
        },
        width100: {
            width: "100%"
        }
    }),
);

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
            <Box p={3}>
                <Typography>{children}</Typography>
            </Box>
            )}
        </div>
    );
}
  
function a11yProps(index: any) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

i18n.use(initReactI18next).init({
    resources: {
        ptbr: { translation: translationBr },
    },
    lng: "ptbr",
    fallbackLng: "ptbr",
    interpolation: { escapeValue: false },
});

  
export default function Dashboard() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const {t} = useTranslation();

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    return (
        <React.Fragment>
            <div className={classes.root}>
                <Grid container spacing={12}>
                    <Grid item xs={2}>
                        <SubMenu/>
                    </Grid>
                    <Grid item xs={10}>
                        <div className={classes.customGrid}>
                            <React.Fragment>
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    variant="fullWidth"
                                    aria-label="full width tabs example"
                                    >
                                    <Tab label={t("futebol")} {...a11yProps(0)} />
                                    <Tab label={t("campeonatos")} {...a11yProps(1)} />
                                    <Tab label={t("desempenho")} {...a11yProps(2)} />
                                </Tabs>
                            </React.Fragment>
                            <SwipeableViews
                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={value}
                                onChangeIndex={handleChangeIndex}
                                className={classes.width100}
                            >
                                <TabPanel value={value} index={0} dir={theme.direction}>
                                    <div className={classes.customTitle}>
                                        <SportsSoccerOutlinedIcon className={classes.iconTitle}/>
                                        <div className={classes.floatLeft}>
                                            <strong>{t("sportsSoccer")}</strong><br/>
                                            <small>Sexta-Feira, dia 07 de agosto de 2020</small>
                                        </div>
                                        <div className={classes.floatRight}>
                                            <small>{t("total")}</small><br/>
                                            <Chip label={"23 "+t("players")} />
                                        </div>
                                    </div>
                                    
                                    <Divider className={classes.width100}/>
                                </TabPanel>
                                <TabPanel value={value} index={1} dir={theme.direction}>
                                    <div className={classes.customTitle}>
                                        <SportsSoccerOutlinedIcon className={classes.iconTitle}/>
                                        <div className={classes.floatLeft}>
                                            <strong>{t("campeonatos")}</strong><br/>
                                            <small>Sexta-Feira, dia 07 de agosto de 2020</small>
                                        </div>
                                        <div className={classes.floatRight}>
                                            <small>{t("total")}</small><br/>
                                            <Chip label={"23 "+t("players")} />
                                        </div>
                                    </div>
                                    
                                    <Divider className={classes.width100}/>
                                    Item Two
                                </TabPanel>
                                <TabPanel value={value} index={2} dir={theme.direction}>
                                    <div className={classes.customTitle}>
                                        <SportsSoccerOutlinedIcon className={classes.iconTitle}/>
                                        <div className={classes.floatLeft}>
                                            <strong>{t("desempenho")}</strong><br/>
                                            <small>Sexta-Feira, dia 07 de agosto de 2020</small>
                                        </div>
                                        <div className={classes.floatRight}>
                                            <small>{t("total")}</small><br/>
                                            <Chip label={"23 "+t("players")} />
                                        </div>
                                    </div>
                                    
                                    <Divider className={classes.width100}/>
                                    Item Three
                                </TabPanel>
                            </SwipeableViews>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
}