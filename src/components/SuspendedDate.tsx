export const SuspendedDate = async () => {
  const date = await fetch('http://82.202.142.18:3001/hello', {
    method: 'GET',
    cache: 'no-store',
  })
    .then((res) => res.text())
    .catch(() => void 0);

  return <p>Get date from server: {date}</p>;
};
