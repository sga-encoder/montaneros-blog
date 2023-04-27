import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter, AiFillYoutube, AiOutlineWhatsApp } from "react-icons/ai";

export default function SocialNetwork({ data }) {
  if (data.tipo === 'facebook') {
    return (
      <span className="flex items-center">
        <a href={`https://${data.url}`} target="_blank" className="m-1 text-slate-400">
          <AiFillFacebook />
        </a>
      </span>
    )
  } else if (data.tipo === 'instagram') {
    return (
      <span className="flex items-center">
        <a href={`https://${data.url}`} target="_blank" className="m-1 text-slate-400">
          <AiFillInstagram />
        </a>
      </span>
    )

  }  else if (data.tipo === 'twitter') {
    return (
      <span className="flex items-center">
        <a href={`https://${data.url}`} target="_blank" className="m-1 text-slate-400">
          <AiOutlineTwitter />
        </a>
      </span>
    )
  } else if (data.tipo === 'whatsapp') {
    return (
      <span className="flex items-center">
        <a href={`https://${data.url}`} target="_blank" className="m-1 text-slate-400">
          <AiOutlineWhatsApp />
        </a>
      </span>
    ) 
  } else if (data.tipo === 'youtube') {
    return (
      <span className="flex items-center">
        <a href={`https://${data.url}`} target="_blank" className="m-1 text-slate-400">
          <AiFillYoutube />
        </a>
      </span>
    )
  }
}
