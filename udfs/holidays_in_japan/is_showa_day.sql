-- 昭和の日 四月二十九日
CREATE OR REPLACE FUNCTION holidays_in_japan.IS_SHOWA_DAY(d DATE)
AS (
  "2007-01-01" <= d AND EXTRACT(MONTH FROM d) = 4 AND EXTRACT(DAY FROM d) = 29
);