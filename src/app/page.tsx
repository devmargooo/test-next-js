import Link from "next/link.js";

export default function Home() {
  return (
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
          <Link prefetch={false} href="/client-server-composition">
            Client server composition
          </Link>
        </li>
        <li>
          <Link prefetch={false} href="/client-server-import">
            Client server import
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
      </ul>
    </nav>
  );
}
