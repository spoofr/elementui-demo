<template>
  <div class="Elements">

    <el-container>
      <el-header>
        <el-row :gutter="20" type="flex" justify="center">
          <el-col :xs="24" :sm="24" :md="20" :lg="14" :xl="12">
            <h1>Element UI Components<span><el-button type="success" size="small" style="float: right;" @click="alert">Click Me!</el-button></span></h1>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-row :gutter="20" type="flex" justify="center">
          <el-col :xs="24" :sm="24" :md="20" :lg="14" :xl="12">

            <!-- Card -->
            <el-card shadow="hover">
              <div slot="header">
                <span>Standard Form</span>
                <el-button style="float: right; padding: 3px 0" type="text" @click="openMessageBox">More..</el-button>
              </div>

              <!-- Form -->
              <el-form :model="form1" label-position="top" :rules="rules" ref="form1" label-width="130px" class="demo-form1">
                <el-form-item label="Activity name" prop="name">
                  <el-input v-model="form1.name"></el-input>
                </el-form-item>
                <el-form-item label="Activity zone" prop="region">
                  <el-select v-model="form1.region" placeholder="Activity zone">
                    <el-option label="Kelantan" value="kelantan"></el-option>
                    <el-option label="Terengganu" value="terengganu"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="Activity time" required>
                  <el-col :xs="24" :sm="24" :md="20" :lg="14" :xl="12" style="padding: 0px">
                    <el-form-item prop="date1">
                      <el-date-picker type="date" placeholder="Pick a date" v-model="form1.date1" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                  </el-col>
                  <el-col class="line" :span="1">-</el-col>
                  <el-col :xs="24" :sm="24" :md="20" :lg="14" :xl="12" style="padding: 0px">
                    <el-form-item prop="date2">
                      <el-time-picker placeholder="Pick a time" v-model="form1.date2" style="width: 100%;"></el-time-picker>
                    </el-form-item>
                  </el-col>
                </el-form-item>
                <el-form-item label="Instant delivery" prop="delivery">
                  <el-switch v-model="form1.delivery"></el-switch>
                </el-form-item>
                <el-form-item label="Activity type" prop="type">
                  <el-checkbox-group v-model="form1.type">
                    <el-checkbox label="Online activities" name="type"></el-checkbox>
                    <el-checkbox label="Promotion activities" name="type"></el-checkbox>
                    <el-checkbox label="Offline activities" name="type"></el-checkbox>
                    <el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item label="Resources" prop="resource">
                  <el-radio-group v-model="form1.resource">
                    <el-radio label="Sponsorship"></el-radio>
                    <el-radio label="Venue"></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="Activity form" prop="desc">
                  <el-input type="textarea" v-model="form1.desc" maxlength="30" show-word-limit></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('form1')">Create</el-button>
                  <el-button @click="resetForm('form1')">Reset</el-button>
                </el-form-item>
              </el-form>
              <!-- End Form -->
              
            </el-card>
            <!-- End Card -->

            <div style="margin: 50px"></div>
            <el-card shadow="hover">
              <div slot="header">
                <span>Add or delete form dynamically</span>
              </div>

              <!-- Form -->
              <el-form label-position="top" :model="form2" ref="form2" label-width="200px" class="demo-dynamic">
                <el-form-item
                  v-for="(person, index) in form2.persons"
                  :label="'Person ' + index"
                  :key="person.key"
                  :prop="'persons.' + index + '.value'"
                  :rules="{
                    required: true, message: 'Person can not be null', trigger: 'blur'
                  }"
                >
                  <el-input v-model="person.value">
                    <el-button slot="append" icon="el-icon-delete" @click.prevent="removePerson(person)"></el-button>
                  </el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('form2')">Submit</el-button>
                  <el-button @click="addPerson">New person</el-button>
                  <el-button @click="resetForm('form2')">Reset</el-button>
                </el-form-item>
              </el-form>
              <!-- End Form -->
              
            </el-card>

          </el-col>
        </el-row>
      </el-main>
    </el-container>

    

  </div>
</template>

<style lang="scss">


</style>


<script>
export default {
    data() {
      return {
        form2: {
          persons: [{
            key: 1,
            value: ''
          }]
        },
        form1: {
          name: '',
          address: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: 'Please input Activity name', trigger: 'blur' },
            { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }
          ],
          region: [
            { required: true, message: 'Please select Activity zone', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: 'Please pick a time', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: 'Please select at least one activity type', trigger: 'change' }
          ],
          resource: [
            { required: true, message: 'Please select activity resource', trigger: 'change' }
          ],
          desc: [
            { required: true, message: 'Please input activity form', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      removePerson(item) {
        var index = this.form2.persons.indexOf(item);
        if (index !== -1) {
          this.form2.persons.splice(index, 1);
        }
      },
      addPerson() {
        this.form2.persons.push({
          key: Date.now(),
          value: ''
        });
      },
      alert() {
        this.$notify({
          title: 'Success',
          message: 'This is a success message',
          type: 'success'
        });
      },
      openMessageBox() {
        this.$alert('This is a message', 'Title', {
          confirmButtonText: 'OK',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
    }
  }
</script>
