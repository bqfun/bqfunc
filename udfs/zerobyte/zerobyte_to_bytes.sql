CREATE OR REPLACE FUNCTION
  zerobyte.ZEROBYTE_TO_BYTES(a ARRAY<STRUCT<_ ARRAY<STRUCT<STRUCT<INT64>>>>>)AS(
  IF
    (a IS NULL,
      NULL,
      CODE_POINTS_TO_BYTES(ARRAY(
        SELECT
          zerobyte._NOT_NULL_ZEROBYTE_TO_INT64(_)
        FROM
          UNNEST(a)
        WITH
        OFFSET
          AS o
        ORDER BY
          o))))