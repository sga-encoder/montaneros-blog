import RichText from "../RichText";

export function H1Component({ item }) {
  return (
    <h1
      className="text-7xl font-titulo font-black text-primary-100 mb-6"
    >
      <RichText data={[[...item.children]]} />
    </h1>
  );
}

export function H2Component({ item }) {
  return (
    <h2
      className="text-6xl font-titulo font-black text-primary-100 mb-6"
    >
      <RichText data={[[...item.children]]} />
    </h2>
  );
}

export function H3Component({ item }) {
  return (
    <h3
      className="text-5xl font-titulo font-black text-primary-100 mb-6"
    >
      <RichText data={[[...item.children]]} />
    </h3>
  );
}

export function H4Component({ item }) {
  return (
    <h4
      className="text-4xl font-titulo font-black text-primary-100 mb-6"
    >
      <RichText data={[[...item.children]]} />
    </h4>
  );
}

export function H5Component({ item }) {
  return (
    <h5
      className="text-3xl font-titulo font-black text-primary-100 mb-6"
    >
      <RichText data={[[...item.children]]} />
    </h5>
  );
}

export function H6Component({ item }) {
  return (
    <h6
      className="text-2xl font-titulo font-black text-primary-100 mb-6"
    >
      <RichText data={[[...item.children]]} />
    </h6>
  );
}


