<template>
  <el-col :span="24">
    <el-card class="box-card" shadow="hover" style="margin: 10px 0;">
      <el-row :gutter="16">
        <el-col :span="20">{{ item.title }}</el-col>
        <el-col :span="4">
          <el-button @click="handleRemove" type="danger" icon="el-icon-check" circle></el-button>
        </el-col>
      </el-row>
    </el-card>
  </el-col>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  methods: {
    handleRemove() {
      this.$emit('remove-item', this.item);
    }
  }
}
</script>
