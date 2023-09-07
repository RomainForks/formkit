import { FormKitTypeDefinition } from '@formkit/core'
import { textInput, casts } from '../compose'

/**
 * Input definition for a hidden input.
 * @public
 */
export const hidden: FormKitTypeDefinition = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: /*#__PURE__*/ textInput(),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: 'input',
  /**
   * An array of extra props to accept for this input.
   */
  props: [],
  /**
   * Additional features that should be added to your input
   */
  features: [casts],
}
