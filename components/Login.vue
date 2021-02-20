<template>
  <div class="login">
    <el-button type="text" @click="centerDialogVisible = true">
      登录
    </el-button>

    <el-dialog
      title="提示"
      :visible.sync="centerDialogVisible"
      width="30%"
      center
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item>
          <div slot="label">
            <i class="fa fa-address-book" />
          </div>
          <el-input />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      centerDialogVisible: false
    }
  }
}
</script>

<style scoped>

</style>
