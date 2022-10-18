import { useRouter } from "next/router";
import React, { Fragment } from "react";
import { COLLECTIONS, BagItemType } from "../../utils/utils";

export const BagDetail = (props: BagItemType) => {
  return (
    <Fragment>
      <div>From Collection: {props.collection}</div>
      <div>Id: {props.id}</div>
      <div>Name: {props.name}</div>
      <img src={props.imageUrl} alt={props.name} />
      <div>Description: {props.description}</div>
    </Fragment>
  );
};
