import { useEffect, useState } from "react";
function useCurrency(currency) {
    const [data,setData]=useState({});
    const fetchData=async ()=>{
        const response = await fetch(
            `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
          );
          const Data = await response.json();
      
          setData(Data[currency]);
        //   console.log(data);
    }
  useEffect(() => {
   fetchData();
  }, [currency]);

  return data;
}

export default useCurrency;