export const selectQuery =
  `EXECUTE BLOCK (DATEBEGIN DATE = ?,
    DATEEND DATE = ?, CONTACT INTEGER = ?,
    GOODKEY INTEGER = ?)
  RETURNS(
    ID VARCHAR(40),
    NUMBER VARCHAR(40),
    DOCUMENTDATE DATE,
    CONTRACT VARCHAR(60),
    QUANTITY NUMERIC(15,4),
    PRICE NUMERIC(15,4))
  AS
  DECLARE VARIABLE DT INTEGER;
  BEGIN
  SELECT R.ID FROM GD_RUID R
  WHERE R.XID = 171879511 AND R.DBID = 242962778 INTO :DT;
  FOR SELECT
    doc.ID,
    doc.NUMBER,
    doc.DOCUMENTDATE,
    contract.NUMBER || ' от ' || contract.DOCUMENTDATE AS contract,
    bl.QUANTITY,
    c.USR$INV_COSTNCU AS PRICE
  FROM gd_document doc
    LEFT JOIN usr$inv_sellbill b ON b.DOCUMENTKEY = doc.ID
    LEFT JOIN gd_document contract ON contract.ID  =  b.USR$BER_CONTRACT
    LEFT JOIN usr$inv_sellbillline bl ON bl.MASTERKEY = b.DOCUMENTKEY
    LEFT JOIN inv_card c ON c.ID = bl.TOCARDKEY
  WHERE doc.DOCUMENTDATE >= :datebegin
    AND doc.DOCUMENTDATE <= :dateend
    AND doc.DOCUMENTTYPEKEY = :dt
    AND doc.PARENT + 0 is null
    AND b.USR$BER_COMPANYKEY = :contact
    AND c.GOODKEY = :goodkey INTO
    :ID, :NUMBER, :DOCUMENTDATE, :CONTRACT, :QUANTITY, :PRICE DO
    BEGIN
      SUSPEND;
    END
  END`;

/*export const selectParams: ISelectParams = 
  {  
    datebegin: '2021-05-06',
    dateend:'2021-05-27',
    outletId: '897229164',
    goodId: '1779690976',
  }*/


 
