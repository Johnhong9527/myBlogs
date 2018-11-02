<template>
  <div class="continuar">
    <div class="table">
      <div v-for="(item,index) in letter" :key="index" class="tr">
        <div v-for="i in [0,1,2,3,4,5,6]" :key='i' ref="td" @click="btn(item+i,digital[item]+i)"
          class="td">
        </div>
      </div>
    </div>
    <div class="enter">
      <input type="text" placeholder="A0" v-model="enter" maxlength="2"
        @keyup.enter="btn" id="coordinate" value="">
      <div class="btn" @click="btn">输入</div>
      <div class="btn reload" @click="reload">重置</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      letter: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
      digital: { A: 0, B: 7, C: 14, D: 21, E: 28, F: 35, G: 42 },
      enter: '',
      ships: {
        0: Math.floor(Math.random() * 48),
        1: Math.floor(Math.random() * 48),
        2: Math.floor(Math.random() * 48),
      },
    };
  },
  methods: {
    /**
     * 获取点击元素在父元素中的下标
     * @param {String} enters 坐标~~如:A6
     * @param {Number} index 被点击目标的下标
     */
    btn(enters, index) {
      // 创建正则,匹配输入坐标是否符合格式要求如: A6
      let patt1 = new RegExp(/^[a-g][0-6]/i);
      let coordinateNumber, coordinateText;
      if (enters.length == 2) {
        // 同步更新输入框中的坐标,可关闭
        this.enter = enters;
        // 判断玩家输入的坐标上,是否有战舰存在,如果有的话,就击沉战舰
        this.setAttribute(index);
        return;
      } else if (patt1.test(this.enter)) {
        // 截取字符串中的首位,将其转化为大写字母
        coordinateText = this.enter[0].toUpperCase();
        // 玩家输入的战舰坐标
        coordinateNumber =
          Number.parseInt(this.digital[coordinateText]) +
          Number.parseInt(this.enter[1]);
        // 判断玩家输入的坐标上,是否有战舰存在,如果有的话,就击沉战舰
        this.setAttribute(coordinateNumber);
      } else {
        alert('请输入正确的坐标;\n如: A6!');
      }
    },
    /**
     * 为目标元素替换类名
     * @param {Number} coordinateNumber 被点击目的的下标: 例如 45
     */
    setAttribute(coordinateNumber) {
      let getClassName = this.$refs.td[coordinateNumber]
        .getAttribute('class')
        .split(' ');
      if (getClassName.length > 1) {
        alert(`该区域已经${getClassName[0]},请切换其他空白区域!`);
        return;
      }

      if (
        this.ships[0] === coordinateNumber ||
        this.ships[1] === coordinateNumber ||
        this.ships[2] === coordinateNumber
      ) {
        // 击沉战舰
        this.$refs.td[coordinateNumber].setAttribute('class', 'ship td');
      } else {
        // 没有击沉战舰
        this.$refs.td[coordinateNumber].setAttribute('class', 'miss td');
      }
    },
    /**
     * 重置this.data中部分kay的value
     */
    reload() {
      this.enter = '';
      for (let i in this.ships) {
        this.ships[i] = Math.floor(Math.random() * 48);
      }
      for (let i in this.$refs.td) {
        this.$refs.td[i].setAttribute('class', 'td');
      }
    },
  },
};
</script>
<style scoped>
.continuar {
  margin: 0;
  width: 650px;
  position: relative;
  height: 650px;
  background: url('/images/js/2018_11_02/board.jpg') no-repeat;
  background-size: contain;
}

.table {
  margin: 0 auto;
  padding-top: 62px;
  padding-left: 106px;
}

.tr {
  display: flex;
}

.tr .td {
  flex: 0 0 62px;
  height: 61px;
  line-height: 61px;
  text-align: center;
  color: white;
  box-sizing: border-box;
}

.td.ship {
  background: url('/images/js/2018_11_02/ship.png') no-repeat;
  background-size: 70%;
  background-position: center;
}

.td.miss {
  background: url('/images/js/2018_11_02/miss.png') no-repeat;
  background-size: 70%;
  background-position: center;
}

.enter {
  position: absolute;
  right: 5px;
  top: 5px;
  display: flex;
  padding: 5px;
  margin-left: 0;
  margin-right: auto;
}

.enter input {
  height: 35px;
  color: #000000;
  background-color: rgb(159, 255, 48);
  display: block;
  float: left;
  border: 0;
}

.enter .btn {
  height: 25px;
  float: left;
  padding: 0 5px;
  cursor: pointer;
  font-size: 12px;
  color: aliceblue;
  margin-left: 5px;
  line-height: 25px;
  user-select: none;
  text-align: center;
  background-color: #41510d;
  border: 5px solid #46e234;
}
</style>

