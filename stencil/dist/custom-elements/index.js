import { attachShadow, h, Host, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath } from '@stencil/core/internal/client';

const wcbHeroCss = ":host{display:flex;padding:0 4em 0 4em;justify-content:space-between;align-items:center;background-color:black;color:whitesmoke;min-height:15em}";

const WcbHero = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    attachShadow(this);
  }
  render() {
    return (h(Host, null, h("div", { style: { backgroundImage: "url('" + this.backgroundUrl + "')" } }, h("h1", null, this.heading), h("p", null, "Hello World"), h("p", null, this.ctaText))));
  }
  static get style() { return wcbHeroCss; }
};

const WcbHero$1 = /*@__PURE__*/proxyCustomElement(WcbHero, [1,"wcb-hero",{"heading":[1],"ctaText":[1,"cta-text"],"backgroundUrl":[1,"background-url"]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      WcbHero$1
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { WcbHero$1 as WcbHero, defineCustomElements };
