let x;
let d = new Date();

// time in string
x = d.toString();

// timestamps
x = d.getTime();
x = d.valueOf();

// specific parts of the date
// year
x = d.getFullYear();

// month (january = 0)
x = d.getMonth() + 1;

// day
x = d.getDate(); // day of the month
x = d.getDay(); // day of the week (sunday = 0)

// time of the day self-explanatory
x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();
x = d.getMilliseconds();

// you can construct a date from these methods
x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

// api to format dates in a locale sensible way 
x = Intl.DateTimeFormat('pt-BR').format(d);
//instead of typing in the locale you can write 'default' for it
x = Intl.DateTimeFormat('default').format(d);
// you can also specify what parts of the date you wanna call <--- use this
x = Intl.DateTimeFormat('pt-br', {
    year: '2-digit',
    day: 'numeric',
    month: 'long',
    weekday: 'long',
    hour: 'numeric',
    minute: "numeric",
    second: 'numeric',
    timeZone: 'America/Sao_Paulo'
}).format(d);

console.log(x);
