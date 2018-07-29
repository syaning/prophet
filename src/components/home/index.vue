<template>
  <div class="home-wrapper">
    <Card class="home-card" dis-hover :bordered="false">
      <div style="text-align: center">
        <img src="@/assets/logo.png">
        <p>Welcome to the Prophet system</p>
      </div>
    </Card>
  </div>
</template>

<style scoped lang="scss">
.home-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-card {
  width: 300px;
  background: transparent;

  img {
    width: 100%;
  }

  p {
    font-size: 1.125rem;
  }
}
</style>
