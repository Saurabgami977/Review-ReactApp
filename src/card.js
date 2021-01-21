import { Button, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import React, { useState } from 'react';
import reviews from './data';


const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 600,
        minHeight: 400,
        textAlign: 'center',
        margin: '10px auto',
    },
    backofAvatar: {
        backgroundColor: '#49A6E9',
        height: '150px',
        borderRadius: '50%',
        position: 'relative',
        width: '150px',
    },
    avatar: {
        height: '150px',
        width: '150px',
        borderRadius: '50%',
        backgroundColor: '#49A6E9',
        objectFit: 'cover',
    }
}))

function Box(props) {
    const [index, setIndex] = useState(0);
    const { id, name, job, image, text } = reviews[index]

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index == 3 ? 0 : index + 1;
            return newIndex;
        })
    }

    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index == 0 ? 3 : index - 1;
            return newIndex;
        })
    }

    const suprise = () => {
        setIndex(index => {
            let newIndex = Math.floor(Math.random() * 4)
            return newIndex
        })
    }

    const classes = useStyles();
    return (
        <div key={id}>
            <Card className={classes.root}>
                <span className={classes.backofAvatar}>
                    <img
                        src={image}
                        className={classes.avatar}
                    />
                    <FormatQuoteIcon fontSize='large' style={{ position: 'absolute', left: 5, bottom: '110px', color: '#fff', backgroundColor: '#49A6E9', borderRadius: '50%' }} />
                </span>
                <Typography style={{ textTransform: 'capitalize', fontWeight: 'bold' }}>
                    {name}
                </Typography>
                <Typography style={{
                    textTransform: 'uppercase',
                    color: '#49A6E9'
                }}>
                    {job}
                </Typography>
                <Typography color="textSecondary" style={{ width: '400px', margin: '10px auto' }}>
                    {text}
                </Typography>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                    <ArrowBackIosIcon onClick={prevPerson} fontSize='small' />
                    <KeyboardArrowRightIcon onClick={nextPerson} fontSize='large' />
                </div>
                <Button
                    variant='contained'
                    style={{
                        backgroundColor: '#49A6E9',
                        color: '#fff'
                    }}
                    onClick={suprise}
                >
                    Random
                </Button>
            </Card>
        </div>
    )
}

export default Box
