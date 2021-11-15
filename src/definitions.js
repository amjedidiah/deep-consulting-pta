// Type definitions

/**
 * A redux action
 * @typedef {{type: string}} action
 */

/**
 * Definition for action creator
 * @typedef {() => action} actionCreator
 */

/**
 * An object ID
 * @typedef {string} id
 */

/**
 * Redux store
 * @typedef {object} store
 * @property {() => action} dispatch - Dispatches actions or action creators
 * @property {function} getState - Returns current state
 * @property {function} subscribe - Adds functions to execute on state change
 */
