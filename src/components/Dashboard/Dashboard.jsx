import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, createStyles, Theme, useTheme } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import SubMenu from "../SubMenu/SubMenu";

import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { translationBr } from "../../lang/translation";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        customGrid: {
            paddingLeft: 70,
            paddingRight: 0,
            textAlign: 'left',
        },
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
                            >
                                <TabPanel value={value} index={0} dir={theme.direction}>
                                    Item One
                                </TabPanel>
                                <TabPanel value={value} index={1} dir={theme.direction}>
                                    Item Two
                                </TabPanel>
                                <TabPanel value={value} index={2} dir={theme.direction}>
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