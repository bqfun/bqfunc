config {
  type: "operations",
  schema: "zerobyte__us",
  hasOutput: true,
}

CREATE OR REPLACE FUNCTION ${self()}(f FLOAT64)
  RETURNS ARRAY<INT64>
  DETERMINISTIC
  LANGUAGE js
  AS "return Array.from(new Uint32Array(new Float64Array([f]).buffer))"
