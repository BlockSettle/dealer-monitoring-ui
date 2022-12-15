import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import { logo } from "assets/images/image";
import { useSocketContext } from "context/SocketProvider";
import ReadyStates from "./components/ReadyStates";
import BalanceMaker from "./components/BalanceMaker";
import BalanceTaker from "./components/BalanceTaker";
import PositionMaker from "./components/PositionMaker";
import PositionTaker from "./components/PositionTaker";


function Dealer() {
  const { data } = useSocketContext()
  console.log("+++++++++++++++++++++++++", data)
  return (
    <>
      {
        data == null ?
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className="w-100 h-100"
          >
            <Grid item md={4} sm={6} flexDirection="column" textAlign="center">
              <img src={logo} alt="logo" className="logo-alone-img" />
              <h1>Loading...</h1>
            </Grid>
          </Grid>
          :
          <Grid
            container
            spacing={3}
          >
            <Grid item xs={12} md={12}>
              <ReadyStates data={data.ready_state} />
              <Typography variant='h3' color="secondary" textAlign={'center'}>Dealer Status</Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <Card>
                <CardHeader
                  title='Balance'
                  subheader=''
                  subheaderTypographyProps={{ sx: { lineHeight: '1.25rem', fontSize: '0.875rem !important' } }}
                  titleTypographyProps={{
                    sx: {
                      fontSize: '2rem !important',
                      lineHeight: '2.5rem !important',
                      letterSpacing: '0.43px !important'
                    }
                  }}
                />
                <CardContent>
                  <Grid
                    container
                  >
                    <Grid item xs={12} md={6}>
                      <BalanceMaker data={data.balances.maker} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <BalanceTaker data={data.balances.taker} />
                    </Grid>

                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={12}>
              <Card>
                <CardHeader
                  title='Positions'
                  subheader=''
                  subheaderTypographyProps={{ sx: { lineHeight: '1.25rem', fontSize: '0.875rem !important' } }}
                  titleTypographyProps={{
                    sx: {
                      fontSize: '2rem !important',
                      lineHeight: '2.5rem !important',
                      letterSpacing: '0.43px !important'
                    }
                  }}
                />
                <CardContent>
                  <Grid
                    container
                    spacing={3}
                  >
                    <Grid item xs={12} md={6}>
                      <PositionMaker data={data.positions.maker} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <PositionTaker data={data.positions.taker} />
                    </Grid>

                  </Grid>
                </CardContent>
              </Card>
            </Grid>

          </Grid>

      }
    </>

  );
}

export default Dealer;
