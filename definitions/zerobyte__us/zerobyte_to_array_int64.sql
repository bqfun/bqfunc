config {
  type: "operations",
  schema: "zerobyte__us",
  hasOutput: true,
}

CREATE OR REPLACE FUNCTION ${self()}(a ARRAY<STRUCT<_ ARRAY<STRUCT<_ STRUCT<_ INT64>>>>>)
  AS (
    ARRAY(
      SELECT
        ${ref("zerobyte__us", "zerobyte_to_int64")}(_)
      FROM
        UNNEST(a) WITH OFFSET AS o
      ORDER BY
        o
    )
  )
