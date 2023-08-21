import React from "react";
import { Container, Typography, Grid, Grow, AppBar} from "@material-ui/core";
import logo from "./assets/high-logo.png"
import Posts from "./components/Posts/Posts.js"
import Form from "./components/Form/Form.js"
import useStyles from "./style.js"


const App = ()=>{
    const classes = useStyles();
    return(
    <Container  maxwidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Typography className={classes.heading} variant="h2" align="center">
                eसंपर्क
            </Typography>
            <img className={classes.image} src={logo} alt="logo" height="40" width="240"/>
        </AppBar>
        <Grow in>
            <Container>
                <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} xm={7}> 
                        <Posts/>
                    </Grid>
                    <Grid item xs={12} xm={5}> 
                        <Form/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    </Container>
    )
}

export default App;