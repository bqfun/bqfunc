const {generate_udf_test} = unit_test_utils;

generate_udf_test("holiday_name", [
    {
        inputs: [`DATE "1955-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1955-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1955-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1955-04-29"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1955-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1955-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1955-09-24"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1955-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1955-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1956-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1956-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1956-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1956-04-29"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1956-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1956-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1956-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1956-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1956-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1957-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1957-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1957-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1957-04-29"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1957-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1957-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1957-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1957-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1957-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1958-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1958-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1958-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1958-04-29"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1958-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1958-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1958-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1958-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1958-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1959-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1959-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1959-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1959-04-10"`],
        expected_output: `"結婚の儀"`
    },
    {
        inputs: [`DATE "1959-04-29"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1959-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1959-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1959-09-24"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1959-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1959-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1960-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1960-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1960-03-20"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1960-04-29"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1960-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1960-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1960-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1960-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1960-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1961-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1961-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1961-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1961-04-29"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1961-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1961-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1961-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1961-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1961-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1962-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1962-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1962-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1962-04-29"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1962-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1962-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1962-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1962-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1962-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1963-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1963-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1963-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1963-04-29"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1963-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1963-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1963-09-24"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1963-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1963-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1964-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1964-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1964-03-20"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1964-04-29"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1964-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1964-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1964-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1964-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1964-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1965-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1965-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1965-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1965-04-29"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1965-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1965-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1965-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1965-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1965-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1966-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1966-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1966-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1966-04-29"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1966-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1966-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1966-09-15"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "1966-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1966-10-10"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "1966-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1966-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1967-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1967-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1967-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "1967-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1967-04-29"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1967-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1967-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1967-09-15"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "1967-09-24"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1967-10-10"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "1967-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1967-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1968-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1968-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1968-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "1968-03-20"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1968-04-29"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1968-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1968-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1968-09-15"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "1968-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1968-10-10"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "1968-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1968-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1969-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1969-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1969-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "1969-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1969-04-29"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1969-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1969-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1969-09-15"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "1969-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1969-10-10"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "1969-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1969-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1970-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1970-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1970-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "1970-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1970-04-29"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1970-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1970-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1970-09-15"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "1970-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1970-10-10"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "1970-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1970-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1971-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1971-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1971-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "1971-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1971-04-29"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1971-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1971-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1971-09-15"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "1971-09-24"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1971-10-10"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "1971-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1971-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1972-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1972-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1972-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "1972-03-20"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1972-04-29"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1972-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1972-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1972-09-15"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "1972-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1972-10-10"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "1972-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1972-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1973-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1973-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1973-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "1973-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1973-04-29"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1973-04-30"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1973-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1973-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1973-09-15"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "1973-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1973-09-24"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1973-10-10"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "1973-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1973-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1974-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1974-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1974-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "1974-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1974-04-29"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1974-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1974-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1974-05-06"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1974-09-15"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "1974-09-16"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1974-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1974-10-10"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "1974-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1974-11-04"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1974-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1975-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1975-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1975-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "1975-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1975-04-29"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1975-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1975-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1975-09-15"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "1975-09-24"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1975-10-10"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "1975-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1975-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1975-11-24"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1976-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1976-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1976-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "1976-03-20"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1976-04-29"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1976-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1976-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1976-09-15"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "1976-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1976-10-10"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "1976-10-11"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1976-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1976-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1977-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1977-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1977-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "1977-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1977-04-29"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1977-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1977-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1977-09-15"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "1977-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1977-10-10"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "1977-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1977-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1978-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1978-01-02"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1978-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1978-01-16"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1978-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "1978-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1978-04-29"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1978-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1978-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1978-09-15"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "1978-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1978-10-10"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "1978-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1978-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1979-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1979-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1979-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "1979-02-12"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1979-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1979-04-29"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1979-04-30"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1979-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1979-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1979-09-15"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "1979-09-24"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1979-10-10"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "1979-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1979-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1980-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1980-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1980-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "1980-03-20"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1980-04-29"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1980-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1980-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1980-09-15"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "1980-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1980-10-10"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "1980-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1980-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1980-11-24"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1981-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1981-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1981-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "1981-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1981-04-29"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1981-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1981-05-04"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1981-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1981-09-15"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "1981-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1981-10-10"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "1981-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1981-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1982-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1982-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1982-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "1982-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1982-03-22"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1982-04-29"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1982-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1982-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1982-09-15"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "1982-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1982-10-10"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "1982-10-11"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1982-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1982-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1983-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1983-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1983-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "1983-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1983-04-29"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1983-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1983-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1983-09-15"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "1983-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1983-10-10"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "1983-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1983-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1984-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1984-01-02"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1984-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1984-01-16"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1984-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "1984-03-20"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1984-04-29"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1984-04-30"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1984-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1984-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1984-09-15"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "1984-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1984-09-24"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1984-10-10"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "1984-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1984-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1985-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1985-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1985-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "1985-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1985-04-29"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1985-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1985-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1985-05-06"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1985-09-15"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "1985-09-16"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1985-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1985-10-10"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "1985-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1985-11-04"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1985-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1986-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1986-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1986-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "1986-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1986-04-29"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1986-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1986-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1986-09-15"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "1986-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1986-10-10"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "1986-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1986-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1986-11-24"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1987-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1987-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1987-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "1987-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1987-04-29"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1987-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1987-05-04"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1987-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1987-09-15"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "1987-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1987-10-10"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "1987-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1987-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1988-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1988-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1988-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "1988-03-20"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1988-03-21"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1988-04-29"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1988-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1988-05-04"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1988-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1988-09-15"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "1988-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1988-10-10"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "1988-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1988-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1989-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1989-01-02"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1989-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1989-01-16"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1989-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "1989-02-24"`],
        expected_output: `"大喪の礼"`
    },
    {
        inputs: [`DATE "1989-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1989-04-29"`],
        expected_output: `"みどりの日"`
    },
    {
        inputs: [`DATE "1989-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1989-05-04"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1989-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1989-09-15"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "1989-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1989-10-10"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "1989-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1989-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1989-12-23"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1990-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1990-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1990-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "1990-02-12"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1990-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1990-04-29"`],
        expected_output: `"みどりの日"`
    },
    {
        inputs: [`DATE "1990-04-30"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1990-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1990-05-04"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1990-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1990-09-15"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "1990-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1990-09-24"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1990-10-10"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "1990-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1990-11-12"`],
        expected_output: `"即位礼正殿の儀"`
    },
    {
        inputs: [`DATE "1990-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1990-12-23"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1990-12-24"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1991-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1991-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1991-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "1991-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1991-04-29"`],
        expected_output: `"みどりの日"`
    },
    {
        inputs: [`DATE "1991-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1991-05-04"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1991-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1991-05-06"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1991-09-15"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "1991-09-16"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1991-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1991-10-10"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "1991-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1991-11-04"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1991-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1991-12-23"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1992-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1992-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1992-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "1992-03-20"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1992-04-29"`],
        expected_output: `"みどりの日"`
    },
    {
        inputs: [`DATE "1992-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1992-05-04"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1992-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1992-09-15"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "1992-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1992-10-10"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "1992-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1992-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1992-12-23"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1993-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1993-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1993-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "1993-03-20"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1993-04-29"`],
        expected_output: `"みどりの日"`
    },
    {
        inputs: [`DATE "1993-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1993-05-04"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1993-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1993-06-09"`],
        expected_output: `"結婚の儀"`
    },
    {
        inputs: [`DATE "1993-09-15"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "1993-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1993-10-10"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "1993-10-11"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1993-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1993-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1993-12-23"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1994-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1994-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1994-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "1994-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1994-04-29"`],
        expected_output: `"みどりの日"`
    },
    {
        inputs: [`DATE "1994-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1994-05-04"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1994-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1994-09-15"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "1994-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1994-10-10"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "1994-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1994-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1994-12-23"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1995-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1995-01-02"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1995-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1995-01-16"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1995-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "1995-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1995-04-29"`],
        expected_output: `"みどりの日"`
    },
    {
        inputs: [`DATE "1995-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1995-05-04"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1995-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1995-09-15"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "1995-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1995-10-10"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "1995-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1995-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1995-12-23"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1996-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1996-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1996-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "1996-02-12"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1996-03-20"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1996-04-29"`],
        expected_output: `"みどりの日"`
    },
    {
        inputs: [`DATE "1996-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1996-05-04"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1996-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1996-05-06"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1996-07-20"`],
        expected_output: `"海の日"`
    },
    {
        inputs: [`DATE "1996-09-15"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "1996-09-16"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1996-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1996-10-10"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "1996-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1996-11-04"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1996-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1996-12-23"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1997-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1997-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1997-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "1997-03-20"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1997-04-29"`],
        expected_output: `"みどりの日"`
    },
    {
        inputs: [`DATE "1997-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1997-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1997-07-20"`],
        expected_output: `"海の日"`
    },
    {
        inputs: [`DATE "1997-07-21"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1997-09-15"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "1997-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1997-10-10"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "1997-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1997-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1997-11-24"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1997-12-23"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1998-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1998-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1998-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "1998-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1998-04-29"`],
        expected_output: `"みどりの日"`
    },
    {
        inputs: [`DATE "1998-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1998-05-04"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1998-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1998-07-20"`],
        expected_output: `"海の日"`
    },
    {
        inputs: [`DATE "1998-09-15"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "1998-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1998-10-10"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "1998-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1998-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1998-12-23"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "1999-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "1999-01-15"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "1999-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "1999-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "1999-03-22"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1999-04-29"`],
        expected_output: `"みどりの日"`
    },
    {
        inputs: [`DATE "1999-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "1999-05-04"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1999-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "1999-07-20"`],
        expected_output: `"海の日"`
    },
    {
        inputs: [`DATE "1999-09-15"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "1999-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "1999-10-10"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "1999-10-11"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "1999-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "1999-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "1999-12-23"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "2000-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "2000-01-10"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "2000-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "2000-03-20"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "2000-04-29"`],
        expected_output: `"みどりの日"`
    },
    {
        inputs: [`DATE "2000-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "2000-05-04"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2000-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "2000-07-20"`],
        expected_output: `"海の日"`
    },
    {
        inputs: [`DATE "2000-09-15"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "2000-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "2000-10-09"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "2000-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "2000-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "2000-12-23"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "2001-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "2001-01-08"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "2001-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "2001-02-12"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2001-03-20"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "2001-04-29"`],
        expected_output: `"みどりの日"`
    },
    {
        inputs: [`DATE "2001-04-30"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2001-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "2001-05-04"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2001-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "2001-07-20"`],
        expected_output: `"海の日"`
    },
    {
        inputs: [`DATE "2001-09-15"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "2001-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "2001-09-24"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2001-10-08"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "2001-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "2001-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "2001-12-23"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "2001-12-24"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2002-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "2002-01-14"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "2002-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "2002-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "2002-04-29"`],
        expected_output: `"みどりの日"`
    },
    {
        inputs: [`DATE "2002-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "2002-05-04"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2002-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "2002-05-06"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2002-07-20"`],
        expected_output: `"海の日"`
    },
    {
        inputs: [`DATE "2002-09-15"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "2002-09-16"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2002-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "2002-10-14"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "2002-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "2002-11-04"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2002-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "2002-12-23"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "2003-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "2003-01-13"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "2003-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "2003-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "2003-04-29"`],
        expected_output: `"みどりの日"`
    },
    {
        inputs: [`DATE "2003-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "2003-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "2003-07-21"`],
        expected_output: `"海の日"`
    },
    {
        inputs: [`DATE "2003-09-15"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "2003-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "2003-10-13"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "2003-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "2003-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "2003-11-24"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2003-12-23"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "2004-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "2004-01-12"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "2004-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "2004-03-20"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "2004-04-29"`],
        expected_output: `"みどりの日"`
    },
    {
        inputs: [`DATE "2004-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "2004-05-04"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2004-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "2004-07-19"`],
        expected_output: `"海の日"`
    },
    {
        inputs: [`DATE "2004-09-20"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "2004-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "2004-10-11"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "2004-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "2004-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "2004-12-23"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "2005-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "2005-01-10"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "2005-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "2005-03-20"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "2005-03-21"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2005-04-29"`],
        expected_output: `"みどりの日"`
    },
    {
        inputs: [`DATE "2005-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "2005-05-04"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2005-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "2005-07-18"`],
        expected_output: `"海の日"`
    },
    {
        inputs: [`DATE "2005-09-19"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "2005-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "2005-10-10"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "2005-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "2005-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "2005-12-23"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "2006-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "2006-01-02"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2006-01-09"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "2006-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "2006-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "2006-04-29"`],
        expected_output: `"みどりの日"`
    },
    {
        inputs: [`DATE "2006-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "2006-05-04"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2006-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "2006-07-17"`],
        expected_output: `"海の日"`
    },
    {
        inputs: [`DATE "2006-09-18"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "2006-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "2006-10-09"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "2006-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "2006-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "2006-12-23"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "2007-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "2007-01-08"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "2007-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "2007-02-12"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2007-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "2007-04-29"`],
        expected_output: `"昭和の日"`
    },
    {
        inputs: [`DATE "2007-04-30"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2007-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "2007-05-04"`],
        expected_output: `"みどりの日"`
    },
    {
        inputs: [`DATE "2007-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "2007-07-16"`],
        expected_output: `"海の日"`
    },
    {
        inputs: [`DATE "2007-09-17"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "2007-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "2007-09-24"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2007-10-08"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "2007-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "2007-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "2007-12-23"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "2007-12-24"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2008-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "2008-01-14"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "2008-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "2008-03-20"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "2008-04-29"`],
        expected_output: `"昭和の日"`
    },
    {
        inputs: [`DATE "2008-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "2008-05-04"`],
        expected_output: `"みどりの日"`
    },
    {
        inputs: [`DATE "2008-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "2008-05-06"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2008-07-21"`],
        expected_output: `"海の日"`
    },
    {
        inputs: [`DATE "2008-09-15"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "2008-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "2008-10-13"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "2008-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "2008-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "2008-11-24"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2008-12-23"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "2009-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "2009-01-12"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "2009-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "2009-03-20"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "2009-04-29"`],
        expected_output: `"昭和の日"`
    },
    {
        inputs: [`DATE "2009-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "2009-05-04"`],
        expected_output: `"みどりの日"`
    },
    {
        inputs: [`DATE "2009-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "2009-05-06"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2009-07-20"`],
        expected_output: `"海の日"`
    },
    {
        inputs: [`DATE "2009-09-21"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "2009-09-22"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2009-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "2009-10-12"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "2009-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "2009-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "2009-12-23"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "2010-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "2010-01-11"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "2010-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "2010-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "2010-03-22"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2010-04-29"`],
        expected_output: `"昭和の日"`
    },
    {
        inputs: [`DATE "2010-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "2010-05-04"`],
        expected_output: `"みどりの日"`
    },
    {
        inputs: [`DATE "2010-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "2010-07-19"`],
        expected_output: `"海の日"`
    },
    {
        inputs: [`DATE "2010-09-20"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "2010-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "2010-10-11"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "2010-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "2010-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "2010-12-23"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "2011-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "2011-01-10"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "2011-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "2011-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "2011-04-29"`],
        expected_output: `"昭和の日"`
    },
    {
        inputs: [`DATE "2011-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "2011-05-04"`],
        expected_output: `"みどりの日"`
    },
    {
        inputs: [`DATE "2011-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "2011-07-18"`],
        expected_output: `"海の日"`
    },
    {
        inputs: [`DATE "2011-09-19"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "2011-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "2011-10-10"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "2011-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "2011-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "2011-12-23"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "2012-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "2012-01-02"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2012-01-09"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "2012-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "2012-03-20"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "2012-04-29"`],
        expected_output: `"昭和の日"`
    },
    {
        inputs: [`DATE "2012-04-30"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2012-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "2012-05-04"`],
        expected_output: `"みどりの日"`
    },
    {
        inputs: [`DATE "2012-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "2012-07-16"`],
        expected_output: `"海の日"`
    },
    {
        inputs: [`DATE "2012-09-17"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "2012-09-22"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "2012-10-08"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "2012-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "2012-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "2012-12-23"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "2012-12-24"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2013-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "2013-01-14"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "2013-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "2013-03-20"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "2013-04-29"`],
        expected_output: `"昭和の日"`
    },
    {
        inputs: [`DATE "2013-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "2013-05-04"`],
        expected_output: `"みどりの日"`
    },
    {
        inputs: [`DATE "2013-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "2013-05-06"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2013-07-15"`],
        expected_output: `"海の日"`
    },
    {
        inputs: [`DATE "2013-09-16"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "2013-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "2013-10-14"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "2013-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "2013-11-04"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2013-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "2013-12-23"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "2014-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "2014-01-13"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "2014-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "2014-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "2014-04-29"`],
        expected_output: `"昭和の日"`
    },
    {
        inputs: [`DATE "2014-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "2014-05-04"`],
        expected_output: `"みどりの日"`
    },
    {
        inputs: [`DATE "2014-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "2014-05-06"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2014-07-21"`],
        expected_output: `"海の日"`
    },
    {
        inputs: [`DATE "2014-09-15"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "2014-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "2014-10-13"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "2014-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "2014-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "2014-11-24"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2014-12-23"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "2015-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "2015-01-12"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "2015-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "2015-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "2015-04-29"`],
        expected_output: `"昭和の日"`
    },
    {
        inputs: [`DATE "2015-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "2015-05-04"`],
        expected_output: `"みどりの日"`
    },
    {
        inputs: [`DATE "2015-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "2015-05-06"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2015-07-20"`],
        expected_output: `"海の日"`
    },
    {
        inputs: [`DATE "2015-09-21"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "2015-09-22"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2015-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "2015-10-12"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "2015-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "2015-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "2015-12-23"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "2016-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "2016-01-11"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "2016-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "2016-03-20"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "2016-03-21"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2016-04-29"`],
        expected_output: `"昭和の日"`
    },
    {
        inputs: [`DATE "2016-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "2016-05-04"`],
        expected_output: `"みどりの日"`
    },
    {
        inputs: [`DATE "2016-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "2016-07-18"`],
        expected_output: `"海の日"`
    },
    {
        inputs: [`DATE "2016-08-11"`],
        expected_output: `"山の日"`
    },
    {
        inputs: [`DATE "2016-09-19"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "2016-09-22"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "2016-10-10"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "2016-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "2016-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "2016-12-23"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "2017-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "2017-01-02"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2017-01-09"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "2017-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "2017-03-20"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "2017-04-29"`],
        expected_output: `"昭和の日"`
    },
    {
        inputs: [`DATE "2017-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "2017-05-04"`],
        expected_output: `"みどりの日"`
    },
    {
        inputs: [`DATE "2017-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "2017-07-17"`],
        expected_output: `"海の日"`
    },
    {
        inputs: [`DATE "2017-08-11"`],
        expected_output: `"山の日"`
    },
    {
        inputs: [`DATE "2017-09-18"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "2017-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "2017-10-09"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "2017-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "2017-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "2017-12-23"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "2018-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "2018-01-08"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "2018-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "2018-02-12"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2018-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "2018-04-29"`],
        expected_output: `"昭和の日"`
    },
    {
        inputs: [`DATE "2018-04-30"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2018-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "2018-05-04"`],
        expected_output: `"みどりの日"`
    },
    {
        inputs: [`DATE "2018-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "2018-07-16"`],
        expected_output: `"海の日"`
    },
    {
        inputs: [`DATE "2018-08-11"`],
        expected_output: `"山の日"`
    },
    {
        inputs: [`DATE "2018-09-17"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "2018-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "2018-09-24"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2018-10-08"`],
        expected_output: `"体育の日"`
    },
    {
        inputs: [`DATE "2018-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "2018-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "2018-12-23"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "2018-12-24"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2019-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "2019-01-14"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "2019-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "2019-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "2019-04-29"`],
        expected_output: `"昭和の日"`
    },
    {
        inputs: [`DATE "2019-04-30"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2019-05-01"`],
        expected_output: `"休日（祝日扱い）"`
    },
    {
        inputs: [`DATE "2019-05-02"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2019-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "2019-05-04"`],
        expected_output: `"みどりの日"`
    },
    {
        inputs: [`DATE "2019-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "2019-05-06"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2019-07-15"`],
        expected_output: `"海の日"`
    },
    {
        inputs: [`DATE "2019-08-11"`],
        expected_output: `"山の日"`
    },
    {
        inputs: [`DATE "2019-08-12"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2019-09-16"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "2019-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "2019-10-14"`],
        expected_output: `"体育の日（スポーツの日）"`
    },
    {
        inputs: [`DATE "2019-10-22"`],
        expected_output: `"休日（祝日扱い）"`
    },
    {
        inputs: [`DATE "2019-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "2019-11-04"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2019-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "2020-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "2020-01-13"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "2020-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "2020-02-23"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "2020-02-24"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2020-03-20"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "2020-04-29"`],
        expected_output: `"昭和の日"`
    },
    {
        inputs: [`DATE "2020-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "2020-05-04"`],
        expected_output: `"みどりの日"`
    },
    {
        inputs: [`DATE "2020-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "2020-05-06"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2020-07-23"`],
        expected_output: `"海の日"`
    },
    {
        inputs: [`DATE "2020-07-24"`],
        expected_output: `"スポーツの日"`
    },
    {
        inputs: [`DATE "2020-08-10"`],
        expected_output: `"山の日"`
    },
    {
        inputs: [`DATE "2020-09-21"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "2020-09-22"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "2020-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "2020-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "2021-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "2021-01-11"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "2021-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "2021-02-23"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "2021-03-20"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "2021-04-29"`],
        expected_output: `"昭和の日"`
    },
    {
        inputs: [`DATE "2021-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "2021-05-04"`],
        expected_output: `"みどりの日"`
    },
    {
        inputs: [`DATE "2021-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "2021-07-22"`],
        expected_output: `"海の日"`
    },
    {
        inputs: [`DATE "2021-07-23"`],
        expected_output: `"スポーツの日"`
    },
    {
        inputs: [`DATE "2021-08-08"`],
        expected_output: `"山の日"`
    },
    {
        inputs: [`DATE "2021-08-09"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2021-09-20"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "2021-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "2021-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "2021-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "2022-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "2022-01-10"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "2022-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "2022-02-23"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "2022-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "2022-04-29"`],
        expected_output: `"昭和の日"`
    },
    {
        inputs: [`DATE "2022-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "2022-05-04"`],
        expected_output: `"みどりの日"`
    },
    {
        inputs: [`DATE "2022-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "2022-07-18"`],
        expected_output: `"海の日"`
    },
    {
        inputs: [`DATE "2022-08-11"`],
        expected_output: `"山の日"`
    },
    {
        inputs: [`DATE "2022-09-19"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "2022-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "2022-10-10"`],
        expected_output: `"スポーツの日"`
    },
    {
        inputs: [`DATE "2022-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "2022-11-23"`],
        expected_output: `"勤労感謝の日"`
    },
    {
        inputs: [`DATE "2023-01-01"`],
        expected_output: `"元日"`
    },
    {
        inputs: [`DATE "2023-01-02"`],
        expected_output: `"休日"`
    },
    {
        inputs: [`DATE "2023-01-09"`],
        expected_output: `"成人の日"`
    },
    {
        inputs: [`DATE "2023-02-11"`],
        expected_output: `"建国記念の日"`
    },
    {
        inputs: [`DATE "2023-02-23"`],
        expected_output: `"天皇誕生日"`
    },
    {
        inputs: [`DATE "2023-03-21"`],
        expected_output: `"春分の日"`
    },
    {
        inputs: [`DATE "2023-04-29"`],
        expected_output: `"昭和の日"`
    },
    {
        inputs: [`DATE "2023-05-03"`],
        expected_output: `"憲法記念日"`
    },
    {
        inputs: [`DATE "2023-05-04"`],
        expected_output: `"みどりの日"`
    },
    {
        inputs: [`DATE "2023-05-05"`],
        expected_output: `"こどもの日"`
    },
    {
        inputs: [`DATE "2023-07-17"`],
        expected_output: `"海の日"`
    },
    {
        inputs: [`DATE "2023-08-11"`],
        expected_output: `"山の日"`
    },
    {
        inputs: [`DATE "2023-09-18"`],
        expected_output: `"敬老の日"`
    },
    {
        inputs: [`DATE "2023-09-23"`],
        expected_output: `"秋分の日"`
    },
    {
        inputs: [`DATE "2023-10-09"`],
        expected_output: `"スポーツの日"`
    },
    {
        inputs: [`DATE "2023-11-03"`],
        expected_output: `"文化の日"`
    },
    {
        inputs: [`DATE "2023-11-23"`],
        expected_output: `"勤労感謝の日"`
    }
]);
        