function MyDog(props) 
{
  const [name, setName] = React.useState(props.data.name);
  const [year, setYear] = React.useState(props.data.year);
  const [city, setCity] = React.useState(props.data.city);
  const [Training, setTraining] = React.useState(props.data.Training);

  return (
<div>
<h3>«Домашний любимец»</h3>

<div className="row">
 <div className="col-md-12"> 
   <div className="row">
     <div className="col-md-4 ">
        <div ><Train data={Training}/></div>
     </div> 
    <div className="col-md-4">

    <div class="row" style={{textAlign:'center', marginTop:'70px'  }}>
      <div class="col-md-11" style={{marginLeft:'0px',marginTop:'50px'}}>
      <h2>Кличка -  {name}</h2>
      <h2>День рождения - {year}</h2>
      <h2>Проживает - {city}</h2>
      <h2>Порода - Доберман</h2>
      </div> 
      </div>
      
     
   </div>
   <div className="col-md-4" >
      <div><img className="IMGS" style={{ marginTop:'50px', marginLeft:'-50px',  width:'600px', height:'700px'}} src={"img/11.jpg"}></img></div>
     </div>

     <div className="col-md-3" >
      <div><img className="IMGS" style={{marginLeft:'25px', marginTop:'25px',  width:'300px', height:'400px'}} src={"img/01.jpg"}></img></div>
     </div>

     <div className="col-md-3" >
      <div><img className="IMGS" style={{marginLeft:'25px', marginTop:'25px',  width:'300px', height:'400px'}} src={"img/02.jpg"}></img></div>
     </div>

     <div className="col-md-3" >
      <div><img className="IMGS" style={{marginLeft:'25px', marginTop:'25px',  width:'300px', height:'400px'}} src={"img/03.jpg"}></img></div>
     </div>

     <div className="col-md-3" >
      <div><img className="IMGS" style={{marginLeft:'25px', marginTop:'25px',  width:'300px', height:'400px'}} src={"img/04.jpg"}></img></div>
     </div>

     <div className="col-md-3" >
      <div><img className="IMGS" style={{marginLeft:'25px', marginTop:'25px',  width:'300px', height:'400px'}} src={"img/05.jpg"}></img></div>
     </div>

     <div className="col-md-3" >
      <div><img className="IMGS" style={{marginLeft:'25px', marginTop:'25px',  width:'300px', height:'400px'}} src={"img/06.jpg"}></img></div>
     </div>

     <div className="col-md-3" >
      <div><img className="IMGS" style={{marginLeft:'25px', marginTop:'25px',  width:'300px', height:'400px'}} src={"img/07.jpg"}></img></div>
     </div>

     <div className="col-md-3" >
      <div><img className="IMGS" style={{marginLeft:'25px', marginTop:'25px',  width:'300px', height:'400px'}} src={"img/08.jpg"}></img></div>
     </div>

     <div className="col-md-3" >
      <div><img className="IMGS" style={{marginLeft:'25px', marginTop:'25px',  width:'300px', height:'400px'}} src={"img/09.jpg"}></img></div>
     </div>

     <div className="col-md-3" >
      <div><img className="IMGS" style={{marginLeft:'25px', marginTop:'25px',  width:'300px', height:'400px'}} src={"img/10.jpg"}></img></div>
     </div>



     <div className="col-md-3" >
      <div><img className="IMGS" style={{marginLeft:'25px', marginTop:'25px',  width:'300px', height:'400px'}} src={"img/11.jpg"}></img></div>
     </div>

     <div className="col-md-3" >
      <div><img className="IMGS" style={{marginLeft:'25px', marginTop:'25px',  width:'300px', height:'400px'}} src={"img/12.jpg"}></img></div>
     </div>

     <div className="col-md-3" >
      <div><img className="IMGS" style={{marginLeft:'25px', marginTop:'25px',  width:'300px', height:'400px'}} src={"img/13.jpg"}></img></div>
     </div>

     <div className="col-md-3" >
      <div><img className="IMGS" style={{marginLeft:'25px', marginTop:'25px',  width:'300px', height:'400px'}} src={"img/14.jpg"}></img></div>
     </div>

     <div className="col-md-3" >
      <div><img className="IMGS" style={{marginLeft:'25px', marginTop:'25px',  width:'300px', height:'400px'}} src={"img/15.jpg"}></img></div>
     </div>

     <div className="col-md-3" >
      <div><img className="IMGS" style={{marginLeft:'25px', marginTop:'25px',  width:'300px', height:'400px'}} src={"img/16.jpg"}></img></div>
     </div>

     <div className="col-md-3" >
      <div><img className="IMGS" style={{marginLeft:'25px', marginTop:'25px',  width:'300px', height:'400px'}} src={"img/17.jpg"}></img></div>
     </div>
 </div>
 </div>
 </div>
      </div>

);
}