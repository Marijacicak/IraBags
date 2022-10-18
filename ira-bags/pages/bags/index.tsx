import Link from "next/link";
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

export default Bags;
