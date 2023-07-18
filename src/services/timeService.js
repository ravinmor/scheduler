export default {
    async parseISODate(dateString) {
        const date = new Date(dateString);
        
        const parsedDate = {
          second: date.getUTCSeconds(),
          minute: date.getUTCMinutes(),
          hour: date.getUTCHours(),
          day_of_the_month: date.getUTCDate(),
          month: date.getUTCMonth() + 1,
          day_of_the_week: date.getUTCDay(),
          year: date.getUTCFullYear()
        };
        
        return parsedDate;
    }
}