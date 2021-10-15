export const selectQuery =
`SELECT
  doc.ID,
  doc.NUMBER,
  doc.DOCUMENTDATE,
  c.GOODKEY,
  bl.QUANTITY,
  c.USR$INV_COSTNCU AS price
FROM gd_document doc
  LEFT JOIN usr$inv_sellbill b on b.DOCUMENTKEY = doc.ID
  LEFT JOIN usr$inv_sellbillline bl on bl.MASTERKEY = b.DOCUMENTKEY
  LEFT JOIN inv_card c on c.ID = bl.TOCARDKEY
WHERE doc.DOCUMENTDATE >= ?
  AND doc.DOCUMENTDATE <= ?
  AND doc.DOCUMENTTYPEKEY = <RUID XID = ""171879511"" DBID = ""242962778""/>
  AND doc.PARENT + 0 is null
  AND b.USR$BER_COMPANYKEY = ?
  AND c.GOODKEY = ?`;