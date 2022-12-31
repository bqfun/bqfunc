config {
  type: "operations",
  schema: "zerobyte__us",
  hasOutput: true,
}

CREATE OR REPLACE FUNCTION ${self()}(a ARRAY<STRUCT<_ STRUCT<_ INT64>>>)
  AS (
    (
      SELECT
        SUM(IF(_ IS NULL, 0, 1 << o))
      FROM
        UNNEST(a) WITH OFFSET AS o
    )
  )
