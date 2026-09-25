import Image from "next/image";

export default function Imagen ({data, style}) {
  // El optimizador de next/image rechaza los SVG (400) si no está activado
  // dangerouslyAllowSVG. Las URLs de Cloudinary no llevan extensión, así que
  // Next no los detecta solo: se sirven sin optimizar según el mimeType.
  const isSvg = data.mimeType === 'image/svg+xml' || data.filename?.endsWith('.svg')

  return (
    <Image
      className={style}
      src={data.url}
      width={data.width}
      height={data.height}
      alt={data.alt || data.filename}
      unoptimized={isSvg}
    />
  )
}
