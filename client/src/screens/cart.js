import { Container, Typography, ListItem, List, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function Cart() {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
            <Typography component="h1" variant="h5" style={{padding:50, fontSize:50}}>
                Cart Details
            </Typography>
            
            <Grid container spacing={3}>
                <Grid item xs={12}>
                <Paper className={classes.paper}>
                <List className={classes.root}>
                    <ListItem style={{fontWeight:'bold', color:'black', fontSize:20}}>Items added to cart</ListItem>
                    {['Apple','Dairy Milk','Lays','Red Pepper'].map((value) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                    <ListItem key={value} role={undefined} dense button>
                        <ListItemIcon>
                        </ListItemIcon>
                        <ListItemText id={labelId}>{value}</ListItemText>
                    </ListItem>
                    );
                    })}
                    </List>
                </Paper>
                </Grid>
            </Grid>
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary">Done</Button>    
                
        </Container>
    )
}
