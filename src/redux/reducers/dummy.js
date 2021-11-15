/**
 * @param {boolean} state
 * @param {action} action
 *
 * @return {boolean}
 */
export default function dummy(state = true, {type}) {
  switch (type) {
    case 'DUMMY':
      return false;
    default:
      return state;
  }
}
