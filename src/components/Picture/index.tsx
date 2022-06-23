import { useState } from "react";
import { InfoCard, Pic, PictureCard } from "./styles";

interface PictureProps{
  imagem: string;
  alt: string;
  titulo?: string;
  texto?: string;
  type: number;
}

export function Picture({imagem, alt, titulo, texto, type}:PictureProps) {
  return (
    <PictureCard type={type}>
      <Pic imagem={imagem} />
    </PictureCard>
  )
}