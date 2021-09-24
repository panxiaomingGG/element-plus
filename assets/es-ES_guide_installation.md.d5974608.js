import{o as a,c as n,e as s,b as t,d as e}from"./app.7f6f9a20.js";const p='{"title":"Instalación","description":"","frontmatter":{"title":"Instalación"},"headers":[{"level":2,"title":"Compatibilidad","slug":"compatibilidad"},{"level":3,"title":"Versión","slug":"version"},{"level":2,"title":"Usando el gestor de paquetes","slug":"usando-el-gestor-de-paquetes"},{"level":2,"title":"Importar en el navegador","slug":"importar-en-el-navegador"},{"level":3,"title":"unpkg","slug":"unpkg"},{"level":3,"title":"jsDelivr","slug":"jsdelivr"},{"level":2,"title":"Hola mundo","slug":"hola-mundo"}],"relativePath":"es-ES/guide/installation.md","lastUpdated":1632497899843}',o={},r=[s('<h1 id="instalacion" tabindex="-1">Instalación <a class="header-anchor" href="#instalacion" aria-hidden="true">#</a></h1><h2 id="compatibilidad" tabindex="-1">Compatibilidad <a class="header-anchor" href="#compatibilidad" aria-hidden="true">#</a></h2><p>Element Plus puede ejecutarse en navegadores que soporten <a href="https://caniuse.com/?feats=mdn-javascript_builtins_regexp_dotall,mdn-javascript_builtins_regexp_lookbehind_assertion,mdn-javascript_builtins_regexp_named_capture_groups,mdn-javascript_builtins_regexp_property_escapes,mdn-javascript_builtins_symbol_asynciterator,mdn-javascript_functions_method_definitions_async_generator_methods,mdn-javascript_grammar_template_literals_template_literal_revision,mdn-javascript_operators_destructuring_rest_in_objects,mdn-javascript_operators_spread_spread_in_destructuring,promise-finally" target="_blank" rel="noopener noreferrer">ES2018</a> y <a href="https://caniuse.com/resizeobserver" target="_blank" rel="noopener noreferrer">ResizeObserver</a>. Si realmente necesitas soportar navegadores desactualizados, por favor añade <a href="https://babeljs.io/" target="_blank" rel="noopener noreferrer">Babel</a> y Polyfill tú mismo.</p><p>Dado que Vue 3 ya no soporta IE11, Element Plus tampoco soporta IE.</p><table><thead><tr><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png" alt="IE"></th><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png" alt="Firefox"></th><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png" alt="Chromo"></th><th><img src="https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png" alt="Safari"></th></tr></thead><tbody><tr><td>Borde ± 79</td><td>Firefox ≥ 78</td><td>Chrome ≥ 64</td><td>Safari ≥ 12</td></tr></tbody></table><h3 id="version" tabindex="-1">Versión <a class="header-anchor" href="#version" aria-hidden="true">#</a></h3><p>Element Plus se encuentra actualmente en una rápida iteración de desarrollo.</p><p><a href="https://www.npmjs.org/package/element-plus" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/v/element-plus.svg?style=flat-square" alt="Insignia de versión ElementPlus"></a></p><h2 id="usando-el-gestor-de-paquetes" tabindex="-1">Usando el gestor de paquetes <a class="header-anchor" href="#usando-el-gestor-de-paquetes" aria-hidden="true">#</a></h2><p><strong>Recomendamos usar el gestor de paquetes (NPM, <a href="https://classic.yarnpkg.com/lang/en/" target="_blank" rel="noopener noreferrer">Yarn</a>, <a href="https://pnpm.io/" target="_blank" rel="noopener noreferrer">pnpm</a>) para instalar Element Plus</strong>, para que pueda utilizar bundlers como <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">Vite</a> y <a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer">webpack</a>.</p><div class="language-shell"><pre><code><span class="token comment"># Elige un gestor de paquetes que te guste.</span>\n\n<span class="token comment"># NPM</span>\n$ <span class="token function">npm</span> <span class="token function">install</span> element-plus --save\n\n<span class="token comment"># Yarn</span>\n$ <span class="token function">yarn</span> <span class="token function">add</span> element-plus\n\n<span class="token comment"># pnpm</span>\n$ <span class="token function">pnpm</span> <span class="token function">install</span> element-plus\n</code></pre></div><p>Si su entorno de red no es bueno, se recomienda utilizar un registro de réplica <a href="https://github.com/cnpm/cnpm" target="_blank" rel="noopener noreferrer">cnpm</a> o <a href="https://registry.npm.taobao.org" target="_blank" rel="noopener noreferrer">Alibaba</a>.</p><h2 id="importar-en-el-navegador" tabindex="-1">Importar en el navegador <a class="header-anchor" href="#importar-en-el-navegador" aria-hidden="true">#</a></h2><p>Import Element Plus through browser HTML tags directly, and use global variable <code>ElementPlus</code>.</p><p>Según diferentes proveedores de CDN, existen diferentes métodos de introducción. Aquí usamos <a href="https://unpkg.com" target="_blank" rel="noopener noreferrer">unpkg</a> y <a href="https://jsdelivr.com" target="_blank" rel="noopener noreferrer">jsDelivr</a> como ejemplo. También puede utilizar otros proveedores CDN.</p><h3 id="unpkg" tabindex="-1">unpkg <a class="header-anchor" href="#unpkg" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!</span> <span class="token attr-name">-</span> <span class="token attr-name">Estilo</span> <span class="token attr-name">de</span> <span class="token attr-name">importación</span> <span class="token attr-name">--</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/element-plus/dist/index.css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!</span> <span class="token attr-name">-</span> <span class="token attr-name">Importar</span> <span class="token attr-name">Vue</span> <span class="token attr-name">3</span> <span class="token attr-name">--</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/vue@next<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!</span> <span class="token attr-name">-</span> <span class="token attr-name">Importar</span> <span class="token attr-name">librería</span> <span class="token attr-name">de</span> <span class="token attr-name">componentes</span> <span class="token attr-name">--</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//unpkg.com/element-plus<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h3 id="jsdelivr" tabindex="-1">jsDelivr <a class="header-anchor" href="#jsdelivr" aria-hidden="true">#</a></h3><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!</span> <span class="token attr-name">-</span> <span class="token attr-name">Estilo</span> <span class="token attr-name">de</span> <span class="token attr-name">importación</span> <span class="token attr-name">--</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>\n    <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>\n    <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/element-plus/dist/index.css<span class="token punctuation">&quot;</span></span>\n  <span class="token punctuation">/&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!</span> <span class="token attr-name">-</span> <span class="token attr-name">Importar</span> <span class="token attr-name">Vue</span> <span class="token attr-name">3</span> <span class="token attr-name">--</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/vue@next<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>!</span> <span class="token attr-name">-</span> <span class="token attr-name">Importar</span> <span class="token attr-name">librería</span> <span class="token attr-name">de</span> <span class="token attr-name">componentes</span> <span class="token attr-name">--</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/element-plus<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Recomendamos usar CDN para importar usuarios de Element Plus para bloquear la versión en la dirección del enlace, para no verse afectado por actualizaciones incompatibles cuando Element Plus se actualice en el futuro. Por favor, compruebe <a href="https://unpkg.com" target="_blank" rel="noopener noreferrer">unpkg.com</a> para el método para bloquear la versión.</p></div><h2 id="hola-mundo" tabindex="-1">Hola mundo <a class="header-anchor" href="#hola-mundo" aria-hidden="true">#</a></h2><p>With CDN, we can easily use Element Plus to write a Hello world page. <a href="https://codepen.io/iamkun/pen/YzWMaVr" target="_blank" rel="noopener noreferrer">Demo en línea</a></p>',22),t("iframe",{height:"469",style:{width:"100%"},scrolling:"no",title:"YzWMaVr",src:"https://codepen.io/iamkun/embed/YzWMaVr?height=469&theme-id=light&default -tab=html,result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true",mark:"crwd-mark"},"\n  Ver Pen <a href='https://codepen.io/iamkun/pen/YzWMaVr'>YzWMaVr</a> por iamkun\n  (<a href='https://codepen.io/iamkun'>@iamkun</a>) en <a href='https://codepen.io'>CodePen</a>.\n",-1),t("p",null,[e("Si está instalando a través del gestor de paquetes y quiere usarlo con una herramienta de empaquete, por favor lea la siguiente sección: "),t("a",{href:"/en-US/guide/quickstart.html"},"Inicio rápido"),e(".")],-1)];o.render=function(s,t,e,p,o,l){return a(),n("div",null,r)};export{p as __pageData,o as default};