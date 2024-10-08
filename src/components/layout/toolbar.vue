<script lang="ts" setup>
import MinimizeIcon from "../../assets/icons/window-controls/minimize.svg";
import MaximizeIcon from "../../assets/icons/window-controls/maximize.svg";
import CloseIcon from "../../assets/icons/window-controls/close.svg";

function minimizeWindow() {
  window.windowControls.minimize();
}

function maximizeWindow() {
  window.windowControls.maximize();
}

function closeWindow() {
  window.windowControls.close();
}
</script>

<template>
  <div class="toolbar__wrapper">
    <button class="windowControl__action" type="button">
      <MinimizeIcon class="windowControl__action__icon" height="20px" @click="minimizeWindow()"></MinimizeIcon>
    </button>
    <button class="windowControl__action" type="button">
      <MaximizeIcon class="windowControl__action__icon" height="20px" @click="maximizeWindow()"></MaximizeIcon>
    </button>
    <button class="windowControl__action" type="button">
      <CloseIcon class="windowControl__action__icon" color="#A83742" height="20px" @click="closeWindow()"></CloseIcon>
    </button>
  </div>
</template>

<style scoped>
.toolbar__wrapper {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
  background-color: #fff;
  //background-color: var(--background-secondary);

  -webkit-app-region: drag;

  .windowControl__action {
    padding: 0 8px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
    color: var(--background-primary);
    background-color: transparent;

    -webkit-app-region: no-drag;

    &:hover {
      .windowControl__action__icon {
        transform: scale(1.1);
      }
    }
    .windowControl__action__icon {
      transition: transform 92ms ease;
    }
  }
}
</style>