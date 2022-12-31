config {
  type: "operations",
  schema: "zerobyte__us",
  hasOutput: true,
}

CREATE OR REPLACE FUNCTION ${self()}(a ARRAY<STRUCT<_ ARRAY<STRUCT<STRUCT<INT64>>>>>)
  AS (
    IF(
      a IS NULL,
      NULL,
      CODE_POINTS_TO_BYTES(
        ARRAY(
          SELECT
            ${ref("zerobyte__us", "_not_null_zerobyte_to_int64")}(_)
          FROM
            UNNEST(a) WITH OFFSET AS o
          ORDER BY
            o
        )
      )
    )
  )
