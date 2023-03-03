import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello</title>
        <link rel="shortcut icon" href="next.svg" type="image/x-icon" />
      </Head>
      <button className="btn">Button</button>
      <button className="btn btn-primary">Button</button>
      <button className="btn btn-secondary">Button</button>
      <button className="btn btn-accent">Button</button>
      <button className="btn btn-ghost">Button</button>
      <button className="btn btn-link">Button</button>
    </>
  );
}
