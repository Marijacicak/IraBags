import { FC } from "react";
import { BagItem } from "./BagItem";
import { BagItemType } from "../../utils/utils";

type BagListType = {
  bagItems: BagItemType[];
};

export const BagList = (props: BagListType) => {
  return (
    <ul className="bag-list">
      {props.bagItems.map((bagItem) => (
        <BagItem
          key={bagItem.id}
          id={bagItem.id}
          collection={bagItem.collection}
          name={bagItem.name}
          imageUrl={bagItem.imageUrl}
          description={bagItem.description}
        />
      ))}
    </ul>
  );
};
