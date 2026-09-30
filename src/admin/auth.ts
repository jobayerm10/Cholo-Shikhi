const ADMIN_KEY = 'cholo_shikhi_admin_session'

export const DEMO_EMAIL = 'admin@choloshikhi.com'
export const DEMO_PASSWORD = 'admin123'

export function isAdminAuthenticated(): boolean {
  try {
    return sessionStorage.getItem(ADMIN_KEY) === '1'
  } catch {
    return false
  }
}

export function adminLogin(): void {
  try {
    sessionStorage.setItem(ADMIN_KEY, '1')
  } catch {
    /* storage unavailable */
  }
}

export function adminLogout(): void {
  try {
    sessionStorage.removeItem(ADMIN_KEY)
  } catch {
    /* storage unavailable */
  }
}
