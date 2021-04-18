import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container,Grid,Typography, Paper, List, ListItem } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    categories:{
        padding:50
    }
  }));

export default function Categories() {
    const classes = useStyles();
    return (
        <Container component="main">
            <Typography component="h1" variant="h5" style={{padding:50, fontSize:50}}>
                Categories
            </Typography>
            <Grid container spacing={3} className={classes.categories}>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        <List>
                            <ListItem>Zain</ListItem>
                            <ListItem>Saim</ListItem>
                            <ListItem>Ayyan</ListItem>
                            <ListItem>Hoori</ListItem>
                            <ListItem>Minni</ListItem>
                        </List>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                    <List>
                            <ListItem>Zain</ListItem>
                            <ListItem>Saim</ListItem>
                            <ListItem>Ayyan</ListItem>
                            <ListItem>Hoori</ListItem>
                            <ListItem>Minni</ListItem>
                        </List>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                    <List>
                            <ListItem>Zain</ListItem>
                            <ListItem>Saim</ListItem>
                            <ListItem>Ayyan</ListItem>
                            <ListItem>Hoori</ListItem>
                            <ListItem>Minni</ListItem>
                        </List>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                    <List>
                            <ListItem>Zain</ListItem>
                            <ListItem>Saim</ListItem>
                            <ListItem>Ayyan</ListItem>
                            <ListItem>Hoori</ListItem>
                            <ListItem>Minni</ListItem>
                        </List>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}
