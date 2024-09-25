import { format, addDays, parse, startOfWeek, endOfWeek, setISOWeek, addWeeks } from "date-fns";

class DateUtils {
  constructor() {}

  async getDateTimeWithAdjumentDate(dateFormat: string, plusDate: number): Promise<string> {
    const date = addDays(new Date(), plusDate);
    return await format(date, dateFormat);
  }

  async getDateTimeWithAdjustedWeeks(dateFormat: string, plusWeeks: number): Promise<string> {
    const date = addWeeks(new Date(), plusWeeks);
    return format(date, dateFormat);
  }

  async convertStringToDateWithFormat(strDate: string, dateFormat: string): Promise<Date> {
    return await parse(strDate, dateFormat, new Date());
  }

  // Adjusts the current date by a certain number of days and returns the formatted date

  // Converts a string to a Date object based on the provided format

  // Uses convertStringToDateWithFormat to parse the date string and then extracts the day
  async getDay(strDate: string, dateFormat: string = "MM/dd/yyyy"): Promise<string> {
    const date = await this.convertStringToDateWithFormat(strDate, dateFormat);
    return await format(date, "dd");
  }

  // Extracts the month from the date string
  async getMonth(strDate: string, dateFormat: string = "MM/dd/yyyy"): Promise<string> {
    const date = await this.convertStringToDateWithFormat(strDate, dateFormat);
    return await format(date, "MM");
  }

  // Extracts the year from the date string
  async getYear(strDate: string, dateFormat: string = "MM/dd/yyyy"): Promise<string> {
    const date = await this.convertStringToDateWithFormat(strDate, dateFormat);
    return await format(date, "yyyy"); // 'YYYY' should be 'yyyy' in date-fns
  }

  async getFirstDayOfWeek(dateFormat: string = "MM/dd/yyyy"): Promise<string> {
    const today = new Date();
    const firstDay = startOfWeek(today, { weekStartsOn: 1 });
    return format(firstDay, dateFormat);
  }

  async getDateByWeekInYear(week: number, pattern = "MMM dd"): Promise<string> {
    const currentYear = new Date().getFullYear();
    const date = new Date(currentYear, 0, 1);
    const weekDate = setISOWeek(date, week);
    const firstDayOfWeek = startOfWeek(weekDate, { weekStartsOn: 0 });
    const lastDayOfWeek = endOfWeek(weekDate, { weekStartsOn: 0 });
    const firstDayOfWeekString = format(firstDayOfWeek, pattern);
    const lastDayOfWeekString = format(lastDayOfWeek, pattern);

    return `${firstDayOfWeekString} - ${lastDayOfWeekString}`;
  }

  async getDateRangeByWeekNumber(plusWeeks = 0, pattern = "MMM dd"): Promise<string> {
    const currentDateStr = await this.getDateTimeWithAdjustedWeeks("yyyy/MM/dd", -1);
    const currentDate = parse(currentDateStr, "yyyy/MM/dd", new Date());
    const date = addWeeks(currentDate, plusWeeks);
    const firstDayOfWeek = startOfWeek(date, { weekStartsOn: 0 });
    const lastDayOfWeek = endOfWeek(date, { weekStartsOn: 0 });

    const firstDayOfWeekString = format(firstDayOfWeek, pattern);
    const lastDayOfWeekString = format(lastDayOfWeek, pattern);

    return `${firstDayOfWeekString} - ${lastDayOfWeekString}`;
  }
}

export default DateUtils;
