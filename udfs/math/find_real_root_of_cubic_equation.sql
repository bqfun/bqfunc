CREATE OR REPLACE FUNCTION
  math.find_real_root_of_cubic_equation(a BIGNUMERIC,
    b BIGNUMERIC,
    c BIGNUMERIC,
    d BIGNUMERIC)AS(math.cbrt(SQRT(POW(-27 * a * a * d + 9 * a * b * c - 2 * b * b * b, 2) + 4 * POW(3 * a * c - b* b, 3)) - 27 * a * a* d + 9 * a * b * c - 2 * b * b * b) / (3 * math.cbrt(2) * a) - (math.cbrt(2) * (3 * a * c - b * b)) / (3 * a * math.cbrt(SQRT(POW(-27 * a * a * d + 9 * a * b * c - 2 * b * b * b, 2) + 4 * POW(3 * a * c - b * b, 3)) - 27 * a * a * d + 9 * a * b * c - 2 * b * b * b)) - b / (3 * a));
