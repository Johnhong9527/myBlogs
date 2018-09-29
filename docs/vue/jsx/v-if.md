## v-if

```html
<script>
export default {
  name: 'vif',
  props: {
    id: {
      type: Number,
      default: 1,
    },
  },
  render() {
    const hText = `<h${this.id}>${this.$slots.default[0].text}</h${this.id}>`;
    let ifText;
    if (this.id > 3) {
      ifText = <p>你帅</p>;
    } else {
      ifText = <p>你丑</p>;
    }
    return (
      <div>
        <div domPropsInnerHTML={hText} />
        <hr />
        <div>{this.id > 3 ? '你帅' : '你丑'}</div>
        <hr />
        <div>{ifText}</div>
      </div>
    );
  },
};
</script>
```
