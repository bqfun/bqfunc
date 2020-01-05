CREATE OR REPLACE FUNCTION
  zerobyte.INT64_TO_ZEROBYTE(i INT64)AS(
  IF
    (i IS NULL,
      NULL,
      ARRAY(
      SELECT
        AS STRUCT
      IF
        (i&1<<o=0,
          NULL,
          STRUCT(NULL AS _))_
      FROM
        UNNEST(GENERATE_ARRAY(0, 63))o
      ORDER BY
        o)));