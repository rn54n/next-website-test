import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <p>test</p>
      <p>test2</p>
      <Link href="/ninjas">
        <a>See Ninja Listing</a>
      </Link>
    </div>
  );
}
