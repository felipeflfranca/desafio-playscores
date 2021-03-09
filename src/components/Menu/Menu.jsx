import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
import SportsFootballIcon from '@material-ui/icons/SportsFootball';
import SportsMmaOutlinedIcon from '@material-ui/icons/SportsMmaOutlined';

import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { translationBr } from "../../lang/translation";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: 36,
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
        },
        drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        drawerClose: {
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(9) + 1,
            },
        },
        toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            backgroundImage: 'url(./logo.png)',
            backgroundRepeat: 'none'
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        menuIcon: {
            fontSize: 40
        }
    }),
);

i18n.use(initReactI18next).init({
    resources: {
        ptbr: { translation: translationBr },
    },
    lng: "ptbr",
    fallbackLng: "ptbr",
    interpolation: { escapeValue: false },
});

export default function MiniDrawer() {
    const classes = useStyles();
    const [open] = React.useState(false);

    const {t} = useTranslation();

    return (
        <div className={classes.root}>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    
                </div>
                <Divider />
                <List>
                    <ListItem button key={"SportsSoccer"}>
                        <ListItemIcon><SportsSoccerIcon className={classes.menuIcon}/></ListItemIcon>
                        <ListItemText primary={t("sportsSoccer")} />
                    </ListItem>
                    <ListItem button key={"SportsBasketball"}>
                        <ListItemIcon><SportsBasketballIcon className={classes.menuIcon}/></ListItemIcon>
                        <ListItemText primary={t("sportsBasketball")} />
                    </ListItem>
                    <ListItem button key={"SportsFootball"}>
                        <ListItemIcon><SportsFootballIcon className={classes.menuIcon}/></ListItemIcon>
                        <ListItemText primary={t("sportsFootball")} />
                    </ListItem>
                    <ListItem button key={"SportsMmaOutlinedIcon"}>
                        <ListItemIcon><SportsMmaOutlinedIcon className={classes.menuIcon}/></ListItemIcon>
                        <ListItemText primary={t("sportsMma")} />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
}
