config {
  type: "operations",
  schema: "zerobyte__us",
  hasOutput: true,
}

CREATE OR REPLACE FUNCTION ${self()}(s STRING)
  AS (
    IF(
      s IS NULL,
      NULL,
      ARRAY(
        SELECT AS STRUCT
          ${ref("zerobyte__us", "_not_null_int64_to_zerobyte")}(i) AS _
        FROM
          UNNEST(TO_CODE_POINTS(s)) AS i WITH OFFSET AS o
        ORDER BY
          o
      )
    )
  )
