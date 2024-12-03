"use client";

import React from "react";

const DescriptionItem = React.memo(({ value }: { value: string }) => {
  return (
    <li className="text-info mb-1 ">{`You matched the pair of ${value}.`}</li>
  );
});

DescriptionItem.displayName = "DescriptionItem";

export default DescriptionItem;
