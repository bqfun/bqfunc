CREATE OR REPLACE FUNCTION zerobyte.ZEROBYTE_TO_ARRAY_FLOAT64(a ARRAY< STRUCT< _ ARRAY< STRUCT< _ ARRAY<
STRUCT< STRUCT< INT64 > > > > > > >)
AS (
  ARRAY(
    SELECT
      zerobyte.ZEROBYTE_TO_FLOAT64(_)
    FROM
      UNNEST(a) WITH OFFSET AS o
    ORDER BY o)
);
