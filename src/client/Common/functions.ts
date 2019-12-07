export const readSessionStorage = (name: string): string => {
  return window.sessionStorage.getItem(name)
}

export const removeSessionStorage = (name: string): void => {
  window.sessionStorage.removeItem(name)
}

export const checkAndWriteSessionStorage = (
  name: string,
  param: string
): void => {
  if (window.sessionStorage.getItem(name) == null) {
    window.sessionStorage.setItem(name, param)
  }
}

export const overwriteSessionStorage = (name: string, param: string): void => {
  window.sessionStorage.setItem(name, param)
}
