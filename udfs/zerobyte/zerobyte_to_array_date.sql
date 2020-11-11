CREATE OR REPLACE FUNCTION zerobyte.ZEROBYTE_TO_ARRAY_DATE(a ARRAY< STRUCT< _ ARRAY< STRUCT< _ STRUCT<
INT64 > > > > >)
AS (
  ARRAY(
    SELECT
      zerobyte.ZEROBYTE_TO_DATE(_)
    FROM
      UNNEST(a) WITH OFFSET AS o
    ORDER BY o)
);
