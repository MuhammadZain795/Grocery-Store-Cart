import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container,Grid,Typography, Paper, List, ListItem } from '@material-ui/core';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
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
    const [checked, setChecked] = React.useState([0]);
    

    const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    };
    const addToCart=()=>{
        alert("called")
    };

    useEffect(() => {
        fetch("http://localhost:5000/zain")
          .then(res=>res.json())
          .then(
            (result) => {
                console.log(result)
            },
            (error) => {
                console.log(error)
            }
          )
      }, [])

    return (
        <Container component="main">
            <Typography component="h1" variant="h5" style={{padding:50, fontSize:50}}>
                Categories
            </Typography>

            <Grid container spacing={3} className={classes.categories}>
                <Grid item xs={3}>
                <Paper className={classes.paper}>
                <List className={classes.root}>
                    <ListItem style={{fontWeight:'bold', color:'black', fontSize:20}}>Fruits</ListItem>
                    {['Apple','Banana','PineApple','Watermelon'].map((value) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                    <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
                        <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={checked.indexOf(value) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': labelId }}
                        />
                        </ListItemIcon>
                        <ListItemText id={labelId}>{value}</ListItemText>
                        <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="comments">
                        </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    );
                    })}
                    </List></Paper></Grid>

            <Grid item xs={3}>
                <Paper className={classes.paper}>
                <List className={classes.root}>
                <ListItem style={{fontWeight:'bold', color:'black', fontSize:20}}>Vegetables</ListItem>
                    {['Beets','Asparagus','Spinach','Red Pepper'].map((value) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                    <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
                        <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={checked.indexOf(value) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': labelId }}
                        />
                        </ListItemIcon>
                        <ListItemText id={labelId}>{value}</ListItemText>
                        <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="comments">
                        </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    );
                    })}
                    </List></Paper></Grid>

            <Grid item xs={3}>
                <Paper className={classes.paper}>
                <List className={classes.root}>
                <ListItem style={{fontWeight:'bold', color:'black', fontSize:20}}>Snacks</ListItem>
                    {['Lays','Kurkure','Wavy','Doritos'].map((value) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                    <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
                        <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={checked.indexOf(value) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': labelId }}
                        />
                        </ListItemIcon>
                        <ListItemText id={labelId}>{value}</ListItemText>
                        <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="comments">
                        </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    );
                    })}
                    </List></Paper></Grid>

            <Grid item xs={3}>
                <Paper className={classes.paper}>
                <List className={classes.root}>
                <ListItem style={{fontWeight:'bold', color:'black', fontSize:20}}>Chocolates</ListItem>
                    {['Snickers','Dairy Milk','Mars','Twix'].map((value) => {
                    const labelId = `checkbox-list-label-${value}`;

                    return (
                    <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
                        <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={checked.indexOf(value) !== -1}
                            tabIndex={-1}
                            disableRipple
                            inputProps={{ 'aria-labelledby': labelId }}
                        />
                        </ListItemIcon>
                        <ListItemText id={labelId}>{value}</ListItemText>
                        <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="comments">
                        </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                    );
                    })}
                    </List></Paper></Grid>
            </Grid>
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={addToCart}>Add to Cart</Button>            
        </Container>
    )
}
