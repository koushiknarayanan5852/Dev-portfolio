import fs from 'fs';

try {
  const stats = fs.statSync('./public/profile.jpg');
  console.log('Size of profile.jpg:', stats.size, 'bytes');
} catch (e) {
  console.log('File does not exist or error:', e.message);
}
