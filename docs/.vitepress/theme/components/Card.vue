<template>
  <!-- 使用 component 动态切换根元素：有 link 则渲染为 <a>，否则为 <article> -->
  <component
    :is="props.link ? 'a' : 'article'"
    class="info-card"
    :href="props.link"
    :target="props.linkTarget"
    rel="noreferrer noopener"
  >
    <div class="info-card-header">
      <div class="info-card-titles">
        <!-- 标题：卡片的主标题 -->
        <h3 class="info-card-title">{{ props.title }}</h3>
        <!-- 副标题：用于补充说明标题内容 -->
        <p v-if="props.subtitle" class="info-card-subtitle">{{ props.subtitle }}</p>
      </div>
      <!-- 可选图片：显示在标题右侧 -->
      <img v-if="props.image" :src="props.image" class="info-card-image" alt="card image" />
    </div>

    <!-- 描述内容：卡片主体文本 -->
    <p v-if="props.description" class="info-card-description">{{ props.description }}</p>

    <!-- 标签列表：用于展示关键标签或特性 -->
    <div v-if="props.tags?.length" class="info-card-tags">
      <span v-for="tag in props.tags" :key="tag" class="info-card-tag">{{ tag }}</span>
    </div>

    <!-- 底部说明：用于附加提示或补充信息 -->
    <div v-if="props.footer" class="info-card-footer">{{ props.footer }}</div>
  </component>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from 'vue'

const props = withDefaults(defineProps<{
  title: string // 卡片主标题，必填
  subtitle?: string // 副标题，可选，用于补充说明
  description?: string // 主要描述文本，可选
  tags?: string[] // 标签数组，可选，用于显示短标签
  footer?: string // 底部说明，可选
  image?: string // 图片地址，可选
  link?: string // 点击后跳转的链接，可选
  linkTarget?: string // 链接打开目标，默认 '_self'
}>(), {
  linkTarget: '_self'
})
</script>

<style scoped>
.info-card {
  display: block;
  text-decoration: none;
  border: 1px solid var(--vp-c-divider);
  border-radius: 20px;
  padding: 22px;
  background: var(--vp-canvas-bg);
  box-shadow: 0 18px 42px rgba(15, 23, 42, 0.06);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  color: inherit;
}

.info-card:hover {
  transform: translateY(-3px);
  border-color: var(--vp-c-brand-emphasis);
  box-shadow: 0 22px 52px rgba(15, 23, 42, 0.1);
  cursor: pointer;
}

.info-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 14px;
}

.info-card-titles {
  min-width: 0;
}

.info-card-title {
  margin: 0 0 6px;
  font-size: 1.5rem;
  color: var(--vp-c-heading);
}

.info-card-subtitle {
  margin: 0;
  color: var(--vp-c-text-secondary);
  font-size: 0.8rem;
}

.info-card-image {
  width: 68px;
  height: 68px;
  object-fit: cover;
  border-radius: 14px;
  border: 1px solid var(--vp-c-divider);
}

.info-card-description {
  margin: 0 0 14px;
  color: var(--vp-c-text-primary);
  line-height: 1.8;
}

.info-card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 1px;
}

.info-card-tag {
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  border-radius: 999px;
  background: rgba(59, 130, 246, 0.12);
  color: var(--vp-c-brand-emphasis);
  font-size: 0.85rem;
}

.info-card-footer {
  padding-top: 14px;
  border-top: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-secondary);
  font-size: 0.95rem;
}
</style>
