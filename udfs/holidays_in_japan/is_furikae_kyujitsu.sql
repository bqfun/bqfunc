CREATE OR REPLACE FUNCTION holidays_in_japan.IS_FURIKAE_KYUJITSU(d DATE)
AS (
  "1973-04-12" <= d AND NOT holidays_in_japan.IS_NEW_YEARS_DAY(d) AND NOT holidays_in_japan.IS_COMING_OF_AGE_DAY(d) AND
  NOT holidays_in_japan.IS_NATIONAL_FOUNDATION_DAY(d) AND NOT holidays_in_japan.IS_EMPERORS_BIRTHDAY(d) AND
  NOT holidays_in_japan.IS_VERNAL_EQUINOX_DAY(d) AND NOT holidays_in_japan.IS_SHOWA_DAY(d) AND NOT holidays_in_japan.IS_CONSTITUTION_MEMORIAL_DAY(d) AND
  NOT holidays_in_japan.IS_GREENERY_DAY(d) AND NOT holidays_in_japan.IS_CHILDRENS_DAY(d) AND NOT holidays_in_japan.IS_MARINE_DAY(d) AND
  NOT holidays_in_japan.IS_MOUNTAIN_DAY(d) AND NOT holidays_in_japan.IS_RESPECT_FOR_THE_AGED_DAY(d) AND
  NOT holidays_in_japan.IS_AUTUMNAL_EQUINOX_DAY(d) AND NOT holidays_in_japan.IS_HEALTH_SPORTS_DAY(d) AND
  NOT holidays_in_japan.IS_SPORTS_DAY(d) AND NOT holidays_in_japan.IS_CULTURE_DAY(d) AND NOT holidays_in_japan.IS_LABOUR_THANKSGIVING_DAY(d) AND
  holidays_in_japan.EXTRA_HOLIDAY_NAME_IF_HOLIDAY(d) IS NULL AND (
    SELECT
      IFNULL(LOGICAL_AND (holidays_in_japan.IS_NEW_YEARS_DAY(day) OR holidays_in_japan.IS_COMING_OF_AGE_DAY(day) OR
          holidays_in_japan.IS_NATIONAL_FOUNDATION_DAY(day) OR holidays_in_japan.IS_EMPERORS_BIRTHDAY(day) OR holidays_in_japan.IS_VERNAL_EQUINOX_DAY(day) OR
          holidays_in_japan.IS_SHOWA_DAY(day) OR holidays_in_japan.IS_CONSTITUTION_MEMORIAL_DAY(day) OR holidays_in_japan.IS_GREENERY_DAY(day) OR
          holidays_in_japan.IS_CHILDRENS_DAY(day) OR holidays_in_japan.IS_MARINE_DAY(day) OR holidays_in_japan.IS_MOUNTAIN_DAY(day) OR
          holidays_in_japan.IS_RESPECT_FOR_THE_AGED_DAY(day) OR holidays_in_japan.IS_AUTUMNAL_EQUINOX_DAY(day) OR
          holidays_in_japan.IS_HEALTH_SPORTS_DAY(day) OR holidays_in_japan.IS_SPORTS_DAY(day) OR holidays_in_japan.IS_CULTURE_DAY(day) OR
          holidays_in_japan.IS_LABOUR_THANKSGIVING_DAY(day) OR holidays_in_japan.EXTRA_HOLIDAY_NAME_IF_HOLIDAY(day) IS NOT NULL),
        FALSE)
    FROM
      UNNEST(GENERATE_DATE_ARRAY(d + 1 - EXTRACT(DAYOFWEEK FROM d), d - 1)) AS day
  )
);
