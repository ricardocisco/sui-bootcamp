"use client";

import { Button } from "@/components/ui/button";
import { useGalleryData } from "@/hooks/useGalleryData";
import { useWalrusDownloader } from "@/hooks/useWalrusDownloader";
import { ConnectButton, useCurrentAccount } from "@mysten/dapp-kit";
import React, { useMemo } from "react";

export default function Home() {
  const { galleryInfo, payToGetAccess } = useGalleryData();
  const { downloadFiles } = useWalrusDownloader();
  const currentAccount = useCurrentAccount();

  const hasAccess = useMemo(() => {
    if (!galleryInfo || !currentAccount) return false;

    return galleryInfo.addresses.includes(currentAccount.address);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [galleryInfo]);

  return (
    <div className="flex flex-col h-screen w-full items-center">
      <div className="w-full flex justify-end items-center p-4 h-20">
        <ConnectButton />
      </div>
      {!hasAccess && (
        <div className="w-40 h-40">
          <Button onClick={payToGetAccess}>Pagar para ter acesso</Button>
        </div>
      )}

      {hasAccess && galleryInfo.blobs && (
        <div className="flex flex-row gap-2 flex-wrap">
          {galleryInfo.blobs.map((blob: any, index) => {
            return (
              <div className="w-fit h-20" key={index}>
                <span>{blob}</span>
                <Button onClick={() => downloadFiles(blob)}>
                  Download Blob
                </Button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
