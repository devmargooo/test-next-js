'use server';
export async function getServerTime() {
  return await fetch('http://82.202.142.18:3001/hello', {
    method: 'GET',
    cache: 'no-store',
  }).then((res) => res.text());
}
