import RichText from '../RichText';

export function OlComponent({ item }) {
  return (
    <ol className='list-decimal list-inside'>
      <RichText data={[...item.children]} />
    </ol>
  );
}

export function UlComponent({ item }) {
  return (
    <ul className="list-disc list-inside">
      <RichText data={[...item.children]} />
    </ul>
  );
}

export function LiComponent({ item }) {
  return (
    <li className='text-primary-100'>
      <RichText data={[[...item.children]]} />
    </li>
  );
}