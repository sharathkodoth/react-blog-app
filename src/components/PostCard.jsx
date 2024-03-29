import React, { useMemo } from "react";
import appwriteService from "../appwrite/service";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage, slug }) {
  const filePreview = useMemo(() => appwriteService.getFilePreview(featuredImage)
    , [featuredImage])
  return (
    <Link to={`/post/${$id}`}>
      <div className=" bg-neutral-100 shadow-md rounded-xl p-3">
        <div className="w-full justify-center mb-3">
          <img
            src={filePreview}
            alt={title}
            className="rounded-xl"
            loading="lazy"
          />
        </div>

        <h2 className="text-md font-serif">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
