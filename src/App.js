import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import Calendar from 'react-calendar';
const App = () => {
  const [seldate,setseldate] = useState(new Date);
  console.log("seleted date",seldate);
  return (
    <>
    
    <div style={{fontSize:'40px',textAlign:'center',marginTop:'80px',fontWeight:'550',color:'#13bd57'}}>
      Calendar in React.js
    </div>

    <div style={{display:'flex',justifyContent:'center',marginTop:'33px'}}>
    <Calendar onChange={(data)=>{setseldate(data)}} value={seldate}  />
    </div>
    </>
  )
}

export default App