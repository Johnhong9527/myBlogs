## class,style,ref
```html
render (h) {
  return (
    <div
      // normal attributes or component props.
      id="foo"
      // DOM properties are prefixed with `domProps`
      domPropsInnerHTML="bar"
      // event listeners are prefixed with `on` or `nativeOn`
      onClick={this.clickHandler}
      nativeOnClick={this.nativeClickHandler}
      // other special top-level properties
      class={{ foo: true, bar: false }}
      style={{ color: 'red', fontSize: '14px' }}
      key="key"
      ref="ref"
      // assign the `ref` is used on elements/components with v-for
      refInFor
      slot="slot">
    </div>
  )
}
```
