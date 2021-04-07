![alt text](https://raw.githubusercontent.com/CrystallizeAPI/react-content-transformer/HEAD/media/logo.png 'Pie with slice')

# React Crystallize Content Transformer

Transform Crystallize rich text json to React html components. Makes it easy to build React Commerce solutions with [Product Information Management](https://crystallize.com/product/product-information-management) powered by [Crystallize](https://crystallize.com) that enable [Fast Ecommerce API](https://crystallize.com/product/graphql-commerce-api).

```
import { ContentTransformer, NodeContent  } from '@crystallize/react-transformer/react';

const overrides = {
  link: props => <a href={props.metadata.href}><NodeContent {...props} /></a>
};

<ContentTransformer json={richTextJson} overrides={overrides} />
```
