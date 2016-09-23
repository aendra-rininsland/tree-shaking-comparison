import { timeWeek, timeMonth } from 'd3';

var now = new Date;
timeWeek.range(timeMonth.floor(now), timeMonth.ceil(now));
