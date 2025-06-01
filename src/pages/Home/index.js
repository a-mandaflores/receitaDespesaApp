import { useEffect, useState } from 'react';
import { Background } from "../Login/styles";
import Header from "../../components/Header";

export default function Home(){
  const [listBalance, setListBalance] = useState([]);
  const [dateMovements, setDateMovements] = useState(new Date())

    useEffect(()=>{
    let isActive = true;

    async function getMovements(){
      let dateFormated = format(dateMovements, 'dd/MM/yyyy');

      const balance = await api.get('/balance', {
        params:{
          date: dateFormated 
        }
      })

      if(isActive){
        setListBalance(balance.data);
      }
    }

    getMovements();

    return () => isActive = false;

  }, [])

    return(
        <Background>
            <Header title="Minha tela Home"/>
        </Background>
    )
}