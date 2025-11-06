import { useData as useData$ } from 'vitepress'
import type { AGWTheme } from '../types/index'

export const useData: typeof useData$<AGWTheme.Config> = useData$
