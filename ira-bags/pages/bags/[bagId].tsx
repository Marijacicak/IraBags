import { useRouter } from "next/router";
const BagDetail = () => {
  const router = useRouter();
  // router.query will take the part that is in the url...bagId under url/bags/bagsId
  // it will be bags/bagsId because of the folder in "pages" section...
  const bagId = router.query.bagId;

  // send a request to backend API to fetch bagId

  return <div>Bag detail by {bagId}</div>;
};

export default BagDetail;
