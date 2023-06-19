import BaseTemplate from './components/templates/base/BaseTemplate';
import { mockBaseTemplateProps } from './components/templates/base/BaseTemplate.mocks';

export default function Home() {
  return (
    <main>
      <BaseTemplate
        sampleTextProp={mockBaseTemplateProps.base.sampleTextProp}
      />
    </main>
  );
}
