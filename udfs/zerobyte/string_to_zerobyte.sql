CREATE OR REPLACE FUNCTION
  zerobyte.STRING_TO_ZEROBYTE(s STRING)AS(
  IF
    (s IS NULL,
      NULL,
      ARRAY(
      SELECT
        AS STRUCT zerobyte._NOT_NULL_INT64_TO_ZEROBYTE(i)_
      FROM
        UNNEST(TO_CODE_POINTS(s))i
      WITH
      OFFSET
        AS o
      ORDER BY
        o)))