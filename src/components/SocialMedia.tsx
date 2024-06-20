import Image from "next/image";
import React from "react";

const SocialMedia = () => {
  return (
    <div className="flex flex-col gap-5">
      <Image
        src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png"
        alt=""
        width={25}
        height={25}
        className="cursor-pointer"
      />
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
        alt=""
        width={25}
        height={25}
        className="cursor-pointer"
      />
      <Image
        src="https://pngimg.com/uploads/tiktok/tiktok_PNG2.png"
        alt=""
        width={25}
        height={25}
        className="cursor-pointer"
      />
    </div>
  );
};

export default SocialMedia;
