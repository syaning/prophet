<template>
  <div>
    <Row :gutter="16">
      <Col :xs="24" :md="8">
        <figure class="screenshot">
          <router-link to="/404">
            <img class="screenshot" src="@/assets/404.png" />
          </router-link>
          <figcaption>404</figcaption>
        </figure>
      </Col>

      <Col :xs="24" :md="8">
        <figure class="screenshot">
          <img class="screenshot" src="@/assets/404.png" @click="toLogin" />
          <figcaption>Login</figcaption>
        </figure>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  methods: {
    toLogin() {
      this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
    }
  }
}
</script>

<style lang="scss">
.screenshot {
  text-align: center;

  img {
    width: 100%;
    transition: opacity .35s;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  figcaption {
    font-size: 1.5rem;
  }
}
</style>
