## v-for

```html
<script>
export default {
  name: 'vif',
  data() {
    return {
      show: false,
      list: [1, 2, 3, 4],
    };
  },
  render() {
    return (
      <div>
        {this.list.map((v) => {
          return <p>{v}</p>;
        })}
      </div>
    );
  },
};
</script>
```