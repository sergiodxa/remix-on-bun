import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { db } from "~/db.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Remix on Bun" },
    { name: "description", content: "Welcome to Remix on Bun!" },
  ];
};

export async function loader() {
  return json(db.query("select 'Hello from bun:sqlite' as message;").get());
}

export default function Index() {
  let { message } = useLoaderData<{ message: string }>();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix on Bun!</h1>
      <p>
        This app is using <a href="https://bun.sh">Bun</a> as a runtime.
      </p>
      <hr />
      <h2>{message}</h2>
      <p>
        ☝️ That message above me was returned from <code>bun:sqlite</code>{" "}
        running completely in-memory.
      </p>
    </div>
  );
}
