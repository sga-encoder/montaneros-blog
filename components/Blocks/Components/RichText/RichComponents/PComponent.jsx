import RichText from '../RichText';
import Link from 'next/link';

export default function PComponent({ item }) {
  return (
    <>
      {
        item.children === undefined
          ? <p
            className='text-inherit underline-offset-auto inline-block'
          >
            {
              item.map((item2, index2) => {
                if (item2.bold) {
                  return (
                    <b key={index2}>{item2.text}</b>
                  )
                } else if (item2.italic) {
                  return (
                    <i key={index2}>{item2.text}</i>
                  )
                } else if (item2.underline) {
                  return (
                    <u key={index2}>{item2.text}</u>
                  )
                } else if (item2.strikethrough) {
                  return (
                    <s key={index2}>{item2.text}</s>
                  )
                } else if (item2.code) {
                  return (
                    <code key={index2}>{item2.text}</code>
                  )
                } else if (item2.color) {
                  return (
                    <span key={index2} style={{ color: item2.color }}>{item2.text}</span>
                  )
                } else if (item2.type === 'link') {
                  if (item2.linkType === 'internal') {
                    if (item2.doc.relationTo === 'paginas') {
                      return (
                        <Link key={index2} href={`/${item2.doc.value.slug}`} className='text-secondary-400 underline'>
                          <RichText data={[[...item2.children]]} />
                        </Link>
                      )
                    } else if (item2.doc.relationTo === 'blog') {
                      return (
                        <Link key={index2} href={`/blog/${item2.doc.value.slug}`} className='text-secondary-400 underline'>
                          <RichText data={[[...item2.children]]} />
                        </Link>
                      )
                    } else if (item2.doc.relationTo === 'tour-operadora') {
                      return (
                        <Link key={index2} href={`/tour-operadora/${item2.doc.value.slug}`} className='text-secondary-400 underline'>
                          <RichText data={[[...item2.children]]} />
                        </Link>
                      )
                    }
                  } else {
                    return (
                      item2.newTab
                        ? <a key={index2} href={item2.url} target='_blank' className='text-secondary-600 underline'>
                          <RichText data={[[...item2.children]]} />c
                        </a>
                        : <a key={index2} href={item2.url} className='text-secondary-600 underline'>
                          <RichText data={[[...item2.children]]} />
                        </a>
                    )
                  }
                }
                else {
                  return (
                    <span key={index2}>{item2.text}</span>
                  )
                }
              })
            }
          </p>
          : <p
            className='text-primary-100 inline-block'
          >
            {
              item.children.map((item2, index2) => {
                if (item2.bold) {
                  return (
                    <b key={index2}>{item2.text}</b>
                  )
                } else if (item2.italic) {
                  return (
                    <i key={index2}>{item2.text}</i>
                  )
                } else if (item2.underline) {
                  return (
                    <u key={index2}>{item2.text}</u>
                  )
                } else if (item2.strikethrough) {
                  return (
                    <s key={index2}>{item2.text}</s>
                  )
                } else if (item2.code) {
                  return (
                    <code key={index2}>{item2.text}</code>
                  )
                } else if (item2.color) {
                  return (
                    <span key={index2} style={{ color: item2.color }}>{item2.text}</span>
                  )
                } else if (item2.type === 'link') {
                  if (item2.linkType === 'internal') {
                    if (item2.doc.relationTo === 'paginas') {
                      return (
                        <Link key={index2} href={`/${item2.doc.value.slug}`} className='text-secondary-400 underline'>
                          <RichText data={[[...item2.children]]} />
                        </Link>
                      )
                    } else if (item2.doc.relationTo === 'blog') {
                      return (
                        <Link key={index2} href={`/blog/${item2.doc.value.slug}`} className='text-secondary-400 underline'>
                          <RichText data={[[...item2.children]]} />
                        </Link>
                      )
                    } else if (item2.doc.relationTo === 'tour-operadora') {
                      return (
                        <Link key={index2} href={`/tour-operadora/${item2.doc.value.slug}`} className='text-secondary-400 underline'>
                          <RichText data={[[...item2.children]]} />
                        </Link>
                      )
                    }
                  } else {
                    return (
                      item2.newTab
                        ? <a key={index2} href={item2.url} target='_blank' className='text-secondary-600 underline'>
                          {item2.children[0].text}
                        </a>
                        : <a key={index2} href={item2.url} className='text-secondary-600 underline'>{item2.children[0].text}</a>
                    )
                  }
                }
                else {
                  return (
                    <span key={index2}>{item2.text}</span>
                  )
                }
              })
            }
          </p>
      }
    </>  
  );
}