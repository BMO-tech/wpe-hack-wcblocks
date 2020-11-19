import { newSpecPage } from '@stencil/core/testing';
import { WcbHero } from '../wcb-hero';

describe('wcb-hero', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcbHero],
      html: `<wcb-hero></wcb-hero>`,
    });
    expect(page.root).toEqualHtml(`
      <wcb-hero>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wcb-hero>
    `);
  });
});
