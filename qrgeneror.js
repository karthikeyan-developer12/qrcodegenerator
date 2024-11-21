import "./Qr.css" ;
import {useState} from 'react' ;


export const Qrcode = () => {
    const[qrdata,setqrdata]= useState("karthi");
    const[size,setsize]= useState("null");
    const[loading,setloading]=useState(false);
    const[img,setimg]=useState('first.png')
async function qrgenerator(){
     setloading(true);
    try
     {const url = `https://api.qrserver.com/v1/create-qr-code/?size=${encodeURIComponent(size)}x${encodeURIComponent(size)}&data=${encodeURIComponent(qrdata)}`;
     ;
        setimg(url)

    }
      catch(error){  
        console.log({error})
    }
        finally{
        setloading(false)
    }}
    const download = () =>{
         fetch(img).then((Response) => Response.blob()).then((blob) =>
        {
           const link=document.createElement("a");
           link.href=URL.createObjectURL(blob);
           link.download="new.file.png"
           document.body.appendChild(link)
           link.click()
           document.body.removeChild(link)
           URL.revokeObjectURL(blob)
           

        })
         

    }
    return(
    <>      
    {loading&&<p>loading ... please wait</p>}
     {img &&<img  className="image" src={img} alt="qrimage"></img>}
    <div className="qrapp" >
    
    <h1>QR GENERETOR</h1>
        <label for="name"><h2>ENTER YOUR NAME : </h2> </label>
        <input id="name" name="name"  placeholder="ENTER YOUR LINK" value={qrdata} onChange = {(e) => setqrdata(e.target.value)
        }></input>
        <label for="size" ><h2>ENTER QR SIZE : </h2></label>
        <input id="size" name="size" placeholder="ENTER YOUR size eg 150x150" onChange = {(e) => setsize(e.target.value) }></input>
        <div className="butt">
        <button className="button1" onClick={qrgenerator}>create Qr</button>
        <button className="button2" onClick={download}>download Qr</button>
        </div>
        
    </div>
    </>
    
    )

}