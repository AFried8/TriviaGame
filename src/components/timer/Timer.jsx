import React from "react";
import {useState, useEffect, useContext} from "react";
import {Box, Typography} from '@mui/material';
import {TimeContext} from '../play/Play'

export const Timer = () => {

    const [time, setTime] = useState({minutes: 1, seconds: 0});
    const {timesUp, setTimesUp} = useContext(TimeContext);

    useEffect (() => {
        let myInterval = setInterval(() => {
            var tempTime;
            if(time.seconds === 0){
                if(time.minutes === 0){
                    setTimesUp(true);
                    clearInterval(myInterval);
                }
                else {
                tempTime = {minutes: 0, seconds: 59};
                setTime(tempTime);
                }
            }
            else{
                tempTime = {minutes: time.minutes, seconds: time.seconds-1};
                setTime(tempTime);
            }
        }, 1000);
        return () => clearInterval(myInterval);
    }, [time])

    return (
        <div>
        <Box borderRadius={4} sx={{p: 2, border: '5px solid', backgroundColor: 'primary.main'}}>
         <Typography variant='h2' style={{alignContent: 'center', color: 'white'}}> Time remaining </Typography>
         <Typography variant='h1' style={{alignContext: 'center', color: 'white'}}>
             {time.minutes}:{time.seconds < 10? 0: ''}{time.seconds}
         </Typography>
         </Box>
        </div>
    );
    
}