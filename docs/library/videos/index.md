# 留一些记忆

<video id="video" controls :muted='true' preload="metadata">
      <source id="mp4" src="lic../../pub/罗小黑Daily.mp4" type="video/mp4">
</video>

<script setup lang="ts">
import sidebar from "../../.vitepress/config/index.json"
</script>

<nav-ul :list="sidebar.videos"></nav-ul>
