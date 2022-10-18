import Router, { useRouter } from "next/router";
import React from "react";
import { COLLECTIONS, BagItemType } from "../../utils/utils";

export const BagItem = (props: BagItemType) => {
  const router = useRouter();

  const showDetailsHandler = () => {
    router.push("/" + props.id);
  };

  return (
    <div>
      <button onClick={showDetailsHandler}>Details of {props.name}</button>
      <div>From Collection: {props.collection}</div>
      <div>Id: {props.id}</div>
      <div>Name: {props.name}</div>
      <img src={props.imageUrl} alt={props.name} />
      <div>Description: {props.description}</div>
    </div>
  );
};
