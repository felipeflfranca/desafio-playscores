import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Divider, ListSubheader } from '@material-ui/core';

import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { translationBr } from "../../lang/translation";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 315,
      height: window.innerHeight+"px",
      marginLeft: 70,
      backgroundColor: "#121830",
    },
    listSubHeader: {
        backgroundImage: "url(./background-submenu.png)",
        height: 245,
        backgroundRepeat: "no-repeat"
    },
    listBackground: {
        backgroundColor: "#121830",
        color: "#8796c5"
    },
    imageBtn: {
        height: 50
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

export default function SimpleList() {
    const classes = useStyles();
    const {t} = useTranslation();

    let menu = [];
    for (let i = 0; i < 3; i++) {
        menu.push(
            <React.Fragment>
                <ListItem button className={classes.listBackground}>
                    <ListItemIcon>
                        <img src="./leao.png" className={classes.imageBtn}/>
                    </ListItemIcon>
                    <ListItemText primary={t("subPremiereLeague")} />
                </ListItem>
                <ListItem button className={classes.listBackground}>
                    <ListItemIcon>
                        <img src="./libertadores.png" className={classes.imageBtn}/>
                    </ListItemIcon>
                    <ListItemText primary={t("libertadores")} />
                </ListItem>
                <ListItem button className={classes.listBackground}>
                    <ListItemIcon>
                        <img src="./bundesliga.png" className={classes.imageBtn}/>
                    </ListItemIcon>
                    <ListItemText primary={t("budesliga")} />
                </ListItem>
            </React.Fragment>
        )
    }

  return (
    <div className={classes.root}>
        <List component="nav" 
                aria-label="main mailbox folders"
                aria-labelledby="nested-list-subheader"
                subheader={
                <ListSubheader component="div" className={classes.listSubHeader}>
                <Divider/>
            </ListSubheader>}
            >
            {menu}
        </List>
    </div>
  );
}