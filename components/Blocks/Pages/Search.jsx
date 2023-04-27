'use client'
import ListToursOperators from "../Components/listTourOperators";
import { useEffect, useMemo, useRef, useState } from "react";
import { createAutocomplete } from "@algolia/autocomplete-core";
import { BsSearch } from "react-icons/bs";
import { catchApiList, catchApiListByFilterWhere } from "@/api/payload";

const fetchDataWithType = async (path, type) => {
  const data = await catchApiList({ path, draft: true });
  return data.docs.map((doc) => {
    return { ...doc, tipo: type };
  });
};

const fetchData = async () => {
  const dataTour = await fetchDataWithType('/api/tour-operadora', 'tour-operadora');
  const dataBlog = await fetchDataWithType('/api/blog', 'blog');
  const dataRecurso = await fetchDataWithType('/api/recurso-turistico', 'recurso-turistico');
  const dataSitio = await fetchDataWithType('/api/sitio-turistico', 'sitio-turistico');
  
  return [...dataTour, ...dataBlog, ...dataRecurso, ...dataSitio];
};


export default function Search(props) {
  const [autocompleteState, setAutocompleteState] = useState({
    collections: [],
    isOpen: false,
  });

  const [docsFind, setDocsFind] = useState([]);

  useEffect(() => {
    async function getData() {
      const docs = await fetchData();
      setDocsFind(docs);
    }

    getData();
  }, []);


  const autocomplete = useMemo(
    () =>
      createAutocomplete({
        defaultActiveItemId: 0,
        placeholder: "busque su tour",
        onStateChange: ({ state }) => setAutocompleteState(state),
        getSources: () => [
          {
            sourceId: "tour-operadora",
            getItems: async ({ query }) => {
              if (!!query) {
                try {
                  const response = await catchApiListByFilterWhere({path: '/api/tour-operadora', typeFilter: 'contains', filter: 'titulo', query, draft: true});

                  if (!response.ok) {
                    throw new Error(`HTTP error ${response.status}`);
                  }
                  return await response.json();
                } catch (error) {
                  console.error("Error fetching data:", error);
                  return []; // Retorna un array vacío en caso de error
                }
              } else {
                return Promise.resolve([]); // Retorna una promesa con un array vacío cuando no hay consulta
              }
            },
          },
          {
            sourceId: "tour-operadora-category",
            getItems: async ({ query }) => {
              if (!!query) {
                try {
                  const response = await catchApiListByFilterWhere({path: '/api/tour-operadora', typeFilter: 'contains', filter: 'categoria', query, draft: true});

                  if (!response.ok) {
                    throw new Error(`HTTP error ${response.status}`);
                  }
                  return await response.json();
                } catch (error) {
                  console.error("Error fetching data:", error);
                  return []; // Retorna un array vacío en caso de error
                }
              } else {
                return Promise.resolve([]); // Retorna una promesa con un array vacío cuando no hay consulta
              }
            },
          },
          {
            sourceId: "recurso-turistico",
            getItems: async ({ query }) => {
              if (!!query) {
                try {
                  const response = await catchApiListByFilterWhere({path: '/api/recurso-turistico', typeFilter: 'contains', filter: 'titulo', query, draft: true});

                  if (!response.ok) {
                    throw new Error(`HTTP error ${response.status}`);
                  }
                  return await response.json();
                } catch (error) {
                  console.error("Error fetching data:", error);
                  return []; // Retorna un array vacío en caso de error
                }
              } else {
                return Promise.resolve([]); // Retorna una promesa con un array vacío cuando no hay consulta
              }
            },
          },
          {
            sourceId: "recurso-turistico-category",
            getItems: async ({ query }) => {
              if (!!query) {
                try {
                  const response = await catchApiListByFilterWhere({path: '/api/recurso-turistico', typeFilter: 'contains', filter: 'categoria', query, draft: true});

                  if (!response.ok) {
                    throw new Error(`HTTP error ${response.status}`);
                  }
                  return await response.json();
                } catch (error) {
                  console.error("Error fetching data:", error);
                  return []; // Retorna un array vacío en caso de error
                }
              } else {
                return Promise.resolve([]); // Retorna una promesa con un array vacío cuando no hay consulta
              }
            },
          },
          {
            sourceId: "sitio-turistico",
            getItems: async ({ query }) => {
              if (!!query) {
                try {
                  const response = await catchApiListByFilterWhere({path: '/api/sitio-turistico', typeFilter: 'contains', filter: 'titulo', query, draft: true});

                  if (!response.ok) {
                    throw new Error(`HTTP error ${response.status}`);
                  }
                  return await response.json();
                } catch (error) {
                  console.error("Error fetching data:", error);
                  return []; // Retorna un array vacío en caso de error
                }
              } else {
                return Promise.resolve([]); // Retorna una promesa con un array vacío cuando no hay consulta
              }
            },
          },
          {
            sourceId: "sitio-turistico-category",
            getItems: async ({ query }) => {
              if (!!query) {
                try {
                  const response = await catchApiListByFilterWhere({path: '/api/sitio-turistico', typeFilter: 'contains', filter: 'categoria', query, draft: true});

                  if (!response.ok) {
                    throw new Error(`HTTP error ${response.status}`);
                  }
                  return await response.json();
                } catch (error) {
                  console.error("Error fetching data:", error);
                  return []; // Retorna un array vacío en caso de error
                }
              } else {
                return Promise.resolve([]); // Retorna una promesa con un array vacío cuando no hay consulta
              }
            },
          },
          {
            sourceId: "blog",
            getItems: async ({ query }) => {
              if (!!query) {
                try {
                  const response = await catchApiListByFilterWhere({path: '/api/blog', typeFilter: 'contains', filter: 'titulo', query, draft: true});

                  if (!response.ok) {
                    throw new Error(`HTTP error ${response.status}`);
                  }
                  return await response.json();
                } catch (error) {
                  console.error("Error fetching data:", error);
                  return []; // Retorna un array vacío en caso de error
                }
              } else {
                return Promise.resolve([]); // Retorna una promesa con un array vacío cuando no hay consulta
              }
            },
          },
          {
            sourceId: "blog-category",
            getItems: async ({ query }) => {
              if (!!query) {
                try {
                  const response = await catchApiListByFilterWhere({path: '/api/blog', typeFilter: 'contains', filter: 'categoria', query, draft: true});
                  if (!response.ok) {
                    throw new Error(`HTTP error ${response.status}`);
                  }
                  return await response.json();
                } catch (error) {
                  console.error("Error fetching data:", error);
                  return []; // Retorna un array vacío en caso de error
                }
              } else {
                return Promise.resolve([]); // Retorna una promesa con un array vacío cuando no hay consulta
              }
            },
          },
        ],
        ...props,
      }),
    [props]
  );


  const formRef = useRef(null)
  const inputRef = useRef(null)
  const panelRef = useRef(null)

  const formProps = autocomplete.getFormProps({
    inputElement: inputRef.current
  })
  const inputProps = autocomplete.getInputProps({
    inputElement: inputRef.current
  })

  function eliminarDuplicados() {
    let fullData = [];
    autocompleteState.collections.map((collection) => {
      let data = [];
      collection.items.map((item) => {
        let dataItem = []
        item.docs.map((doc) => {
          dataItem = [...dataItem, { ...doc, tipo: collection.source.sourceId }]
        })
        data = [...data, ...dataItem]
      });
      fullData = [...fullData, ...data];
    })
    const titulos = new Set();
    return fullData.filter(diccionario => {
      const tituloDuplicado = titulos.has(diccionario.titulo);
      titulos.add(diccionario.titulo);
      return !tituloDuplicado;
    });
  }

  const docs = eliminarDuplicados();

  return (
    <div>
      <div className='flex items-center justify-center p-5'>
        <div className='rounded-lg bg-primary-800 p-5 w-full'>
          <div className='flex'>
            <div className='flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-primary-800 bg-primary-900 p-5'>
              <BsSearch className='pointer-events-none absolute w-5 fill-gray-500 transition' />
            </div>
            <form ref={formRef}  className="flex items-center w-full" {...formProps}>
              <input ref={inputRef} type='text' className='w-full text-primary-100 bg-primary-900 pl-2 text-base font-semibold outline-0' {...inputProps} />
              <input type='button' value='Buscar' className='bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors' />
            </form>
          </div>
        </div>
      </div>  
      {
        autocompleteState.isOpen
          ? <section className="text-gray-600 body-font" ref={panelRef} {...autocomplete.getPanelProps()}>
            <div className="container flex flex-wrap px-5 py-5 mx-auto">
              <div className="w-full">
                {docs.length > 0 && (
                  <div className="flex flex-wrap" {...autocomplete.getListProps()}>
                    {
                      docs.map((item, index) => <ListToursOperators data={item} type={item.tipo} key={index} />)
                    }
                  </div>
                )}
              </div>
            </div>
          </section>
          : <section className="text-gray-600 body-font">
            <div className="container px-5 py-5 mx-auto">
              <div className="flex flex-wrap">
                {
                  docsFind?.map((item, index) => <ListToursOperators data={item} type={item.tipo} key={index} />)
                }
              </div>
            </div>
          </section>
          
      }
    </div>
  )
}