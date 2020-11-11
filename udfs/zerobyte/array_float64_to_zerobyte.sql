CREATE OR REPLACE FUNCTION zerobyte.ARRAY_FLOAT64_TO_ZEROBYTE(a ARRAY< FLOAT64 >)
AS (
  ARRAY(
    SELECT AS STRUCT
      zerobyte.FLOAT64_TO_ZEROBYTE(f) AS _
    FROM
      UNNEST(a) AS f WITH OFFSET AS o
    ORDER BY o)
);
