<template>
  <el-col :span="24">
    <el-card class="box-card" shadow="hover" style="margin: 10px 0;">
      <el-row :gutter="16">
        <el-col :span="20">{{ todo }}</el-col>
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
    todo: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    handleRemove() {
      this.$emit('remove-todo', this.index);
    }
  }
}
</script>
