
import React from 'react';
import Button from '@material-ui/core/Button';
import CardActionArea from "@material-ui/core/CardActionArea";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { connect } from 'react-redux';
import {kinkMaratonSaved} from  "../../store/action";
import { ButtonGroup } from '@material-ui/core';
import DialogGroup from './DialogGroup';
function PaperComponent(props) {
  return (
    <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}
//choose kind maraton 
const Kind = (props) => {
    const mainDiv={
        marginLeft:"50px"
    }
    const mystyle1 = {
        color: "black",
        backgroundColor: "white",
        fontFamily: "Arial",
         height:"285px",
        width:"15%",
        float:"left",
        margin:"20px",
        left:"20px",
        to:"50%",
        borderTop:"#DCDCDC solid 1px",
        borderLeft:"#DCDCDC solid 1px",
        padding:"10px",
        shadows:"5px 10px",
        boxShadow:"3px 5px 3px 1px #6495ED",
  
      };
      const mystyle2 = {
        color: "black",
        backgroundColor: "white",
        fontFamily: "Arial",
         height:"285px",
        width:"15%",
        float:"left",
        margin:"20px",
        left:"20px",
        to:"50%",
        borderTop:"#DCDCDC solid 1px",
        borderLeft:"#DCDCDC solid 1px",
        padding:"10px",
        shadows:"5px 10px",
        boxShadow:"3px 5px 3px 1px #CD5C5C",
  
      };
      const mystyle3 = {
        color: "black",
        backgroundColor: "white",
        fontFamily: "Arial",
         height:"285px",
        width:"15%",
        float:"left",
        margin:"20px",
        left:"20px",
        to:"50%",
        borderTop:"#DCDCDC solid 1px",
        borderLeft:"#DCDCDC solid 1px",
        padding:"10px",
        shadows:"5px 10px",
        boxShadow:"3px 5px 3px 1px #66bb6a",
  
      };
      const mystyle4 = {
        color: "black",
        backgroundColor: "white",
        fontFamily: "Arial",
         height:"285px",
        width:"15%",
        float:"left",
        margin:"20px",
        left:"20px",
        to:"50%",
        borderTop:"#DCDCDC solid 1px",
        borderLeft:"#DCDCDC solid 1px",
        padding:"10px",
        shadows:"5px 10px",
        boxShadow:"3px 5px 3px 1px #cc9900",
  
      };
      const mystyle5 = {
        color: "black",
        backgroundColor: "white",
        fontFamily: "Arial",
         height:"285px",
        width:"15%",
        float:"left",
        margin:"20px",
        left:"20px",
        to:"50%",
        borderTop:"#DCDCDC solid 1px",
        borderLeft:"#DCDCDC solid 1px",
        padding:"10px",
        shadows:"5px 10px",
        boxShadow:"3px 5px 3px 1px #DDA0DD",
      
       
      };
      const [open, setOpen] = React.useState(false);
      //open dialog if selected family race
      const handleClickOpen = () => {
        setOpen(true);
        
      };
      //close the dialog
      const handleClose = () => {
        setOpen(false);
      };
      
      //moove to next page and move forward with the stepper
      const handleContinue=()=>{
        props.handleNext();
        // props.runAStep(2);
        
      }    
      //sending the selected track to the redux
      const chooseKindMaraton=(kindMaraton)=>{
       
       props.kinkMaratonSaved(kindMaraton)
        props.handleNext()
      }
      //select num users selected choose family race
      const selectNumUsers=(e)=>{
        let price
        const num=e.target.value;
        switch(num){
          case(num>=2&&num<=4):{
            price=100
            break
          }
          case 5:{
            price=125
            break
          }
          default:{
            price=150 
          }
 
        }
        props.kinkMaratonSaved({length:'מרוץ משפחות',price:price,numUsers:num,sum:price*num})
      }

    return ( <div style={{marginTop:"50"}}>
      <ButtonGroup>
        <DialogGroup />
     
      <Button variant="contained"style={{backgroundColor:"#000066",color:"white"}}>
        הרשמה ליחיד
      </Button></ButtonGroup>
        <h3>ההרשמה למרתון ווינר ירושלים ה 10 תיסגר בתאריך ה 29 לאוקטובר 2020 בחצות</h3>
        <div style={mainDiv}>
            <CardActionArea style={mystyle1}>
                <h3>מרתון 42.195 ק"מ</h3>
                <h4>280 ₪ </h4>
                
                <Button onClick={()=>{chooseKindMaraton({length:'מרתון 42.195 ק"מ',price:280,numUsers:1,sum:280})}}   style={{
                        backgroundColor: "#6495ED",
                        padding: "5% 8%",
                        fontSize: "90%",
                        marginTop:"60%"
                    }} variant="contained" >הרשם עכשיו
                </Button> 
            </CardActionArea>
            <CardActionArea style={mystyle2}>
            <h3>חצי מרתון 21.1 ק"מ</h3>
            
            <h4>220 ₪</h4>
            <Button  onClick={()=>{chooseKindMaraton({length:'חצי מרתון 21.1 ק"מ',price:220,numUsers:1,sum:220})}}  style={{
                        backgroundColor: "#cc0000",
                        padding: "5% 8%",
                        fontSize: "90%",
                        marginTop:"60%"
                    }} variant="contained" >הרשם עכשיו
                </Button>
            </CardActionArea>
            <CardActionArea style={mystyle3}> 
                 <h3>ק"מ 10</h3>
                 <h4>180 ₪ </h4>
                 <Button onClick={()=>{chooseKindMaraton({length:'ק"מ 10',price:180,numUsers:1,sum:180})}} value={'ק"מ 10'} style={{
                        backgroundColor: "#66bb6a",
                        padding: "5% 8%",
                        fontSize: "90%",
                        marginTop:"60%"
                    }} variant="contained" >הרשם עכשיו
                </Button>
            </CardActionArea>
            <CardActionArea style={mystyle4}>
                <h3>5 ק"מ</h3>
                <h4>110 ₪ </h4>
                <Button  onClick={()=>{chooseKindMaraton({length:'5 ק"מ',price:110,numUsers:1,sum:110})}} value={'5 ק"מ'} style={{
                        backgroundColor: "#cc9900",
                        padding: "5% 8%",
                        fontSize: "90%",
                        marginTop:"60%"
                    }} variant="contained" >הרשם עכשיו
                </Button>
            </CardActionArea>
            <CardActionArea style={mystyle5} className="MuiGrid-root MuiGrid-item" > 
               <h3 fontSize="sans-serif">מרוץ משפחות</h3>
               <div >
               <p> 2-4 משתתפים 100  ₪</p>
               <p> 5 משתתפים 125 ₪ </p>
               <p>6 משתתפים 150 ₪ </p>
               </div>
                
         <Button variant="outlined" color="primary"  value={'מרוץ משפחות'} onClick={handleClickOpen}  style={{
                        backgroundColor: "#DDA0DD",
                        padding: "5% 8%",
                        fontSize: "90%",
                        marginTop:"27%"
                    }}
                    //  variant="contained"
                      >
         הרשם עכשיו
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move',textAlign:"rtl" }} id="draggable-dialog-title">
        יש למלא את פרטי ראש המשפחה הנרשמת בלבד
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={{direction:"rtl" ,textAlign:"right"}}> 
          <p> 2-4 משתתפים 100  ₪</p>
          <p> 5 משתתפים 125 ₪ </p>
          <p>6 משתתפים 150 ₪ </p>
         
          </DialogContentText>
          <FormControl style={{direction:"rtl" ,textAlign:"right",width:"60%",marginLeft:"40%"}}>
        <InputLabel htmlFor="grouped-native-select">אנא בחר מספר משתתפים</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" onClick={selectNumUsers}>
          <option aria-label="None" value="" />
          <optgroup >
            <option value={1}>1 </option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
          </optgroup>
         
        </Select>
      </FormControl>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleContinue} color="primary">
            המשך
          </Button>
          <Button onClick={handleClose} color="primary">
            חזור
          </Button>
        </DialogActions>
      </Dialog>
              </CardActionArea>
            <CardActionArea>
           
             </CardActionArea>
            </div>
  </div>
);
      
}
const mapDispachToProps=(dispach)=>{
  return {
    
  } ;
}
  export default connect(mapDispachToProps,{kinkMaratonSaved})( Kind);


