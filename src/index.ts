import { selectRecordSet } from "./selectService";
import { selectQuery, selectParams } from './sqlqueries/selectSellbill';
import { IRecordObject } from "./type";
import { arrParams } from "./util";

( async () => {
  const recordSet = await selectRecordSet<IRecordObject>( selectQuery, arrParams(selectParams));;
  if (recordSet) {
    for (const item  of recordSet ) {
      console.log(item.DOCUMENTDATE, item.NUMBER);
    } 
  }
} )();





