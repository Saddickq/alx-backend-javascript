process.stdin.setEncoding('utf8');

console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('readable', () => {
  const line = process.stdin.read();
  if (line) process.stdout.write(`Your name is: ${line}`);
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
