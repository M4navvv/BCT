import {useState} from "react";
import ABI from "./ABI.json";
import Web3 from "web3";
import './Wallet.css';

const Wallet =({saveState})=>{
      const [connected,setConnected]=useState(true);
      const init =async()=>{
      try{
            const web3 = new Web3(window.ethereum);
            await window.ethereum.request({method:'eth_requestAccounts'});
            const contract = new web3.eth.Contract(
                  ABI,
                  "0xB7C551002F84Dd5577fCA93CAeF6ed346Ca90E5f"
            );
            setConnected(false);
            saveState({web3:web3,contract:contract})
      }catch(error){
            alert("Please install Metamask");
      }
      }
 
      return<>
      <div className="header">
      {false  && <button className="connectBTN">
         <a href="https://metamask.app.link/dapp/sriche.netlify.app/">Click For Mobile</a>
        </button>  } 
       <button className="connectBTN" onClick={init} disabled={!connected}>{connected? "Connect Metamask":"connected"}</button>
      </div>
      </>
}
export default Wallet;