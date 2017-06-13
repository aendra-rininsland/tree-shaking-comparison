// Tests -- Uncomment whichever you want to exercise.

// Test 1 -- Time formatting
// import { timeWeek, timeMonth } from 'd3';
// const now = new Date;
// console.log(timeWeek.range(timeMonth.floor(now), timeMonth.ceil(now)));


// Test 2 -- bclinkinbeard's test
// import { permute } from 'd3-array';
// permute();

// Test 3 -- Something involving d3-selection and monorepo
const d3 = require('d3');
d3.selectAll('body').append('div').classed('hurr', true);
