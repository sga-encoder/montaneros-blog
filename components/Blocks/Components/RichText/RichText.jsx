import { H1Component, H2Component, H3Component, H4Component, H5Component, H6Component } from './RichComponents/HeadComponent';
import { UlComponent, OlComponent, LiComponent } from './RichComponents/ListComponent';
import IndentComponent from './RichComponents/IndentComponent';
import UploadComponent from './RichComponents/UploadComponent';
import RelationshipComponent from './RichComponents/RelationshipComponent';
import PComponent from './RichComponents/PComponent';

const componentMap = {
  h1: H1Component,
  h2: H2Component,
  h3: H3Component,
  h4: H4Component,
  h5: H5Component,
  h6: H6Component,
  ul: UlComponent,
  ol: OlComponent,
  li: LiComponent,
  indent: IndentComponent,
  upload: UploadComponent,
  relationship: RelationshipComponent,
};

export default function RichText({ data }) {
  return (
    <>
      {data.map((item, index) => {
        const Component = componentMap[item.type];
        return Component ? <Component key={index} item={item} /> : <PComponent key={index} item={item} />;
      })}
    </>
  );
}