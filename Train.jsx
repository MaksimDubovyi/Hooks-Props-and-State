
function Train(props) 
{
    return (
        <div style={{margin:'50px'}}>
           <p style={{fontSize:'45px', textAlign:'center'}}>Список команд</p>
          {props.data.map(function (club) {
           return <h1>{club}</h1>;
          })}
         </div>
           );
       

}