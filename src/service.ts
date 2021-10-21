import { attach } from "./connect"
import { IParams, IRecordObject } from './type';

export const selectRecordSet = async <T extends IRecordObject>(query: string, arrParams: IParams): Promise<T[] | undefined> => {
  try {
    const attachment = await attach();
    try {
      const tr = await attachment.startTransaction();
      let inTransaction = true;
      try {
        const recordSet = await attachment.executeQuery(tr, query, arrParams); 
          const rows = await recordSet.fetchAsObject<T>();
          await recordSet.close();
          return rows;
          } catch (err) {
              console.error(err);
              await tr.rollback();
              inTransaction = false;
          } finally {
              if (inTransaction) await tr.commit();
          }
      } finally {
        attachment.disconnect();
      }
    } catch (err) {
      console.error('База данных не доступна:', err);
    }
};

