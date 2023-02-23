# Deprecation Notice

This package has been deprecated and is no longer maintained. It has been moved to a new repository and is now part of a larger project. Please update your dependencies to use the new package instead.

New package repository: https://github.com/CrystallizeAPI/reactjs-components

Thank you for using this package!

--- 

![alt text](https://raw.githubusercontent.com/CrystallizeAPI/react-content-transformer/HEAD/media/logo.png 'Pie with slice')

# React Crystallize Content Transformer

Transform Crystallize rich text json to React html components. Makes it easy to build React Commerce solutions with [Product Information Management](https://crystallize.com/product/product-information-management) powered by [Crystallize](https://crystallize.com) that enable [Fast Ecommerce API](https://crystallize.com/product/graphql-commerce-api).

## In Typescript

```
import { ContentTransformer, NodeContent, Overrides, NodeProps } from '@crystallize/react-content-transformer';

const overrides: Overrides = {
  link: (props: NodeProps) => (
    <a href={props.metadata?.href}>
      <NodeContent {...props} />
    </a>
  ),
};

<ContentTransformer json={richTextJson} overrides={overrides} />
```

## In Javascript

```
import { ContentTransformer, NodeContent } from '@crystallize/react-content-transformer';

const overrides = {
  link: props => <a href={props.metadata.href}><NodeContent {...props} /></a>
};

<ContentTransformer json={richTextJson} overrides={overrides} />
```
