// Devuelve las clases de translate y rotate de un recurso del CMS.
// Si el editor no activó nesecitaTranslate / nesecitaRotacion se usan las
// clases por defecto del componente. Los valores del CMS sustituyen a los
// fijos (no se suman) porque dos translate-y-* en el mismo elemento se pisan
// según el orden del CSS, no del className.
export default function clasesTransform (recurso, { translate = '', rotate = '' } = {}) {
  const claseTranslate = recurso?.nesecitaTranslate
    ? `${recurso.translateX ?? ''} ${recurso.translateY ?? ''}`
    : translate
  const claseRotate = recurso?.nesecitaRotacion ? recurso.rotate ?? '' : rotate

  return `${claseTranslate} ${claseRotate}`.replace(/\s+/g, ' ').trim()
}
