import RichText from '../RichText';

export default function IndentComponent({ item }) {
  return (
    <div className="ml-8">
      <RichText data={[[...item.children]]} />
    </div>
  );
}