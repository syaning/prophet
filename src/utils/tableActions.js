/**
 * Create table actions (dropdown items).
 *
 * @param  {Array<Object>} actions
 * @param  {Object} context
 * @return {Function} render function
 *
 * action: { name: String, title: String, fn: Function }
 */
export function createActions(actions, context) {
  return function render(h, params) {
    const fnMap = actions.reduce((ret, action) => {
      ret[action.name] = action.fn
      return ret
    }, {})

    const items = actions.map(action => {
      return h('DropdownItem', { props: { name: action.name } }, action.title)
    })

    return h('Dropdown', {
      on: {
        'on-click': (name) => {
          const fn = fnMap[name]
          if (fn && typeof fn === 'function') {
            fn.call(context, params.row)
          }
        }
      }
    }, [
      h('a', ['Actions ', h('Icon', { props: { type: 'ios-arrow-down' } })]),
      h('DropdownMenu', { slot: 'list' }, items)
    ])
  }
}
