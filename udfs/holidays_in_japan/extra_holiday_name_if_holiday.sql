CREATE OR REPLACE FUNCTION holidays_in_japan.EXTRA_HOLIDAY_NAME_IF_HOLIDAY(d DATE)
AS (
  CASE d
    WHEN "1959-04-10" THEN "皇太子・明仁親王の結婚の儀"
    WHEN "1989-02-24" THEN "昭和天皇の大喪の礼"
    WHEN "1990-11-12" THEN "即位の礼正殿の儀"
    WHEN "1993-06-09" THEN "皇太子・皇太子徳仁親王の結婚の儀"
    WHEN "2019-05-01" THEN "天皇の即位の日"
    WHEN "2019-10-22" THEN "即位礼正殿の儀"
  END
);
