import React,{useEffect, useState} from 'react';
import {Button, Card, Grid} from '@material-ui/core';
import {useStyles} from '../../styles/styles';
import {useDispatch, useSelector} from 'react-redux';
import {LoadProfileAction} from '../../redux/actions/ProfileActions';

export default function ProfileView() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const profileResponse = useSelector(state=>state.userDetails.userProfile);

  const [fields, setState] = useState({
    _caffeine_limit_remaining: 500,
    americanoCaffeine: 0,
    blackCoffeeCaffeine: 0,
    fiveHourEnergyCaffeine: 0,
    monsterUltraSunriseEnergy: 0,
    sugarfreeNOSCaffeine: 0,
    caffeine_temp:0
  });
  const [caffeine, setCaffeine] = useState(500);
  const chooseAmericano = e => {
     // setState({
          //_caffeine_limit_remaining : _caffeine_limit_remaining - americanoCaffeine
     // })
  }

  
  
  useEffect(() => {
    dispatch(LoadProfileAction());
  return () => {
    
  };
}, [])

 
function Choices() {
  const [count, setCount] = useState(0);


  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Button focusRipple variant="contained" color="secondary" size="large" type="submit" onClick={() => setCaffeine(caffeine - 100) }>Americano</Button>
      </Grid>
      <Grid item xs={12}>
        <Button focusRipple variant="contained" color="primary" size="large" onClick={() => {  this.chooseBlackCoffee.bind(this) }}>Black Coffee</Button>
      </Grid>
      <Grid item xs={12}>
        <Button focusRipple variant="contained" color="default" size="medium" onClick={() => {  this.chooseFiveHourEnergy.bind(this)  }}>Five Hour Energy</Button>
      </Grid>
      <Grid item xs={12}>
        <Button focusRipple variant="outlined" color="primary" size="small" onClick={() => { this.chooseMonsterUltraSunrise.bind(this)   }}>Monster Ultra Sunrise</Button>
      </Grid>
      <Grid item xs={12}>
        <Button focusRipple variant="outlined" color="secondary" size="large" onClick={( ) => { this.chooseSugarfreeNOS.bind(this)    }}>Sugarfree NOS</Button>
      </Grid>
    </React.Fragment>
  );
}

  return (
    <div className={classes.fullWidthProfile}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
        <Grid item xs={9}>
        <Card>
          {
              profileResponse !== "" && profileResponse !== null && profileResponse.success === true ?

              <div>
              <h3><b>Name: {profileResponse.data.name}</b></h3>
              <h3><b>email: {profileResponse.data.email}</b></h3>
              <h3><b>Creation Date: {profileResponse.data.created_at}</b></h3>
              <h3><b>Caffeine Limit Remaining: {caffeine}  / {profileResponse.data.caffeine_limit_remaining}</b> <Button variant="outlined" color="primary" size="small" onClick={() => { alert('clicked') }}>Reset Caffeine Limit</Button></h3>
              </div>
              :<div>Unable to display profile</div>
          }
        </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
          <Choices />
          </Card>
        </Grid>
        
        
        </Grid>
      </Grid>
    </div>
  );
}
