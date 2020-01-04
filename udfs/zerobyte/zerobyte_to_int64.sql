CREATE OR REPLACE FUNCTION
  zerobyte.ZEROBYTE_TO_INT64(a ARRAY<STRUCT<_ STRUCT<INT64>>>)AS((
    SELECT
      SUM(
      IF
        (zerobyte.ZEROBYTE_TO_BOOL(_),
          0,
          1<<offset))
    FROM
      UNNEST(a) WITH OFFSET AS offset))