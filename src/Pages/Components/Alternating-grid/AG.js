import React from 'react'
import { Container, Grid} from '@material-ui/core';

const  AlternatingGrid = (props) => {

    // function to reverse row every alternate row
    function alternate(row) {
        var dir = "row";
        if(row%2!==0){
            dir = "row-reverse";
        }
        return dir;
}
    return (
    <div className="AltrnatingridContainer">
        <Container className={props.name + "-Main-Container"}>
            {/* mapping out the values */}
            {props.values.map(data=>(
                <Grid container className={props.name + "-grid-container"} key={data.id} direction={alternate(data.id)} >                           
                    <Grid item className={props.name + "-grid-item-img"} xs={12} sm={12} md={6} lg={6} >
                        {/* image */}
                        <div>
                            <img src={data.img} alt="" className={props.name+ "-img" } />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} style={{ margin:"auto"}}>
                        {/* text */}
                        <div style={{ width:"85%"}}>
                            <h3 className={props.name+ "-grid-title"} style={{color:(data.titlecol)}}>
                                {data.title}
                            </h3>
                            <p className={props.name+ "-grid-text"} >
                                    {data.text}
                            </p>
                        </div> 
                    </Grid>
            </Grid> 
            ))} 
        </Container>
    </div>
    )
}

export default AlternatingGrid
