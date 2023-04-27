
export const catchApi = ({ id, path, draft }) => {
  if (process.env.BACKEND_URL === undefined) {
    return fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}${path}/${id}?draft=${draft}`, {
      cache: 'no-store',
      next: {
        revalidate: 60
      }
    })
      .then(res => res.json())
  } else {
    return fetch(`${process.env.BACKEND_URL}${path}/${id}?draft=${draft}`, {
      cache: 'no-store',
      next: {
        revalidate: 60
      }
    })
      .then(res => res.json())
  }
}

export const catchApiList = ({ path, draft }) => {
  if (process.env.BACKEND_URL === undefined) {
    return fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}${path}?draft=${draft}`, {
      cache: 'no-store',
      next: {
        revalidate: 60
      }
    })
      .then(res => res.json())
  } else {
    return fetch(`${process.env.BACKEND_URL}${path}?draft=${draft}`, {
      cache: 'no-store',
      next: {
        revalidate: 60
      }
    })
      .then(res => res.json())
  }
}

export const catchApiListByFilterWhere = ({ path, typeFilter, filter, query, draft }) => {
  if (process.env.BACKEND_URL === undefined) {
    return fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}${path}?where[${filter}][${typeFilter}]=${query}?draft=${draft}`, {
      cache: 'no-store',
      next: {
        revalidate: 60
      }
    })
      .then(res => res.json())
  } else {
    return fetch(`${process.env.BACKEND_URL}${path}?where[${filter}][${typeFilter}]=${query}`, {
      cache: 'no-store',
      next: {
        revalidate: 60
      }
    })
      .then(res => res.json())
  }
}