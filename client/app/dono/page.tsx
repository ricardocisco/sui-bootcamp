"use client";

import { Button } from "@/components/ui/button";
import React, { useMemo, useState } from "react";
import { useGalleryData } from "@/hooks/useGalleryData";
import WalrusUploader from "@/components/walrus/walrusUploader";
import { ConnectButton } from "@mysten/dapp-kit";

export default function Owner() {
  const { galleryInfo, collectFee } = useGalleryData();

  const [estado, setEstado] = useState(0);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-full flex justify-end items-center p-4 h-20">
        <ConnectButton />
      </div>
      <div className="flex gap-2">
        <Button onClick={collectFee}>Coletar Dinheiro</Button>
        <Button onClick={() => setEstado(2)}>Publicar Imagem</Button>
      </div>
      {estado === 2 && <WalrusUploader />}
    </div>
  );
}
