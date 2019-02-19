<template>
  <div :class="prefixCls">
    <Menu
      ref="menuExpand"
      :class="expandedClasses"
      v-show="!collapsed"
      :theme="theme"
      width="auto"
      accordion
      :active-name="activeName"
      :open-names="openNames">

      <template v-for="menu in menus">
        <Submenu v-if="menu.children" :key="menu.name" :name="menu.name">
          <template slot="title">
            <Icon :type="menu.meta.icon" />
            {{ $t(menu.meta.title) }}
          </template>
          <router-link v-for="item in menu.children" :key="item.name" :to="{ name: item.name }">
            <MenuItem :name="item.name">
              {{ $t(item.meta.title) }}
            </MenuItem>
          </router-link>
        </Submenu>

        <router-link v-else :key="menu.name" :to="{ name: menu.name }">
          <MenuItem :name="menu.name">
            <Icon :type="menu.meta.icon" />
            {{ $t(menu.meta.title) }}
          </MenuItem>
        </router-link>
      </template>
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

        <Dropdown v-if="menu.children" placement="right-start">
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

        <Tooltip v-else :content="$t(menu.meta.title)" placement="right">
          <router-link :to="{ name: menu.name }">
            <Icon :type="menu.meta.icon" />
          </router-link>
        </Tooltip>
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
    expandedClasses() {
      return `${prefixCls}-expanded`
    },

    collapsedClasses() {
      return `${prefixCls}-collapsed`
    },

    menuNames() {
      return this.menus.map(menu => menu.name)
    },

    menuItemNames() {
      return this.menus.reduce((ret, menu) => {
        if (menu.children) {
          return ret.concat(menu.children.map(item => item.name))
        }
        return ret.concat(menu.name)
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
      return this.openNames.length ? this.openNames[0] : this.activeName
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

  &-expanded {
    > a > .ivu-menu-item {
      i {
        margin-right: 8px;
      }

      &-active,
      &-selected {
        background: #2d8cf0 !important;
        color: #fff !important;
      }
    }
  }

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

        > .ivu-tooltip i {
          color: #fff;
        }
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

      > .ivu-tooltip {
        display: block;
        height: 40px;
        line-height: 40px;
        margin: 4px 0;

        .ivu-tooltip-arrow {
          border-right-color: @menu-dark-title;
        }

        .ivu-tooltip-inner {
          background: @menu-dark-title;
        }

        i {
          padding: 0 32px;
          color: @menu-dark-subsidiary-color;
        }
      }
    }
  }
}
</style>
