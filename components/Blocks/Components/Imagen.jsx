import Image from "next/image";

export default function Imagen ({data, style}) {
  return (
    <Image
      className={style}
      src={data.url}
      width={data.width}
      height={data.height}
      alt={data.filename}
    />
  )
}