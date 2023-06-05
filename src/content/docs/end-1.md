---
title: "Designed with Astro.js"
---

**Next time I'll tell you about new framework**

## [Astro.js](https://astro.build/)

<div style="font-size: 14px">

```jsx
---
import { Brands } from '../components/brands';

import './style.scss';

export interface Props {
  className: string;
  classNameContent: string;
  withRoundedCorners?: boolean;
}

const { className, classNameContent, withRoundedCorners } = Astro.props;

---

<section class:list={['block', { rounded: withRoundedCorners }, className]}>
  <div class:list={['content', classNameContent]}>
    <Brands client:only="react" />
    <slot />
  </div>
</section>

<style>
  html, body {
    padding: 0;
    margin: 0;
  }
</style>

<script type="module">
  console.log('Hello from Astro!')
</script>

```

</div>
