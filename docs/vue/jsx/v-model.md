## v-model

```html
<script>
export default {
  name: 'item',
  data() {
    return {
      show: false,
      list: [1, 2, 3, 4],
      text: '',
    };
  },
  methods: {
    inputss(e) {
      this.text = e.target.value;
    },
  },
  render() {
    return (
      <div>
        <input type="text" value={this.text} onInput={this.inputss} />
        <p>{this.text}</p>
      </div>
    );
  },
};
</script>
```