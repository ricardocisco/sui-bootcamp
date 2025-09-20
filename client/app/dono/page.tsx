"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { useCurrentAccount, ConnectButton } from "@mysten/dapp-kit";
import { useGalleryData } from "@/hooks/useGalleryData";

export default function Home() {
  const currentAccount = useCurrentAccount();
  const { galleryData } = useGalleryData();

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex justify-end items-center p-4 h-20">
        <ConnectButton />
      </div>
      <Button>Coletar Dinheiro</Button>
      <Button>Coletar Imagem</Button>
    </div>
  );
}
