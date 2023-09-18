
export default function ShowTime(props){
    const h =()=>{
        if(props.time.h===0){
            return '';
        }
        else{
            return <span>{(props.time.h >=10)?props.time.h : "0"+ props.time.h}</span>
        }
    }

    return <>
        <div className="container"></div>
    <div className="col-lg-12 col-md-12">
   
     <div className="mt-5 align-center ml-0 mr-0 mx-auto p-5 bg-dark text-light rounded-circle text-center " 
    style={{ width: "350px",
  height:" 350px"}}>
    
     
      <span style={{position : "relative",
	top : "40%",
	transform : "translateY(-50%)", fontSize:"40px"}} className="text-bold">
       
        <span>{h()}</span>
        <span>{(props.time.m >= 10)? props.time.m : "0" + props.time.m} : </span>
        <span>{(props.time.s >= 10)? props.time.s : "0" + props.time.s} : </span>
        <span>{(props.time.ms >= 10)? props.time.ms : "0" + props.time.ms}</span>
  </span>
  </div>
    </div>

  <div className="row mt-3 p-5">
<div className="col-md-12 col-lg-12 text-center" >
  {(props.status ===0)?<button className="btn btn-outline-info" onClick={props.start} >Start</button>
:""
}
{(props.status ===1)?
<div>
<button className="btn btn-outline-warning mr-3" onClick={props.stop} >Stop</button>
<button className="btn btn-outline-danger"  onClick={props.reset} >Reset</button>
</div>
:""
}
{(props.status ===2)?
<div>
<button className="btn btn-outline-success mr-3" onClick={props.resume} >Resume</button>
<button className="btn btn-outline-danger" onClick={props.reset} >Reset</button>
</div>
:""
}

</div>
</div>
 
 </>

}