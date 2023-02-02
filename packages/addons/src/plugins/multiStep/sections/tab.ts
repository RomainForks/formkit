import { createSection } from '@formkit/inputs'

/**
 * Tab section, holds a group of tabs
 *
 * @public
 */
export const tab = createSection('tab', () => ({
  $el: 'button',
  for: ['step', 'index', '$steps'],
  attrs: {
    onClick: '$handlers.setActiveStep($step)',
    'data-active': '$step.isActiveStep',
    'data-valid': '$step.isValid',
    'data-visited': '$step.hasBeenVisited',
    role: 'tab',
    id: '$id + "_tab_" + $index',
    'aria-selected': '$step.isActiveStep || false',
    'aria-controls': '$step.id',
    tabindex: {
      if: '$step.isActiveStep',
      then: '0',
      else: '-1',
    },
  },
}))
