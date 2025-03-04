export const SuspendedDate = async () => {
  const date = await fetch("http://localhost:3001/hello", {
    method: "GET",
    cache: "no-store",
  }).then((res) => res.text());

  return <p>Get date from server: {date}</p>;
};
