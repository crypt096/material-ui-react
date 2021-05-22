import React from 'react'
import { useHistory, useLocation } from 'react-router';

import { makeStyles } from '@material-ui/core'

import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { AddCircleOutlined, SubjectOutlined } from '@material-ui/icons';

const drawerWidth = 240;

const useStyles = makeStyles({
    root: {
        display: 'flex'
    },
    page: {
        background: '#f9f9f9',
        width: '100%'
    },
    drawer: {
        width: drawerWidth
    },
    drawerPaper: {
        width: drawerWidth,
    },
    active: {
        background: '#f4f4f4'
    }
})

export default function Layout({ children }) {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    const menuItems = [
        {
            text: "My notes",
            icon: <SubjectOutlined color="secondary" />,
            path: '/'
        },
        {
            text: "Create note",
            icon: <AddCircleOutlined color="secondary" />,
            path: '/create'
        }
    ]

    return (
        <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <div>
                    <Typography variant="h5">
                        Alex Notes
                    </Typography>
                </div>

                {/* List links */}
                <List>
                    {menuItems.map(item => (
                        <ListItem key={item.text} button onClick={() => history.push(item.path)} className={location.pathname == item.path ? classes.active : null}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <div className={classes.page}>
                {children}
            </div>
        </div>
    )
}
