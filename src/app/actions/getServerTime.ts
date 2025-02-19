"use server";
export async function getServerTime() {
  return await fetch("http://localhost:3001/hello", {
    method: "GET",
    cache: "no-store",
  }).then((res) => res.text());
}
