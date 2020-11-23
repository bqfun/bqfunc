-- 国民の休日
CREATE OR REPLACE FUNCTION holidays_in_japan.IS_KOKUMIN_NO_KYUJITSU(d DATE)
AS (
  "1985-12-27" <= d AND EXTRACT(DAYOFWEEK FROM d) <> 1 AND (holidays_in_japan.IS_NEW_YEARS_DAY(d - 1) OR
  holidays_in_japan.IS_COMING_OF_AGE_DAY(d - 1) OR holidays_in_japan.IS_NATIONAL_FOUNDATION_DAY(d - 1) OR
  holidays_in_japan.IS_EMPERORS_BIRTHDAY(d - 1) OR holidays_in_japan.IS_VERNAL_EQUINOX_DAY(d - 1) OR holidays_in_japan.IS_SHOWA_DAY(d -
    1) OR holidays_in_japan.IS_CONSTITUTION_MEMORIAL_DAY(d - 1) OR holidays_in_japan.IS_GREENERY_DAY(d -
    1) OR holidays_in_japan.IS_CHILDRENS_DAY(d - 1) OR holidays_in_japan.IS_MARINE_DAY(d - 1) OR holidays_in_japan.IS_MOUNTAIN_DAY(d -
    1) OR holidays_in_japan.IS_RESPECT_FOR_THE_AGED_DAY(d - 1) OR holidays_in_japan.IS_AUTUMNAL_EQUINOX_DAY(d -
    1) OR holidays_in_japan.IS_HEALTH_SPORTS_DAY(d - 1) OR holidays_in_japan.IS_SPORTS_DAY(d - 1) OR holidays_in_japan.IS_CULTURE_DAY(d -
    1) OR holidays_in_japan.IS_LABOUR_THANKSGIVING_DAY(d - 1) OR holidays_in_japan.EXTRA_HOLIDAY_NAME_IF_HOLIDAY(d -
    1) IS NOT NULL) AND (holidays_in_japan.IS_NEW_YEARS_DAY(d + 1) OR holidays_in_japan.IS_COMING_OF_AGE_DAY(d +
    1) OR holidays_in_japan.IS_NATIONAL_FOUNDATION_DAY(d + 1) OR holidays_in_japan.IS_EMPERORS_BIRTHDAY(d +
    1) OR holidays_in_japan.IS_VERNAL_EQUINOX_DAY(d + 1) OR holidays_in_japan.IS_SHOWA_DAY(d + 1) OR holidays_in_japan.IS_CONSTITUTION_MEMORIAL_DAY(d +
    1) OR holidays_in_japan.IS_GREENERY_DAY(d + 1) OR holidays_in_japan.IS_CHILDRENS_DAY(d + 1) OR holidays_in_japan.IS_MARINE_DAY(d +
    1) OR holidays_in_japan.IS_MOUNTAIN_DAY(d + 1) OR holidays_in_japan.IS_RESPECT_FOR_THE_AGED_DAY(d + 1) OR
  holidays_in_japan.IS_AUTUMNAL_EQUINOX_DAY(d + 1) OR holidays_in_japan.IS_HEALTH_SPORTS_DAY(d + 1) OR
  holidays_in_japan.IS_SPORTS_DAY(d + 1) OR holidays_in_japan.IS_CULTURE_DAY(d + 1) OR holidays_in_japan.IS_LABOUR_THANKSGIVING_DAY(d +
    1) OR holidays_in_japan.EXTRA_HOLIDAY_NAME_IF_HOLIDAY(d + 1) IS NOT NULL)
);
