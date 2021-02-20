<template>
  <div class="login">
    <span class="login-text" @click="handleClick">
      登录
    </span>

    <el-dialog
      title="提示"
      :visible.sync="centerDialogVisible"
      width="30%"
      center
      :append-to-body="true"
    >
      <el-form ref="form" label-width="80px">
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
      form: {},
      centerDialogVisible: false
    }
  },
  methods: {
    handleClick () {
      this.centerDialogVisible = true
    }
  }
}
</script>

<style scoped>
.login-text{
  font-size:18px;
}

</style>
