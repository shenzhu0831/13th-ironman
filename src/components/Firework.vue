<template>
  <div class="Firework">
    <p class="congratulations">Congratulations!!</p>
    <div class="fireworks_group">
      <div class="firework">
        <div class="explosion"><div class="spark green"></div></div>
        <div class="explosion"><div class="spark blue"></div></div>
        <div class="explosion"><div class="spark red"></div></div>
        <div class="explosion"><div class="spark red"></div></div>
        <div class="explosion"><div class="spark yellow"></div></div>
        <div class="explosion"><div class="spark blue"></div></div>
        <div class="explosion"><div class="spark green"></div></div>
        <div class="explosion"><div class="spark yellow"></div></div>
      </div>
      <div class="firework" style="margin-top: -70px">
        <div class="explosion"><div class="spark green"></div></div>
        <div class="explosion"><div class="spark blue"></div></div>
        <div class="explosion"><div class="spark red"></div></div>
        <div class="explosion"><div class="spark red"></div></div>
        <div class="explosion"><div class="spark yellow"></div></div>
        <div class="explosion"><div class="spark blue"></div></div>
        <div class="explosion"><div class="spark green"></div></div>
        <div class="explosion"><div class="spark yellow"></div></div>
      </div>
      <div class="firework">
        <div class="explosion"><div class="spark green"></div></div>
        <div class="explosion"><div class="spark blue"></div></div>
        <div class="explosion"><div class="spark red"></div></div>
        <div class="explosion"><div class="spark red"></div></div>
        <div class="explosion"><div class="spark yellow"></div></div>
        <div class="explosion"><div class="spark blue"></div></div>
        <div class="explosion"><div class="spark green"></div></div>
        <div class="explosion"><div class="spark yellow"></div></div>
      </div>
      <div class="firework" style="margin-top: 70px">
        <div class="explosion"><div class="spark green"></div></div>
        <div class="explosion"><div class="spark blue"></div></div>
        <div class="explosion"><div class="spark red"></div></div>
        <div class="explosion"><div class="spark red"></div></div>
        <div class="explosion"><div class="spark yellow"></div></div>
        <div class="explosion"><div class="spark blue"></div></div>
        <div class="explosion"><div class="spark green"></div></div>
        <div class="explosion"><div class="spark yellow"></div></div>
      </div>
      <div class="firework">
        <div class="explosion"><div class="spark green"></div></div>
        <div class="explosion"><div class="spark blue"></div></div>
        <div class="explosion"><div class="spark red"></div></div>
        <div class="explosion"><div class="spark red"></div></div>
        <div class="explosion"><div class="spark yellow"></div></div>
        <div class="explosion"><div class="spark blue"></div></div>
        <div class="explosion"><div class="spark green"></div></div>
        <div class="explosion"><div class="spark yellow"></div></div>
      </div>
      <div class="firework" style="margin-top: -70px">
        <div class="explosion"><div class="spark green"></div></div>
        <div class="explosion"><div class="spark blue"></div></div>
        <div class="explosion"><div class="spark red"></div></div>
        <div class="explosion"><div class="spark red"></div></div>
        <div class="explosion"><div class="spark yellow"></div></div>
        <div class="explosion"><div class="spark blue"></div></div>
        <div class="explosion"><div class="spark green"></div></div>
        <div class="explosion"><div class="spark yellow"></div></div>
      </div>
      <div class="firework">
        <div class="explosion"><div class="spark green"></div></div>
        <div class="explosion"><div class="spark blue"></div></div>
        <div class="explosion"><div class="spark red"></div></div>
        <div class="explosion"><div class="spark red"></div></div>
        <div class="explosion"><div class="spark yellow"></div></div>
        <div class="explosion"><div class="spark blue"></div></div>
        <div class="explosion"><div class="spark green"></div></div>
        <div class="explosion"><div class="spark yellow"></div></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.Firework {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba($color: #18202a, $alpha: 0.8);
  overflow: hidden;
}

.congratulations {
  text-align: center;
  color: #fff;
  position: absolute;
  top: 300px;
  left: 0;
  right: 0;
  font-family: sans-serif;
  font-size: 52px;
  font-weight: 800;
  margin: auto;
  letter-spacing: 5px;
}

.fireworks_group {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  .firework {
    position: relative;
    top: 0px;
    left: 0px;
    margin: 0px 50px;

    &:before {
      content: "";
      display: block;
      border-radius: 5px;
      background-color: skyblue;
      width: 5px;
      height: 0px;
      will-change: transform;
      transform: translateY(1000px);
      animation: fireworkstart 3s ease-out infinite;
    }

    .explosion {
      position: absolute;
      top: 0;
      width: 5px;
      height: 20px;
      opacity: 0;
      transform-origin: top center;
      will-change: transform;
      animation: explosion 0.7s linear 3s infinite;

      &:nth-child(1) {
        transform: rotate(0deg);
      }

      &:nth-child(2) {
        transform: rotate(90deg);
      }

      &:nth-child(3) {
        transform: rotate(180deg);
      }

      &:nth-child(4) {
        transform: rotate(-90deg);
      }

      &:nth-child(5) {
        transform: rotate(45deg);
      }

      &:nth-child(6) {
        transform: rotate(-45deg);
      }

      &:nth-child(7) {
        transform: rotate(135deg);
      }

      &:nth-child(8) {
        transform: rotate(225deg);
      }

      .spark {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 5px;
        will-change: transform;
        animation: explosion2 0.7s ease-in-out 3s infinite;

        &.red {
          background-color: #e91e63;
        }

        &.blue {
          background-color: skyblue;
        }

        &.green {
          background-color: limegreen;
        }

        &.yellow {
          background-color: yellow;
        }

        &.purple {
          background-color: purple;
        }
      }
    }
  }
}

@keyframes fireworkstart {
  0% {
    height: 0px;
    transform: translateY(1000px);
  }

  50% {
    height: 50px;
  }

  75% {
    height: 30px;
  }

  100% {
    height: 0;
    transform: translateY(0);
  }
}

@keyframes explosion {
  0% {
    height: 0px;
    opacity: 0;
  }

  50% {
    height: 25px;
    opacity: 1;
  }

  100% {
    height: 0px;
    opacity: 0;
  }
}

@keyframes explosion2 {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(5px);
  }

  75% {
    transform: translateY(50px);
  }

  100% {
    transform: translateY(70px);
  }
}
</style>
