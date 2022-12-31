config {
  type: "operations",
  schema: "zerobyte__us",
  hasOutput: true,
}

CREATE OR REPLACE FUNCTION ${self()}(a ARRAY<INT64>)
  AS (
    ARRAY(
      SELECT AS STRUCT
        ${ref("zerobyte__us", "int64_to_zerobyte")}(i) AS _
      FROM
        UNNEST(a) AS i WITH OFFSET AS o
      ORDER BY
        o
    )
  )
