"use client";

import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from "@contentful/live-preview/react";
import Image from "next/image";
import { imageLoader } from "../lib/imageLoader";

export const Duplex = ({ entry }) => {
  const { fields } = useContentfulLiveUpdates(entry);
  const inspectorProps = useContentfulInspectorMode({
    entryId: entry?.sys.id,
  });

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-6 m-12">
        <div className="text-white flex flex-col justify-center">
          <h2
            className="text-2xl mb-4"
            {...inspectorProps({ fieldId: "headline" })}
          >
            {fields.headline || ""}
          </h2>

          <div {...inspectorProps({ fieldId: "bodyText" })}>
            {documentToReactComponents(fields.bodyText || "")}
          </div>
        </div>

        <Image
          loader={imageLoader}
          width={fields.image.fields.file.details.image.width}
          height={fields.image.fields.file.details.image.height}
          sizes="(max-width: 768px) 80vw, 425px"
          src={`https:${fields.image?.fields.file.url}` || ""}
          className={`order-first ${
            fields.containerLayout ? "md:order-first" : "md:order-last"
          }`}
          alt={fields.image?.fields.title}
          {...inspectorProps({ fieldId: "image" })}
        />
      </div>
    </>
  );
};

export default Duplex;
