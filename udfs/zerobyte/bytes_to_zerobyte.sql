CREATE OR REPLACE FUNCTION
  zerobyte.STRING_TO_ZEROBYTE(b BYTES)AS(
  IF
    (b IS NULL,
      NULL,
      ARRAY(
      SELECT
        AS STRUCT zerobyte._NOT_NULL_INT64_TO_ZEROBYTE(i)_
      FROM
        UNNEST(TO_CODE_POINTS(b))i
      WITH
      OFFSET
        AS o
      ORDER BY
        o)))