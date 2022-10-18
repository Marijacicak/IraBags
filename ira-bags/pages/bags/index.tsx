import Link from "next/link";
import { ParsedUrlQuery } from "querystring";
import { Fragment } from "react";
import { BagDetail } from "../../components/bags/BagDetail";
import { COLLECTIONS } from "../../utils/utils";

const Bags = () => {
  return (
    <Fragment>
      <BagDetail
        id={2}
        name="Dummy name"
        collection={COLLECTIONS.CLASSIC}
        imageUrl="https://i.etsystatic.com/23134588/r/il/becdc1/2542111396/il_794xN.2542111396_g0l7.jpg"
        description="Dummy description"
      />
    </Fragment>
  );
};

export async function getStaticPaths() {
  return {
    fallback: false, // do not pregenerate all paths but just some paths - supported are below under paths// also fetch
    paths: [
      {
        params: {
          bagId: 1,
        },
      },
      {
        params: {
          bagId: 2,
        },
      },
    ],
  };
}

export async function getStaticProps(context: any) {
  // fetch data for a SINGLE bag
  const bagId = context.params.bagId;

  return {
    props: {
      loadedBag: {
        id: 1,
        name: "Dummy name",
        collection: COLLECTIONS.CLASSIC,
        imageUrl:
          "https://i.etsystatic.com/23134588/r/il/becdc1/2542111396/il_794xN.2542111396_g0l7.jpg",
        description: "Dummy description",
      },
    },
  };
}

export default Bags;
