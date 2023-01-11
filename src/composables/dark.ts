export const isDark = useDark()
export const toggleDark = useToggle(isDark)

const keys = useMagicKeys()
const cmdJ = keys['cmd+J']

whenever(cmdJ, () => toggleDark())
