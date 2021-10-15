import 
  { Attachment, 
   createNativeClient,
   getDefaultLibraryFilename
  } from 'node-firebird-driver-native';

import { dbOptions } from './config/firebird';
import { ISelectParams } from './type';
import { selectQuery } from './sqlqueries/selectSellbill';

const client = createNativeClient(getDefaultLibraryFilename());

const attach = () => client.connect(
  `${dbOptions.server?.host}/${dbOptions.server?.port}:${dbOptions.path}`,
  {
    username: dbOptions.username,
    password: dbOptions.password,
  }
);

const selectRecordSet = async (query: string, params: ISelectParams, attachment: Attachment): Promise<any[][] | undefined> => {
  const tr = await attachment.startTransaction();
  try {
    try {
      const recordSet = await attachment.executeQuery(tr, query, params.data); 
      const rows = await recordSet.fetch();
      return rows;
    } catch (err) {
      console.error(err);
      await tr.rollback();
    }
  } finally {
    await tr.commit();
  }
};

