CREATE OR REPLACE FUNCTION
  zerobyte.INT64_TO_ZEROBYTE(i INT64)AS(
  IF
    (i IS NULL,
      NULL,
      ARRAY(
      SELECT
      IF
        (i&1<<u=0,
          STRUCT(NULL AS _),
          STRUCT(STRUCT(NULL AS _)AS _))
      FROM
        UNNEST(GENERATE_ARRAY(0, 63))u
      ORDER BY
        u)));