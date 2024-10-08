<script lang="ts" setup>
import etherLogoIcon from "../../assets/logo/ether_logo.svg"
import dataSourcesIcon from "../../assets/icons/data-sources-icon.svg"
import titleEditorIcon from "../../assets/icons/title-editor-icon.svg"
import graphicsControlIcon from "../../assets/icons/graphics-control-icon.svg"
</script>

<template>
  <header>
    <nav>
      <router-link :to="{name:'mainView'}" class="nav__link__main">
        <etherLogoIcon class="nav__link__icon"></etherLogoIcon>
      </router-link>

      <router-link :to="{name:'titleEditorPage'}" class="nav__link">
        <titleEditorIcon class="nav__link__icon"></titleEditorIcon>
      </router-link>
      <router-link :to="{name:'dataSourcesPage'}" class="nav__link">
        <dataSourcesIcon class="nav__link__icon"></dataSourcesIcon>
      </router-link>
      <router-link :to="{name:'graphicsControlPage'}" class="nav__link">
        <graphicsControlIcon class="nav__link__icon"></graphicsControlIcon>
      </router-link>
    </nav>
  </header>
</template>

<style scoped>
header {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  background-color: var(--background-secondary);

  //border-top: var(--text-primary) 1px solid;
  border-bottom: var(--outline-ui) 1px solid;

  background-image: url("../../assets/logo/ether_text_logo.svg");
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: auto 90%;

  nav {
    display: flex;
    align-items: center;
    padding: 8px;
    gap: 8px;
    user-select: none;


    .nav__link__main {
      padding-right: 16px;
      border-right: 1px solid var(--text-primary);
    }

    .nav__link {
      position: relative;
      flex: 0 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .nav__link.nav__link__main {
      .nav__link__icon {
        height: 40px;
      }
    }

    .nav__link::after {
      position: absolute;
      display: block;
      bottom: -6px;
      height: 2px;
      width: 100%;
      background-color: var(--text-primary);

      transform: scaleX(0);
      transform-origin: center;
      transition: transform 92ms;
      content: '';
    }

    .nav__link.router-link-active::after {
      transform: scaleX(1);
    }
  }
}
</style>