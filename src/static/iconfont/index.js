import {createGlobalStyle} from 'styled-components';
export const IconfontStyle = createGlobalStyle `
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1560763692380'); /* IE9 */
  src: url('iconfont.eot?t=1560763692380#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('iconfont.woff?t=1560763692380') format('woff'),
  url('iconfont.ttf?t=1560763692380') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1560763692380#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  // font-size: 26px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`
