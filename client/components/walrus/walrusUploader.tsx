"use client";
import React from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { useWalrusUpload } from "@/hooks/useWalrusUpload";
import { Loader2Icon } from "lucide-react";

export default function WalrusUploader() {
  const { file, setFile, uploadFile, uploading } = useWalrusUpload();

  console.log(process.env.NEXT_PUBLIC_CONTRACT_ID);

  return (
    <div className="flex flex-col gap-2">
      <div>
        <Label>Subir Arquivo</Label>
        <Input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        ></Input>
      </div>
      <Button onClick={() => uploadFile()} disabled={!file || uploading}>
        {uploading ? (
          <span className="flex gap-1">
            <Loader2Icon className="animate-spin" />
            Enviando
          </span>
        ) : (
          "Enviar"
        )}
      </Button>
    </div>
  );
}
