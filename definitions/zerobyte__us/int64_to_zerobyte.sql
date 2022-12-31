config {
  type: "operations",
  schema: "zerobyte__us",
  hasOutput: true,
}

CREATE OR REPLACE FUNCTION ${self()}(i INT64)
  AS (
    IF(
      i IS NULL,
      NULL,
      ARRAY(
        SELECT AS STRUCT
          IF(i & 1 << o = 0, NULL, STRUCT(NULL AS _)) AS _
        FROM
          UNNEST(GENERATE_ARRAY(0, 63)) AS o
        ORDER BY
          o
      )
    )
  )
