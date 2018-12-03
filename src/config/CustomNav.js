import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { Link } from "react-router-dom";
import Routes from './Routes'

import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// const theme = createMuiTheme();
const drawerWidth = 240;

const styles = theme => ({
    typography: {
        // Use the system font instead of the default Roboto font.
        useNextVariants: true,
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
    root: {
        display: 'flex',
        flexGrow: 1,
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,}),
            backgroundColor: 'teal',
            color: 'white',
            
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
        marginLeft: 12,
        marginRight: 20,
        
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        
    },
    drawerPaper: {
        width: drawerWidth,
        
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
        
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
        
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
});


class PersistantDrawer extends React.Component {
    state = {
        open: false,
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };
    handleDrawerClose = () => {
    this.setState({ open: false });
    };

    
    render() {
        const { classes, theme } = this.props;
        const { open } = this.state;

        return (
            <div className={classes.root}>
            <CssBaseline />
              <AppBar
                position="fixed"
                color="inherit"
                className={classNames(classes.appBar, {
                  [classes.appBarShift]: open,
                })}>
                <Toolbar disableGutters={!open}>
                  <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={this.handleDrawerOpen}
                    className={classNames(classes.menuButton, open && classes.hide)}>
                    <MenuIcon />
                  </IconButton>
                  <Typography className={classes.typography} variant="h6" color="inherit" noWrap>
                    Nicole Kissell
                  </Typography>
                    <Tabs
                        scrollable 
                        scrollButtons="auto"
                    >
                        <Tab label="Home" component={Link} to="/"></Tab>
                        <Tab label="About Me" component={Link} to="/about"></Tab>
                        <Tab label="Contact Me" component={Link} to="/Contact"></Tab>
                        <Tab label="Projects" component={Link} to="/ProjectsPage"></Tab>
                        <Tab label="Resume" component={Link} to="/Resume"></Tab>
                    </Tabs>
                </Toolbar>

              </AppBar>
              <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                  paper: classes.drawerPaper,
                }}>
                <div className={classes.drawerHeader}>
                  <IconButton onClick={this.handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                  </IconButton>
                </div>
                <List>
                    <ListItem >
                        <Link to="/">Home</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/about">About Me</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/Contact">Contact Me</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/ProjectsPage">Projects</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/Resume">Resume</Link>
                    </ListItem>
                </List>

              </Drawer>

        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}>
          <div className={classes.drawerHeader} />
          <Routes/>

        </main>
            </div>
          );

    }
}

PersistantDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true })(PersistantDrawer);
