CREATE OR REPLACE FUNCTION zerobyte._NOT_NULL_FLOAT64_TO_IEEE(f FLOAT64)
RETURNS ARRAY< INT64 > LANGUAGE js AS "return Array.from(new Uint32Array(new Float64Array([f]).buffer))";
