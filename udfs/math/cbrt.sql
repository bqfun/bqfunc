CREATE OR REPLACE FUNCTION math.cbrt(x BIGNUMERIC)
AS (
  `IF`(x < 0, - POW(- x, 1 / 3), POW(x, 1 / 3))
);
