import Link from "next/link.js";

export default function Home() {
  return (
    <>
      <h1>This is server generated page</h1>
      <nav>
        <ul>
          <li>
            <Link prefetch={false} href="/server-component">
              Server component
            </Link>
          </li>
          <li>
            <Link prefetch={false} href="/client-component">
              Client component
            </Link>
          </li>
          <li>
            <Link prefetch={false} href="/client-server-import">
              Client server import
            </Link>
          </li>
          <li>
            <Link prefetch={false} href="/client-server-composition">
              Client server composition
            </Link>
          </li>
          <li>
            <Link prefetch={false} href="/deffered-server-component">
              Deffered server component
            </Link>
          </li>
          <li>
            <Link prefetch={false} href="/suspended">
              Suspended component
            </Link>
          </li>
          <li>
            <Link prefetch={false} href="/server-action">
              Server action
            </Link>
          </li>
          <li>
            <Link prefetch={false} href="/with-use">
              With use
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
