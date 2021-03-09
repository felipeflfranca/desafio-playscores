import React from 'react';
import clsx from 'clsx';
import { Avatar, Badge, Card, Menu, MenuItem, Tooltip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Brightness4Outlined from '@material-ui/icons/Brightness4Outlined';
import CardHeader from '@material-ui/core/CardHeader';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';


const Header = (props) => {
    const drawerWidth = props.drawerWidth;
    const t = props.translation;

    const useStyles = makeStyles((theme) => ({
        grow: {
            flexGrow: 1,
        },
        root: {
            display: 'flex',
        },
        appBar: {
            transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
            }),
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        hide: {
            display: 'none',
        },
        sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('md')]: {
              display: 'flex',
            },
        },
        sectionMobile: {
            display: 'flex',
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        },
        menuTop: {
            marginTop: 55,
            paddingTop: 0,
            paddingBottom: 0,
        },
        headerButton: {
            borderRadius: 0,
            marginRight: 11,
        },
        avatar: {
            marginRight: 15,
        },
        myProfileCard: {
            boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.0), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 0px 0px rgba(0,0,0,0.12)!important',
        },
        appName: {
            fontSize: 20,
            borderLeft: '4px solid #e87c00',
            paddingLeft: 10,
        }
    }));

    const classes = useStyles();

    const handleDrawer = () => {
        props.handleChangeTheme('drawer', !props.open);
    };

    const [values, setAnchorEl] = React.useState({
        anchorEl: null,
    });
  
    function handleChange(key, value) {
        setAnchorEl(values => ({
            ...values,
            [key]: value,
        }))
    }

    const handleMenuOpen = (event) => {
        handleChange('anchorEl', event.currentTarget);
    };

    const handleMenuClose = () => {
        handleChange('anchorEl', null);
    };

    const avatar = "https://material-ui.com/static/images/avatar/1.jpg";

    const menuId = 'primary-search-account-menu-mobile';
    const renderMenu = (
        <Menu
            MenuListProps={{ disablePadding: true }}
            className={classes.menuTop}
            anchorEl={values.anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={Boolean(values.anchorEl)}
            onClose={handleMenuClose}>

            <Tooltip title={t('youProfile')} placement="left">
                <MenuItem>
                    <Card className={classes.myProfileCard}>
                        <CardHeader
                            avatar={<Avatar alt="Avatar" src={avatar} className={classes.avatar}/>}
                            title="Felipe Longo França"
                            subheader={<small>Programador</small>}
                        />
                    </Card>
                </MenuItem>
            </Tooltip>
            <Divider />
            <Tooltip title={t('exitDescription')} placement="left">
                <MenuItem onClick={handleMenuClose}>
                    {t('exit')}
                </MenuItem>
            </Tooltip>
        </Menu>
    );

    return (
        <React.Fragment>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: props.open,
                })}
                style={{ background: '#0a0f1e', boxShadow: 'none'}}>

                <Toolbar>
                    <Tooltip title={clsx({
                            [t('hideMenu')]: props.open,
                            [t('showMenu')]: !props.open
                        })} placement="bottom">
                        <IconButton
                            className={classes.headerButton}
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawer}
                            edge="start">
                            {
                                props.open ? 
                                <React.Fragment><MenuIcon/><ChevronLeftIcon /></React.Fragment> : 
                                <React.Fragment><MenuIcon/><ChevronRightIcon /></React.Fragment>
                            }
                        </IconButton>
                    </Tooltip>

                    <Typography variant="h6" noWrap className={classes.appName}>
                        {t('appName')}
                    </Typography>

                    <div className={classes.grow}/>

                    <Tooltip title={t('toggleThemeColor')}>
                        <IconButton aria-label="show 4 new mails" variant="contained" color="inherit" onClick={props.toggleThemeColor} className={classes.headerButton}>
                            <Badge color="secondary">
                                <Brightness4Outlined/>
                            </Badge>
                        </IconButton>
                    </Tooltip>
                    

                    <Tooltip title={t('userOptions')}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleMenuOpen}
                            color="inherit"
                            >
                            <Avatar alt="Avatar" src={avatar}/>
                        </IconButton>
                    </Tooltip>

                </Toolbar>
            </AppBar>
            {renderMenu}
        </React.Fragment>
    )
}

export default Header;