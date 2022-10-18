import { GetStaticProps } from "next";
import { BagList } from "../components/bags/BagList";
import { COLLECTIONS, BagItemType } from "../utils/utils";

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

const HomePage = (props: any) => {
  return (
    <div>
      <h1>Home Page</h1>
      <BagList bagItems={props.loadedBags}></BagList>
    </div>
  );
};

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      loadedBags: MOK_BAGS,
    },
    // revalidate: 10 // refresh on every 10 seconds if data from BE changes often
  };
}

// export async function getServerProps(context: any) {
//   // this is alternative if you want pre render for every request to DB - frequent changes
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       loadedBags: MOK_BAGS,
//     },
//   };
// }

export default HomePage;
