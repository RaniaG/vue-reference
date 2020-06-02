<template>
  <div>
    <p>vue will not be able to know that two templates are different bec they have the same exact tags</p>
    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username" />
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" />
    </template>
    <p>we need to use keys to let it know they are different so it can re-render them</p>
    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username" key="username-input" />
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" key="email-input" />
    </template>
  </div>
</template>
  </div>
</template>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>