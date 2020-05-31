<template>
  <div class="row">
    <div class="col-md-6">
      <form>
        <div class="form-group">
          <app-custom v-model="isOn"></app-custom>
        </div>
        <div class="form-group row">
          <label for="name" class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Full name"
              v-model.lazy="user.name"
            />
          </div>
        </div>

        <div class="form-group row">
          <label for="email" class="col-sm-2 col-form-label">Email address</label>
          <div class="col-sm-10">
            <input
              v-model="user.email"
              type="email"
              class="form-control"
              id="email"
              placeholder="name@example.com"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="age" class="col-sm-2 col-form-label">Age</label>
          <div class="col-sm-10">
            <input v-model="user.age" type="text" class="form-control" id="age" />
          </div>
        </div>
        <div class="form-group">
          <div class="row">
            <legend class="col-form-label col-sm-2 pt-0">Gender</legend>
            <div class="col-sm-10">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  id="male"
                  value="Male"
                  v-model="user.gender"
                />
                <label class="form-check-label" for="male">Male</label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  id="female"
                  value="Female"
                  v-model="user.gender"
                />
                <label class="form-check-label" for="female">Female</label>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label for="country" class="col-sm-2 col-form-label">Country</label>
          <div class="col-sm-10">
            <select class="form-control" id="country" v-model="user.country">
              <option v-for="cntry of countries" :key="cntry.id" :value="cntry.id">{{cntry.name}}</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label for="comment">Comments</label>
          <textarea class="form-control" id="comment" rows="3" v-model="preferences.comment"></textarea>
        </div>
        <div class="form-group">
          <div class="form-check form-check-inline" v-for="paytype in paymentTypes" :key="paytype">
            <input
              class="form-check-input"
              type="checkbox"
              :id="paytype"
              v-model="preferences.paymentTypes"
              :value="paytype"
            />
            <label class="form-check-label" :for="paytype">{{paytype}}</label>
          </div>
        </div>
      </form>
    </div>
    <div class="col-md-6">
      <div>isOn:{{isOn}}</div>
      <div>name:{{user.name}}</div>
      <div>email:{{user.email}}</div>
      <div>age:{{user.age}}</div>
      <div>gender:{{user.gender}}</div>
      <div>country:{{countries.find(e=>e.id==user.country).name}}</div>
      <div>comment:{{preferences.comment}}</div>
      <div>
        Payment Types:
        <ul>
          <li v-for="payType in preferences.paymentTypes" :key="payType">{{payType}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import custom from "./customInput";
export default {
  data: function() {
    return {
      user: {
        name: "",
        email: "",
        age: 24,
        gender: "Male",
        country: 1
      },
      preferences: {
        paymentTypes: [],
        comment: ""
      },
      isOn: true,
      countries: [
        { id: 1, name: "EG" },
        { id: 2, name: "USA" },
        { id: 3, name: "UAE" },
        { id: 4, name: "UK" }
      ],
      paymentTypes: ["Visa", "Master Card", "Cash On Deliver"]
    };
  },
  components: {
    appCustom: custom
  }
};
</script>

<style lang="scss" scoped>
</style>