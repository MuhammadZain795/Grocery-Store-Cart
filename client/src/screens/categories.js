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
    const [cat1, setCat1]=useState('')
    const [cat2, setCat2]=useState('')
    const [cat3, setCat3]=useState('')
    const [cat4, setCat4]=useState('')

    const [cat1Items, setCat1Items]=useState([])
    const [cat2Items, setCat2Items]=useState([])
    const [cat3Items, setCat3Items]=useState([])
    const [cat4Items, setCat4Items]=useState([])

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
                setCat1(result[0].categoryname)
                cat1Items.push(result[0].itemname);
                cat1Items.push(result[1].itemname)
                cat1Items.push(result[2].itemname);
                cat1Items.push(result[3].itemname)

                setCat2(result[4].categoryname)
                cat2Items.push(result[4].itemname);
                cat2Items.push(result[5].itemname)
                cat2Items.push(result[6].itemname);
                cat2Items.push(result[7].itemname)

                setCat3(result[8].categoryname)
                cat3Items.push(result[8].itemname);
                cat3Items.push(result[9].itemname)
                cat3Items.push(result[10].itemname);
                cat3Items.push(result[11].itemname)

                setCat4(result[12].categoryname)
                cat4Items.push(result[12].itemname);
                cat4Items.push(result[13].itemname)
                cat4Items.push(result[14].itemname);
                cat4Items.push(result[15].itemname)
                console.log(cat4Items)

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
                    <ListItem style={{fontWeight:'bold', color:'black', fontSize:20}}>{cat1}</ListItem>
                    {cat1Items.map((value) => {
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
                <ListItem style={{fontWeight:'bold', color:'black', fontSize:20}}>{cat2}</ListItem>
                    {cat2Items.map((value) => {
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
                <ListItem style={{fontWeight:'bold', color:'black', fontSize:20}}>{cat3}</ListItem>
                    {cat3Items.map((value) => {
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
                <ListItem style={{fontWeight:'bold', color:'black', fontSize:20}}>{cat4}</ListItem>
                    {cat4Items.map((value) => {
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
