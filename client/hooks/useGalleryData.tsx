"use client";

import { useSuiClient, useCurrentAccount } from "@mysten/dapp-kit";
import { useEffect } from "react";

export const useGalleryData = () => {
  const currentAccount = useCurrentAccount();
  const client = useSuiClient();

  const galleryData = async () => {
    const gallery: any = await client.getObject({
      id: "0xd7e53b8c5107136b9129ab7573ccf02df7a3c3218a1d95101b1963bff956553e",
      options: { showContent: true, showOwner: true }
    });

    return { ...gallery.data.content.fields };
  };

  return { galleryData };
};
