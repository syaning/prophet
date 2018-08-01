<template>
  <Dropdown @on-click="onMenuClick">
    <a href="javascript:void(0)">
      <Avatar icon="ios-person" style="background-color: #87d068" />
    </a>
    <DropdownMenu slot="list">
      <DropdownItem name="profile">Profile</DropdownItem>
      <DropdownItem name="logout">Logout</DropdownItem>
    </DropdownMenu>
  </Dropdown>
</template>

<script>
export default {
  methods: {
    onMenuClick(name) {
      const fn = this[name]
      if (fn && typeof fn === 'function') {
        fn.call(this)
      }
    },

    logout() {
      this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
    }
  }
}
</script>
