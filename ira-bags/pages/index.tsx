import Link from "next/link";
import { BagList } from "../components/bags/BagList";
import { COLLECTIONS, BagItemType } from "../utils/utils";
import { VideoContainer } from "../components/content/VideoContainer";

const MOK_BAGS: BagItemType[] = [
  {
    id: 1,
    name: "BlackStrip",
    collection: COLLECTIONS.CLASSIC,
    imageUrl:
      "https://i.etsystatic.com/23134588/r/il/becdc1/2542111396/il_794xN.2542111396_g0l7.jpg",
    description: "This is one black bag.",
  },
  {
    id: 2,
    name: "Red",
    collection: COLLECTIONS.TUBE,
    imageUrl:
      "https://i.etsystatic.com/23134588/r/il/8f7051/3296924490/il_794xN.3296924490_1nn4.jpg",
    description: "This is one red bag.",
  },
  {
    id: 3,
    name: "Black",
    collection: COLLECTIONS.CLASSIC,
    imageUrl:
      "https://i.etsystatic.com/23134588/r/il/ae6a34/2701725130/il_1140xN.2701725130_ho3w.jpg",
    description: "This is one black classic bag.",
  },
  {
    id: 4,
    name: "Transparent",
    collection: COLLECTIONS.TRANSPARENT,
    imageUrl:
      "https://i.etsystatic.com/23134588/r/il/00936f/2422526203/il_1140xN.2422526203_h8pg.jpg",
    description: "This is one transparent bag.",
  },
];

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <BagList bagItems={MOK_BAGS}></BagList>
    </div>
  );
};

export default HomePage;
