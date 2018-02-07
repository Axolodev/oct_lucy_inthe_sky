import { OPEN_DIALOG, CLOSE_DIALOG } from './action_types.js'

export function openDialog() {
  return {
    type: OPEN_DIALOG
  }
}

export function closeDialog() {
  return {
    type: CLOSE_DIALOG
  }
}