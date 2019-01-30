<template>
  <div :class="prefixCls">
    <Menu
      ref="menuExpand"
      :class="expandClasses"
      v-show="!collapsed"
      :theme="theme"
      width="auto"
      accordion
      :active-name="activeName"
      :open-names="openNames">

      <Submenu v-for="menu in menus" :key="menu.name" :name="menu.name">
        <template slot="title">
          <Icon :type="menu.meta.icon" />
          {{ $t(menu.meta.title) }}
        </template>

        <router-link
          v-for="item in menu.children"
          :key="item.name"
          :to="{name: item.name}">
          <MenuItem :name="item.name">
            {{ $t(item.meta.title) }}
          </MenuItem>
        </router-link>
      </Submenu>
    </Menu>

    <Menu
      v-show="collapsed"
      :theme="theme"
      width="auto"
      :class="collapsedClasses">
      <MenuItem
        v-for="menu in menus"
        :key="menu.name"
        :name="menu.name"
        :class="{'collapsed-active-item': collapsedActiveName === menu.name}">
        <Dropdown placement="right-start">
          <Icon :type="menu.meta.icon" size="16" />
          <DropdownMenu slot="list">
            <router-link
              v-for="item in menu.children"
              :key="item.name"
              :to="{name: item.name}">
              <DropdownItem
                :class="{ 'collapsed-active-dropdown-item': item.name === activeName }">
                {{ $t(item.meta.title) }}
              </DropdownItem>
            </router-link>
          </DropdownMenu>
        </Dropdown>
      </MenuItem>
    </Menu>
  </div>
</template>

<script>
import { menus } from '@/router'

const prefixCls = 'prophet-menubar'

export default {
  props: {
    collapsed: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {
      menus,
      prefixCls,
      theme: 'dark'
    }
  },

  computed: {
    expandClasses() {
      return `${prefixCls}-expand`
    },

    collapsedClasses() {
      return `${prefixCls}-collapsed`
    },

    menuNames() {
      return this.menus.map(menu => menu.name)
    },

    menuItemNames() {
      return this.menus.reduce((ret, menu) => {
        return ret.concat(menu.children.map(item => item.name))
      }, [])
    },

    activeName() {
      const matched = this.$route.matched
      for (let match of matched) {
        if (this.menuItemNames.includes(match.name)) {
          return match.name
        }
      }
      return ''
    },

    collapsedActiveName() {
      return this.openNames.length ? this.openNames[0] : ''
    },

    openNames() {
      const matched = this.$route.matched
      for (let match of matched) {
        if (this.menuNames.includes(match.name)) {
          return [match.name]
        }
      }
      return []
    }
  },

  watch: {
    openNames() {
      this.$nextTick(this.$refs.menuExpand.updateOpened)
    }
  }
}
</script>

<style lang="less">
@import "../../styles/index.less";

.prophet-menubar {
  margin: 16px 0;

  &-collapsed {
    .ivu-menu-item {
      padding: 0;

      &-active,
      &-selected {
        background: @menu-dark-title !important;
        color: @menu-dark-subsidiary-color !important;
      }

      &.collapsed-active-item {
        color: #fff !important;
      }

      .ivu-dropdown {
        height: 40px;
        line-height: 40px;
        margin: 4px 0;

        i {
          padding: 0 32px;
        }

        .ivu-select-dropdown {
          padding: 0;
          border-radius: 0;
          background: transparent;

          .ivu-dropdown-menu {
            width: 160px;
            padding: 4px 0;
            margin-left: 2px;
            border-radius: 4px;
            background: @menu-dark-title;

            .ivu-dropdown-item {
              background: transparent;
              color: @menu-dark-subsidiary-color;
              cursor: pointer;
              height: 40px;
              line-height: 40px;
              padding: 0 16px;

              &:hover {
                color: #fff;
              }

              &.collapsed-active-dropdown-item {
                background: @primary-color;
              }
            }
          }
        }
      }
    }
  }
}
</style>
