<template>
	<div>
		<el-form ref="loginForm" :rules="rules" :model="form" label-width="80px">
			<el-form-item label="原密码" prop="oldpassword">
				<el-input v-model="form.oldpassword"></el-input>
			</el-form-item>
			<el-form-item label="新密码" prop="newpassword">
				<el-input v-model="form.newpassword"></el-input>
			</el-form-item>
			<el-form-item label="确认密码" prop="confimpassword">
				<el-input v-model="form.confimpassword"></el-input>
			</el-form-item>
			
			<el-form-item>
				<el-button type="primary" @click="onSubmit('loginForm')">确认</el-button>
				 <el-button @click="resetForm('loginForm')">重置</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		name: 'AppLogin',
		data() {
			var newPass = ''
			var validatePass = (rule, value, callback) => {
				!/[a-z]/.test(value) && callback(new Error('没有包含小写字母')); 
				
				!/[A-Z]/.test(value) && callback(new Error('没有包含大写字母'));
				
				!/[0-9]/.test(value) && callback(new Error('没有包含数字')); 
				
				newPass = value
				callback();
			};
			var confirmPass = (rule, value, callback) => {
				if (value !== newPass){
					callback(new Error('两次密码不一致'));
				}
				callback();
			}
			return {
				form: {
					oldpassword: '',
					newpassword: '',
					confimpassword: ''
				},
				rules: {
					oldpassword: [
						{ required: true, message: '请输入密码', trigger: 'blur' }
					],
					newpassword: [
						{ required: true, message: '请输入新密码', trigger: 'blur' },
						{ min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' },
						{ validator: validatePass, trigger: 'blur' }
					],
					confimpassword: [
						{ required: true, message: '请输入确认密码', trigger: 'blur' },
						{ validator: confirmPass, trigger: 'blur' }
					]
				}
			}
		},
		methods: {
			onSubmit(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						let data = this.form
						console.log(data)
						alert(JSON.stringify(data))
						// 此处 加密 调用接口
					} else {
						this.$message.error('表单信息有误');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			}
		}
	}
</script>

<style>
</style>
