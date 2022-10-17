import Link from "next/link";
import { Fragment } from "react";

const Bags = () => {
  return (
    <Fragment>
      <h1>Bags Page</h1>
      <ul>
        <li>
          <Link href="/bags/bag1">Bag 1</Link>
        </li>
        <li>
          <Link href="/bags/bag2">Bag 2</Link>
        </li>
        <li>
          <Link href="/bags/bag3">Bag 3</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Bags;
