<template>
  <div class="login">
    <span class="login-text" @click="handleClick">
      登录
    </span>
    <!-- 登录弹出框 -->
    <el-dialog
      title="17GZ8"
      :visible.sync="centerDialogVisible"
      width="351px"
      center
      :append-to-body="true"
      class="login"
    >
      <!-- 登录表单 -->
      <el-form
        ref="ruleForm1"
        :model="ruleForm1"
        :rules="rules1"
        label-width="25px"
        label-position="right"
        class="login"
        :hide-required-asterisk="true"
      >
        <el-form-item prop="name">
          <el-input v-model="ruleForm1.name" placeholder="请输入用户名">
            <i slot="prefix" class="fa fa-user-o" />
          </el-input>
        </el-form-item>

        <el-form-item prop="password">
          <el-input v-model="ruleForm1.password" type="password" placeholder="请输入密码">
            <i slot="prefix" class="fa fa-lock" />
          </el-input>
        </el-form-item>

        <div class="tips">
          <el-checkbox>
            记住密码
          </el-checkbox>
          <div class="register" style="color:#1090b9" @click="register">
            立即注册
          </div>
        </div>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="danger" round @click="centerDialogVisible = false">登录</el-button>
      </span>

      <!-- 注册弹出框 -->
      <el-dialog
        :visible.sync="registerDialogVisible"
        width="370px"
        :append-to-body="true"
        class="register"
      >
        <!-- 注册类型 -->
        <div class="register-type">
          <div v-for="(item, index) in registerType" :key="index" :class="{activeType: registerTypeIndex===index}" @click="switchType(index)">
            <div>{{ registerType[index] }}</div>
          </div>
        </div>
        <!-- 个人注册表单 -->
        <el-form
          v-show="registerPersonal"
          ref="ruleForm2"
          :model="ruleForm2"
          :rules="rules2"
          label-width="25px"
          label-position="right"
          :hide-required-asterisk="true"
        >
          <el-form-item prop="User">
            <el-input v-model="ruleForm2.User" placeholder="用户名">
              <i slot="prefix" class="fa fa-address-card-o" />
              <span slot="suffix" style="color:red;font-size:20px">*</span>
            </el-input>
          </el-form-item>

          <el-form-item prop="name">
            <el-input v-model="ruleForm2.name" placeholder="姓名">
              <i slot="prefix" class="fa fa-user-o" />
              <span slot="suffix" style="color:red;font-size:20px">*</span>
            </el-input>
          </el-form-item>

          <el-form-item prop="occupation">
            <el-input v-model="ruleForm2.occupation" placeholder="职业 (选填)">
              <i slot="prefix" class="fa fa-id-badge" />
            </el-input>
          </el-form-item>

          <el-form-item prop="remarks">
            <el-input v-model="ruleForm2.remarks" placeholder="备注 (选填)">
              <i slot="prefix" class="fa fa-edit" />
            </el-input>
          </el-form-item>

          <el-form-item prop="phoneNum">
            <el-input v-model="ruleForm2.phoneNum" placeholder="手机号">
              <i slot="prefix" class="fa fa-mobile-phone" />
              <span slot="suffix" style="color:red;font-size:20px">*</span>
            </el-input>
          </el-form-item>

          <el-form-item prop="password">
            <el-input v-model="ruleForm2.password" type="password" placeholder="请输入密码（最少6位）">
              <i slot="prefix" class="fa fa-lock" />
              <span slot="suffix" style="color:red;font-size:20px">*</span>
            </el-input>
          </el-form-item>

          <el-form-item prop="passwordCheck">
            <el-input v-model="ruleForm2.passwordCheck" type="password" placeholder="请确认密码">
              <i slot="prefix" class="fa fa-lock" />
              <span slot="suffix" style="color:red;font-size:20px">*</span>
            </el-input>
          </el-form-item>

          <el-form-item prop="code">
            <el-input v-model="ruleForm2.code" placeholder="请输入验证码" class="code">
              <el-button slot="suffix">
                获取验证码
              </el-button>
            </el-input>
          </el-form-item>
        </el-form>

        <!-- 单位注册表单 -->
        <el-form
          v-show="registerUnit"
          ref="ruleForm3"
          :model="ruleForm3"
          :rules="rules3"
          label-width="25px"
          label-position="right"
          :hide-required-asterisk="true"
          class="unit"
        >
          <el-form-item prop="User">
            <el-input v-model="ruleForm3.User" placeholder="用户名">
              <i slot="prefix" class="fa fa-address-card-o" />
              <span slot="suffix" style="color:red;font-size:20px">*</span>
            </el-input>
          </el-form-item>

          <el-form-item prop="scholl">
            <el-input v-model="ruleForm3.scholl" placeholder="学校全称">
              <i slot="prefix" class="fa fa-institution" />
              <span slot="suffix" style="color:red;font-size:20px">*</span>
            </el-input>
          </el-form-item>

          <el-form-item prop="organization">
            <el-input v-model="ruleForm3.organization" placeholder="组织机构代码">
              <i slot="prefix" class="fa fa-qrcode" />
              <span slot="suffix" style="color:red;font-size:20px">*</span>
            </el-input>
          </el-form-item>

          <el-form-item prop="unitPhone">
            <el-input v-model="ruleForm3.unitPhone" placeholder="单位电话">
              <i slot="prefix" class="fa fa-phone" />
              <span slot="suffix" style="color:red;font-size:20px">*</span>
            </el-input>
          </el-form-item>

          <el-form-item prop="contacts">
            <el-input v-model="ruleForm3.contacts" placeholder="联系人姓名">
              <i slot="prefix" class="fa fa-user" />
              <span slot="suffix" style="color:red;font-size:20px">*</span>
            </el-input>
          </el-form-item>

          <el-form-item prop="contactsID">
            <el-input v-model="ruleForm3.contactsID" placeholder="联系人身份（在校职位）">
              <i slot="prefix" class="fa fa-id-card" />
              <span slot="suffix" style="color:red;font-size:20px">*</span>
            </el-input>
          </el-form-item>

          <el-form-item prop="PhoneNum">
            <el-input v-model="ruleForm3.PhoneNum" placeholder="手机号">
              <i slot="prefix" class="fa fa-mobile-phone" />
              <span slot="suffix" style="color:red;font-size:20px">*</span>
            </el-input>
          </el-form-item>

          <el-form-item prop="email">
            <el-input v-model="ruleForm3.email" placeholder="邮箱">
              <i slot="prefix" class="fa fa-envelope-open-o" />
              <span slot="suffix" style="color:red;font-size:20px">*</span>
            </el-input>
          </el-form-item>

          <el-form-item prop="remarks">
            <el-input v-model="ruleForm3.remarks" placeholder="备注">
              <i slot="prefix" class="fa fa-edit" />
            </el-input>
          </el-form-item>

          <el-form-item prop="password">
            <el-input v-model="ruleForm3.password" type="password" placeholder="请输入密码 (最少6位)">
              <i slot="prefix" class="fa fa-lock" />
              <span slot="suffix" style="color:red;font-size:20px">*</span>
            </el-input>
          </el-form-item>

          <el-form-item prop="passwordCheck">
            <el-input v-model="ruleForm3.passwordCheck" type="password" placeholder="请确认密码">
              <i slot="prefix" class="fa fa-lock" />
              <span slot="suffix" style="color:red;font-size:20px">*</span>
            </el-input>
          </el-form-item>

          <el-form-item prop="appendix">
            <el-input v-model="ruleForm3.appendix" placeholder="上传附件 (学校盖章加入协议)" class="upload">
              <i slot="prefix" class="fa fa-cloud-upload" />
            </el-input>
          </el-form-item>

          <el-form-item prop="code">
            <el-input v-model="ruleForm3.code" placeholder="请输入验证码" class="code">
              <el-button slot="suffix">
                获取验证码
              </el-button>
            </el-input>
          </el-form-item>
        </el-form>

        <div class="tips">
          <el-checkbox>
            我同意
          </el-checkbox>
          <div class="register" style="color:#1090b9">
            使用条款及隐私政策
          </div>
        </div>

        <span slot="footer" class="dialog-footer">
          <el-button type="danger" round>完成</el-button>
        </span>
      </el-dialog>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      centerDialogVisible: false,
      registerDialogVisible: false,
      registerTypeIndex: 0,
      registerPersonal: true,
      registerUnit: false,
      ruleForm1: { // 登录表单
        name: '',
        password: ''
      },
      rules1: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      ruleForm2: { // 个人注册表单
        User: '',
        name: '',
        occupation: '',
        remarks: '',
        phoneNum: '',
        password: '',
        passwordCheck: '',
        code: ''
      },
      rules2: {
        User: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        occupation: [
          { required: false, trigger: 'blur' }
        ],
        remarks: [
          { required: false, trigger: 'blur' }
        ],
        phoneNum: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        passwordCheck: [
          { required: true, message: '请确认密码', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      },
      ruleForm3: { // 单位注册表单
        User: '',
        scholl: '',
        organization: '',
        unitPhone: '',
        contacts: '',
        contactsID: '',
        PhoneNum: '',
        email: '',
        remarks: '',
        password: '',
        passwordCheck: '',
        appendix: '',
        code: ''
      },
      rules3: {
        User: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        scholl: [
          { required: true, message: '请输入学校全称', trigger: 'blur' }
        ],
        organization: [
          { required: true, message: '请输入组织机构代码', trigger: 'blur' }
        ],
        unitPhone: [
          { required: true, message: '请输入单位电话', trigger: 'blur' }
        ],
        contacts: [
          { required: true, message: '请输入联系人姓名', trigger: 'blur' }
        ],
        contactsID: [
          { required: true, message: '请输入联系人身份', trigger: 'blur' }
        ],
        PhoneNum: [
          { required: true, message: '请输入手机号', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' }
        ],
        remarks: [
          { required: false, trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        passwordCheck: [
          { required: true, message: '请确认密码', trigger: 'blur' }
        ],
        appendix: [
          { required: false, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      },
      registerType: [
        '个人注册',
        '单位注册'
      ]
    }
  },
  methods: {
    handleClick () {
      this.centerDialogVisible = true
    },
    register () {
      this.registerDialogVisible = true
    },
    switchType (index) {
      this.registerTypeIndex = index
      if (index === 0) {
        this.registerPersonal = true
        this.registerUnit = false
      } else {
        this.registerUnit = true
        this.registerPersonal = false
      }
    }
  }
}
</script>

<style>
/* 下面更改输入框的样式需要把scope去掉 */
.el-form-item__content {
  margin-left: 0 !important;
}
.el-input__inner {
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0;
}
.login .dialog-footer .el-button {
  width: 270px;
  border-radius: 10px;
}
.login-text{
  font-size:18px;
}
.login .tips {
  display: flex;
  justify-content: space-between;
}
/* 注册弹框开始 */
.register-type {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-size: 30px;
  color: #FF6262;
  height: 40px;
  margin-bottom: 30px;
}
.register .unit .upload input::-webkit-input-placeholder{
  color:rgb(60, 91, 231);
}
.register .code .el-input__inner {
  padding: 0 30px;
}
.register .code .el-button {
  width: 94px;
  height: 30px;
  padding: 0;
  border: 1px solid #FF6262;
  color: #FF6262;
}
.register .tips {
  display: flex;
  justify-content: space-between;
}
.register .el-dialog__footer {
  text-align: center;
}
.register .dialog-footer .el-button {
  width: 200px;
  border-radius: 4px;
}
.activeType {
  font-size: 35px;
}
</style>
