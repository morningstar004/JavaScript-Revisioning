const now = new Date();
console.log(now);
//2026-01-01T14:32:38.662Z

console.log(now.toString());
//Thu Jan 01 2026 19:03:32 GMT+0530 (India Standard Time)

console.log(now.toDateString());
//Thu Jan 01 2026

console.log(now.toTimeString());
//19:10:08 GMT+0530 (India Standard Time)

console.log(now.toLocaleString());
//1/1/2026, 7:10:08 PM

console.log(now.getFullYear()); // Year (e.g., 2026)

console.log(now.getMonth() + 1); // Month (0-based, so add 1) 

console.log(now.getDate()); // Day of the month 
 
console.log(now.getHours()); // Hours (0–23) 
 
console.log(now.getMinutes()); // Minutes 
 
console.log(now.getSeconds()); // Seconds

console.log(now.getTime());


console.log(now.toLocaleDateString('en-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: "2-digit",
}));
