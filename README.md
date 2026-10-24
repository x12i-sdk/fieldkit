# @x12i/fieldkit usage example

Generic field-rendering toolbox for React: pass a record and a JSON FieldMap, get a painted record. No domain vocabulary inside; it all lives on the map.

This consuming application demonstrates **render an application record through an explicit field map** using the published npm package, pinned to `2.13.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Render a record from a JSON FieldMap in a React host.
- Change field presentation through the map while keeping business vocabulary outside the rendering toolbox.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/fieldkit)
- [Implementation monorepo](https://github.com/x12i/fieldkit)
- [Reviewed package source](https://github.com/x12i/fieldkit/tree/3f28b264b41e8617037f1467f8df41adc9872dcc/packages/fieldkit)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## Rendered fixture

Run the example, then open its generated `preview.html` or `workflow.svg`. The checks establish static rendering or SVG export for the authored fixture. Browser effects, interactions, responsive layout and deployed service behavior are not covered by this check. The host fixture contains no real customer data.
